﻿#-----------------------------------------------------------------------------
#
# MARK: Set-ADTShortcut
#
#-----------------------------------------------------------------------------

function Set-ADTShortcut
{
    <#
    .SYNOPSIS
        Modifies a .lnk or .url type shortcut.

    .DESCRIPTION
        Modifies a shortcut - .lnk or .url file, with configurable options. Only specify the parameters that you want to change.

    .PARAMETER Path
        Path to the shortcut to be changed.

    .PARAMETER TargetPath
        Sets target path or URL that the shortcut launches.

    .PARAMETER Arguments
        Sets the arguments used against the target path.

    .PARAMETER IconLocation
        Sets location of the icon used for the shortcut.

    .PARAMETER IconIndex
        Sets the index of the icon. Executables, DLLs, ICO files with multiple icons need the icon index to be specified. This parameter is an Integer. The first index is 0.

    .PARAMETER Description
        Sets the description of the shortcut as can be seen in the shortcut's properties.

    .PARAMETER WorkingDirectory
        Sets working directory to be used for the target path.

    .PARAMETER WindowStyle
        Sets the shortcut's window style to be minimised, maximised, etc.

    .PARAMETER RunAsAdmin
        Sets the shortcut to require elevated permissions to run.

    .PARAMETER HotKey
        Sets the hotkey to launch the shortcut, e.g. "CTRL+SHIFT+F".

    .INPUTS
        None

        You cannot pipe objects to this function.

    .OUTPUTS
        None

        This function does not generate any output.

    .EXAMPLE
        Set-ADTShortcut -Path "$envCommonDesktop\Application.lnk" -TargetPath "$envProgramFiles\Application\application.exe"

        Creates a shortcut on the All Users desktop named 'Application', targeted to '$envProgramFiles\Application\application.exe'.

    .NOTES
        An active ADT session is NOT required to use this function.
        Website: https://psappdeploytoolkit.com
        Copyright: (c) 2024 PSAppDeployToolkit Team, licensed under LGPLv3
        License: https://opensource.org/license/lgpl-3-0
        https://psappdeploytoolkit.com
    #>

    [CmdletBinding()]
    param
    (
        [Parameter(Mandatory = $true, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true, Position = 0)]
        [ValidateScript({
                if (![System.IO.File]::Exists($_) -or (![System.IO.Path]::GetExtension($Path).ToLower().Equals('.lnk') -and ![System.IO.Path]::GetExtension($Path).ToLower().Equals('.url')))
                {
                    $PSCmdlet.ThrowTerminatingError((New-ADTValidateScriptErrorRecord -ParameterName Path -ProvidedValue $_ -ExceptionMessage 'The specified path does not exist or does not have the correct extension.'))
                }
                return !!$_
            })]
        [System.String]$Path,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$TargetPath,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Arguments,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$IconLocation,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$IconIndex,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Description,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$WorkingDirectory,

        [Parameter(Mandatory = $false)]
        [ValidateSet('Normal', 'Maximized', 'Minimized', 'DontChange')]
        [System.String]$WindowStyle = 'DontChange',

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$RunAsAdmin,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Hotkey
    )

    begin
    {
        # Make this function continue on error.
        Initialize-ADTFunction -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorAction SilentlyContinue
    }

    process
    {
        Write-ADTLogEntry -Message "Changing shortcut [$Path]."
        try
        {
            try
            {
                # Make sure .NET's current directory is synced with PowerShell's.
                [System.IO.Directory]::SetCurrentDirectory((& $Script:CommandTable.'Get-Location' -PSProvider FileSystem).ProviderPath)
                if ($extension -eq '.url')
                {
                    $URLFile = [System.IO.File]::ReadAllLines($Path) | & {
                        process
                        {
                            switch ($_)
                            {
                                { $_.StartsWith('URL=') -and $TargetPath } { "URL=$TargetPath"; break }
                                { $_.StartsWith('IconIndex=') -and ($null -ne $IconIndex) } { "IconIndex=$IconIndex"; break }
                                { $_.StartsWith('IconFile=') -and $IconLocation } { "IconFile=$IconLocation"; break }
                                default { $_; break }
                            }
                        }
                    }
                    [System.IO.File]::WriteAllLines($Path, $URLFile, [System.Text.UTF8Encoding]::new($false))
                }
                else
                {
                    # Open shortcut and set initial properties.
                    $shortcut = [System.Activator]::CreateInstance([System.Type]::GetTypeFromProgID('WScript.Shell')).CreateShortcut($Path)
                    if ($TargetPath)
                    {
                        $shortcut.TargetPath = $TargetPath
                    }
                    if ($Arguments)
                    {
                        $shortcut.Arguments = $Arguments
                    }
                    if ($Description)
                    {
                        $shortcut.Description = $Description
                    }
                    if ($WorkingDirectory)
                    {
                        $shortcut.WorkingDirectory = $WorkingDirectory
                    }
                    if ($Hotkey)
                    {
                        $shortcut.Hotkey = $Hotkey
                    }

                    # Set the WindowStyle based on input.
                    $windowStyleInt = switch ($WindowStyle)
                    {
                        Normal { 1 }
                        Maximized { 3 }
                        Minimized { 7 }
                    }
                    If ($null -ne $windowStyleInt)
                    {
                        $shortcut.WindowStyle = $WindowStyleInt
                    }

                    # Handle icon, starting with retrieval previous value and split the path from the index.
                    $TempIconLocation, $TempIconIndex = $shortcut.IconLocation.Split(',')
                    $IconLocation = if ($IconLocation)
                    {
                        # New icon path was specified. Check whether new icon index was also specified.
                        if ($null -ne $IconIndex)
                        {
                            # Create new icon path from new icon path and new icon index.
                            $IconLocation + ",$IconIndex"
                        }
                        else
                        {
                            # No new icon index was specified as a parameter. We will keep the old one.
                            $IconLocation + ",$TempIconIndex"
                        }
                    }
                    elseif ($null -ne $IconIndex)
                    {
                        # New icon index was specified, but not the icon location. Append it to the icon path from the shortcut.
                        $IconLocation = $TempIconLocation + ",$IconIndex"
                    }
                    if ($IconLocation)
                    {
                        $shortcut.IconLocation = $IconLocation
                    }

                    # Save the changes.
                    $shortcut.Save()

                    # Set shortcut to run program as administrator.
                    if ($PSBoundParameters.ContainsKey('RunAsAdmin'))
                    {
                        $fileBytes = [System.IO.FIle]::ReadAllBytes($Path)
                        $fileBytes[21] = if ($PSBoundParameters.RunAsAdmin)
                        {
                            Write-ADTLogEntry -Message 'Setting shortcut to run program as administrator.'
                            $fileBytes[21] -bor 32
                        }
                        else
                        {
                            Write-ADTLogEntry -Message 'Setting shortcut to not run program as administrator.'
                            $fileBytes[21] -band (-bnot 32)
                        }
                        [System.IO.FIle]::WriteAllBytes($Path, $fileBytes)
                    }
                }
            }
            catch
            {
                & $Script:CommandTable.'Write-Error' -ErrorRecord $_
            }
        }
        catch
        {
            Invoke-ADTFunctionErrorHandler -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorRecord $_ -LogMessage "Failed to change the shortcut [$Path]."
        }
    }

    end
    {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}
