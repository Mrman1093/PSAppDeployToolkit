﻿#---------------------------------------------------------------------------
#
#
#
#---------------------------------------------------------------------------

function Get-ADTMsiTableProperty
{
    <#

    .SYNOPSIS
    Get all of the properties from a Windows Installer database table or the Summary Information stream and return as a custom object.

    .DESCRIPTION
    Use the Windows Installer object to read all of the properties from a Windows Installer database table or the Summary Information stream.

    .PARAMETER Path
    The fully qualified path to an database file. Supports .msi and .msp files.

    .PARAMETER TransformPath
    The fully qualified path to a list of MST file(s) which should be applied to the MSI file.

    .PARAMETER Table
    The name of the the MSI table from which all of the properties must be retrieved. Default is: 'Property'.

    .PARAMETER TablePropertyNameColumnNum
    Specify the table column number which contains the name of the properties. Default is: 1 for MSIs and 2 for MSPs.

    .PARAMETER TablePropertyValueColumnNum
    Specify the table column number which contains the value of the properties. Default is: 2 for MSIs and 3 for MSPs.

    .PARAMETER GetSummaryInformation
    Retrieves the Summary Information for the Windows Installer database.

    Summary Information property descriptions: https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx

    .INPUTS
    None. You cannot pipe objects to this function.

    .OUTPUTS
    System.Management.Automation.PSObject. Returns a custom object with the following properties: 'Name' and 'Value'.

    .EXAMPLE
    # Retrieve all of the properties from the default 'Property' table.
    Get-ADTMsiTableProperty -Path 'C:\Package\AppDeploy.msi' -TransformPath 'C:\Package\AppDeploy.mst'

    .EXAMPLE
    # Retrieve all of the properties from the 'Property' table and then pipe to Select-Object to select the ProductCode property.
    Get-ADTMsiTableProperty -Path 'C:\Package\AppDeploy.msi' -TransformPath 'C:\Package\AppDeploy.mst' -Table 'Property' | Select-Object -ExpandProperty ProductCode

    .EXAMPLE
    # Retrieve the Summary Information for the Windows Installer database.
    Get-ADTMsiTableProperty -Path 'C:\Package\AppDeploy.msi' -GetSummaryInformation

    .NOTES
    This is an internal script function and should typically not be called directly.

    .NOTES
    This function can be called without an active ADT session.

    .LINK
    https://psappdeploytoolkit.com

    #>

    [CmdletBinding(DefaultParameterSetName = 'TableInfo')]
    [OutputType([PSADT.Types.MsiSummaryInfo])]
    param
    (
        [Parameter(Mandatory = $true)]
        [ValidateScript({
                if (!(& $Script:CommandTable.'Test-Path' -Path $_ -PathType Leaf))
                {
                    $PSCmdlet.ThrowTerminatingError((New-ADTValidateScriptErrorRecord -ParameterName Path -ProvidedValue $_ -ExceptionMessage 'The specified path does not exist.'))
                }
                return !!$_
            })]
        [System.String]$Path,

        [Parameter(Mandatory = $false)]
        [ValidateScript({
                if (!(& $Script:CommandTable.'Test-Path' -Path $_ -PathType Leaf))
                {
                    $PSCmdlet.ThrowTerminatingError((New-ADTValidateScriptErrorRecord -ParameterName TransformPath -ProvidedValue $_ -ExceptionMessage 'The specified path does not exist.'))
                }
                return !!$_
            })]
        [System.String[]]$TransformPath,

        [Parameter(Mandatory = $false, ParameterSetName = 'TableInfo')]
        [ValidateNotNullOrEmpty()]
        [System.String]$Table,

        [Parameter(Mandatory = $false, ParameterSetName = 'TableInfo')]
        [ValidateNotNullOrEmpty()]
        [System.Int32]$TablePropertyNameColumnNum,

        [Parameter(Mandatory = $false, ParameterSetName = 'TableInfo')]
        [ValidateNotNullOrEmpty()]
        [System.Int32]$TablePropertyValueColumnNum,

        [Parameter(Mandatory = $true, ParameterSetName = 'SummaryInfo')]
        [System.Management.Automation.SwitchParameter]$GetSummaryInformation
    )

    begin
    {
        # Set default values.
        if (!$PSBoundParameters.ContainsKey('Table'))
        {
            $PSBoundParameters.Add('Table', ('MsiPatchMetadata', 'Property')[[System.IO.Path]::GetExtension($Path) -eq '.msi'])
        }
        if (!$PSBoundParameters.ContainsKey('TablePropertyNameColumnNum'))
        {
            $PSBoundParameters.Add('TablePropertyNameColumnNum', 2 - ([System.IO.Path]::GetExtension($Path) -eq '.msi'))
        }
        if (!$PSBoundParameters.ContainsKey('TablePropertyValueColumnNum'))
        {
            $PSBoundParameters.Add('TablePropertyValueColumnNum', 3 - ([System.IO.Path]::GetExtension($Path) -eq '.msi'))
        }
        $Table = $PSBoundParameters.Table
        $TablePropertyNameColumnNum = $PSBoundParameters.TablePropertyNameColumnNum
        $TablePropertyValueColumnNum = $PSBoundParameters.TablePropertyValueColumnNum

        # Make this function continue on error.
        Initialize-ADTFunction -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorAction SilentlyContinue
    }

    process
    {
        if ($PSCmdlet.ParameterSetName -eq 'TableInfo')
        {
            Write-ADTLogEntry -Message "Reading data from Windows Installer database file [$Path] in table [$Table]."
        }
        else
        {
            Write-ADTLogEntry -Message "Reading the Summary Information from the Windows Installer database file [$Path]."
        }
        try
        {
            try
            {
                # Create a Windows Installer object and define properties for how the MSI database is opened
                $Installer = & $Script:CommandTable.'New-Object' -ComObject WindowsInstaller.Installer
                $msiOpenDatabaseModeReadOnly = 0
                $msiSuppressApplyTransformErrors = 63
                $msiOpenDatabaseModePatchFile = 32
                $msiOpenDatabaseMode = if (($IsMspFile = [IO.Path]::GetExtension($Path) -eq '.msp'))
                {
                    $msiOpenDatabaseModePatchFile
                }
                else
                {
                    $msiOpenDatabaseModeReadOnly
                }

                # Open database in read only mode and apply a list of transform(s).
                $Database = Invoke-ADTObjectMethod -InputObject $Installer -MethodName OpenDatabase -ArgumentList @($Path, $msiOpenDatabaseMode)
                if ($TransformPath -and !$IsMspFile)
                {
                    $null = foreach ($Transform in $TransformPath)
                    {
                        Invoke-ADTObjectMethod -InputObject $Database -MethodName ApplyTransform -ArgumentList @($Transform, $msiSuppressApplyTransformErrors)
                    }
                }

                # Get either the requested windows database table information or summary information.
                if ($PSCmdlet.ParameterSetName -eq 'TableInfo')
                {
                    # Open the requested table view from the database.
                    $TableProperties = [ordered]@{}
                    $View = Invoke-ADTObjectMethod -InputObject $Database -MethodName OpenView -ArgumentList @("SELECT * FROM $Table")
                    $null = Invoke-ADTObjectMethod -InputObject $View -MethodName Execute

                    # Retrieve the first row from the requested table. If the first row was successfully retrieved, then save data and loop through the entire table.
                    # https://msdn.microsoft.com/en-us/library/windows/desktop/aa371136(v=vs.85).aspx
                    while (($Record = Invoke-ADTObjectMethod -InputObject $View -MethodName Fetch))
                    {
                        $TableProperties.Add((Get-ADTObjectProperty -InputObject $Record -PropertyName StringData -ArgumentList @($TablePropertyNameColumnNum)), (Get-ADTObjectProperty -InputObject $Record -PropertyName StringData -ArgumentList @($TablePropertyValueColumnNum)))
                    }

                    # Return the accumulated results. We can't use a custom object for this as we have no idea what's going to be in the properties of a given MSI.
                    if ($TableProperties.Count)
                    {
                        return [pscustomobject]$TableProperties
                    }
                }
                else
                {
                    # Get the SummaryInformation from the windows installer database.
                    # Summary property descriptions: https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx
                    $SummaryInformation = Get-ADTObjectProperty -InputObject $Database -PropertyName SummaryInformation
                    return [PSADT.Types.MsiSummaryInfo]@{
                        CodePage = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(1)
                        Title = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(2)
                        Subject = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(3)
                        Author = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(4)
                        Keywords = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(5)
                        Comments = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(6)
                        Template = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(7)
                        LastSavedBy = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(8)
                        RevisionNumber = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(9)
                        LastPrinted = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(11)
                        CreateTimeDate = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(12)
                        LastSaveTimeDate = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(13)
                        PageCount = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(14)
                        WordCount = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(15)
                        CharacterCount = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(16)
                        CreatingApplication = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(18)
                        Security = Get-ADTObjectProperty -InputObject $SummaryInformation -PropertyName Property -ArgumentList @(19)
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
            Invoke-ADTFunctionErrorHandler -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorRecord $_ -LogMessage "Failed to get the MSI table [$Table]."
        }
        finally
        {
            # Release all COM objects to prevent file locks.
            $null = foreach ($variable in (& $Script:CommandTable.'Get-Variable' -Name View, SummaryInformation, Database, Installer -ValueOnly -ErrorAction Ignore))
            {
                try
                {
                    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($variable)
                }
                catch
                {
                    $null
                }
            }
        }
    }

    end
    {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}