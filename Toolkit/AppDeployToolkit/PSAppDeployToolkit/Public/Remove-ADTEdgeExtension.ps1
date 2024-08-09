﻿#---------------------------------------------------------------------------
#
# 
#
#---------------------------------------------------------------------------

function Remove-ADTEdgeExtension
{
    <#

    .SYNOPSIS
    Removes an extension for Microsoft Edge using the ExtensionSettings policy

    .DESCRIPTION
    This function removes an extension for Microsoft Edge using the ExtensionSettings policy: https://learn.microsoft.com/en-us/deployedge/microsoft-edge-manage-extensions-ref-guide.

    This enables Edge Extensions to be installed and managed like applications, enabling extensions to be pushed to specific devices or users alongside existing GPO/Intune extension policies.

    This should not be used in conjunction with Edge Management Service which leverages the same registry key to configure Edge extensions.

    .PARAMETER ExtensionID
    The ID of the extension to remove.

    .EXAMPLE
    Remove-ADTEdgeExtension -Remove -ExtensionID "extensionID"

    .NOTES
    This function is provided as a template to remove an extension for Microsoft Edge. This should not be used in conjunction with Edge Management Service which leverages the same registry key to configure Edge extensions.

    .NOTES
    This function can be called without an active ADT session.

    .LINK
    https://psappdeploytoolkit.com

    #>

    [CmdletBinding()]
    param
    (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [System.String]$ExtensionID
    )

    begin
    {
        Initialize-ADTFunction -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState
    }

    process
    {
        Write-ADTLogEntry -Message "Removing extension with ID [$ExtensionID]."
        try
        {
            try
            {
                # Return early if the extension isn't installed.
                if (!($installedExtensions = Get-ADTEdgeExtensions).PSObject.Properties -or ($installedExtensions.PSObject.Properties.Name -notcontains $ExtensionID))
                {
                    Write-ADTLogEntry -Message "Extension with ID [$ExtensionID] is not configured. Removal not required."
                    return
                }

                # If the deploymentmode is Remove, remove the extension from the list.
                $installedExtensions.PSObject.Properties.Remove($ExtensionID)
                $null = Set-ADTRegistryKey -Key Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge -Name ExtensionSettings -Value ($installedExtensions | & $Script:CommandTable.'ConvertTo-Json' -Compress)
            }
            catch
            {
                & $Script:CommandTable.'Write-Error' -ErrorRecord $_
            }
        }
        catch
        {
            Invoke-ADTFunctionErrorHandler -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState -ErrorRecord $_
        }
    }

    end
    {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}