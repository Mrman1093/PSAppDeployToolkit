﻿#---------------------------------------------------------------------------
#
#
#
#---------------------------------------------------------------------------

function Remove-ADTContentFromCache
{
    <#
    .SYNOPSIS
        Removes the toolkit content from the cache folder on the local machine and reverts the $dirFiles and $supportFiles directory.

    .DESCRIPTION
        This function removes the toolkit content from the cache folder on the local machine. It also reverts the $dirFiles and $supportFiles directory to their original state. If the specified cache folder does not exist, it logs a message and exits.

    .PARAMETER Path
        The path to the software cache folder.

    .INPUTS
        None

        You cannot pipe objects to this function.

    .OUTPUTS
        None

        This function does not return objects.

    .EXAMPLE
        Remove-ADTContentFromCache -Path 'C:\Windows\Temp\PSAppDeployToolkit'

        Removes the toolkit content from the specified cache folder.

    .NOTES
        An active ADT session is required to use this function.

        Tags: psadt
        Website: https://psappdeploytoolkit.com
        Copyright: (c) 2024 PSAppDeployToolkit Team, licensed under LGPLv3
        License: https://opensource.org/license/lgpl-3-0

    .LINK
        https://psappdeploytoolkit.com
    #>

    [CmdletBinding()]
    param
    (
        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Path = "$((Get-ADTConfig).Toolkit.CachePath)\$((Get-ADTSession).GetPropertyValue('installName'))"
    )

    begin
    {
        try
        {
            $adtSession = Get-ADTSession
            $parentPath = $adtSession.GetPropertyValue('scriptParentPath')
        }
        catch
        {
            $PSCmdlet.ThrowTerminatingError($_)
        }
        Initialize-ADTFunction -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState
    }

    process
    {
        if (![System.IO.Directory]::Exists($Path))
        {
            Write-ADTLogEntry -Message "Cache folder [$Path] does not exist."
            return
        }

        Write-ADTLogEntry -Message "Removing cache folder [$Path]."
        try
        {
            try
            {
                & $Script:CommandTable.'Remove-Item' -Path $Path -Recurse
                $adtSession.SetPropertyValue('DirFiles', (& $Script:CommandTable.'Join-Path' -Path $parentPath -ChildPath Files))
                $adtSession.SetPropertyValue('DirSupportFiles', (& $Script:CommandTable.'Join-Path' -Path $parentPath -ChildPath SupportFiles))
            }
            catch
            {
                & $Script:CommandTable.'Write-Error' -ErrorRecord $_
            }
        }
        catch
        {
            Invoke-ADTFunctionErrorHandler -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorRecord $_ -LogMessage "Failed to remove cache folder [$Path]."
        }
    }

    end
    {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}