﻿function Test-ADTRegistryValue
{
    <#

    .SYNOPSIS
    Test if a registry value exists.

    .DESCRIPTION
    Checks a registry key path to see if it has a value with a given name. Can correctly handle cases where a value simply has an empty or null value.

    .PARAMETER Key
    Path of the registry key.

    .PARAMETER Value
    Specify the registry key value to check the existence of.

    .PARAMETER SID
    The security identifier (SID) for a user. Specifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS\$SID format.

    Specify this parameter from the Invoke-ADTAllUsersRegistryChange function to read/edit HKCU registry settings for all users on the system.

    .PARAMETER Wow6432Node
    Specify this switch to check the 32-bit registry (Wow6432Node) on 64-bit systems.

    .INPUTS
    System.String. Accepts a string value for the registry key path.

    .OUTPUTS
    System.String. Returns $true if the registry value exists, $false if it does not.

    .EXAMPLE
    Test-ADTRegistryValue -Key 'HKLM:SYSTEM\CurrentControlSet\Control\Session Manager' -Value 'PendingFileRenameOperations'

    .NOTES
    To test if registry key exists, use Test-Path function like so:

    Test-Path -Path $Key -PathType 'Container'

    .LINK
    https://psappdeploytoolkit.com

    #>

    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true, Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Key,

        [Parameter(Mandatory = $true, Position = 1)]
        [ValidateNotNullOrEmpty()]
        [System.Object]$Value,

        [Parameter(Mandatory = $false, Position = 2)]
        [ValidateNotNullorEmpty()]
        [System.String]$SID,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$Wow6432Node
    )

    begin {
        Initialize-ADTFunction -Cmdlet $PSCmdlet
    }

    process {
        # If the SID variable is specified, then convert all HKEY_CURRENT_USER key's to HKEY_USERS\$SID.
        $Key = if ($PSBoundParameters.ContainsKey('SID'))
        {
            Convert-ADTRegistryPath -Key $Key -Wow6432Node:$Wow6432Node -SID $SID
        }
        else
        {
            Convert-ADTRegistryPath -Key $Key -Wow6432Node:$Wow6432Node
        }

        # Test whether value exists or not.
        if ((Get-Item -LiteralPath $Key -ErrorAction Ignore | Select-Object -ExpandProperty Property -ErrorAction Ignore) -contains $Value)
        {
            Write-ADTLogEntry -Message "Registry key value [$Key] [$Value] does exist."
            return $true
        }
        Write-ADTLogEntry -Message "Registry key value [$Key] [$Value] does not exist."
        return $false
    }

    end {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}