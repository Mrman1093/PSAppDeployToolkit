﻿function Show-ADTInstallationPrompt
{
    <#

    .SYNOPSIS
    Displays a custom installation prompt with the toolkit branding and optional buttons.

    .DESCRIPTION
    Any combination of Left, Middle or Right buttons can be displayed. The return value of the button clicked by the user is the button text specified.

    .PARAMETER Title
    Title of the prompt. Default: the application installation name.

    .PARAMETER Message
    Message text to be included in the prompt

    .PARAMETER MessageAlignment
    Alignment of the message text. Options: Left, Center, Right. Default: Center.

    .PARAMETER ButtonLeftText
    Show a button on the left of the prompt with the specified text

    .PARAMETER ButtonRightText
    Show a button on the right of the prompt with the specified text

    .PARAMETER ButtonMiddleText
    Show a button in the middle of the prompt with the specified text

    .PARAMETER Icon
    Show a system icon in the prompt. Options: Application, Asterisk, Error, Exclamation, Hand, Information, None, Question, Shield, Warning, WinLogo. Default: None

    .PARAMETER NoWait
    Specifies whether to show the prompt asynchronously (i.e. allow the script to continue without waiting for a response). Default: $false.

    .PARAMETER PersistPrompt
    Specify whether to make the prompt persist in the center of the screen every couple of seconds, specified in the AppDeployToolkitConfig.xml. The user will have no option but to respond to the prompt - resistance is futile!

    .PARAMETER MinimizeWindows
    Specifies whether to minimize other windows when displaying prompt. Default: $false.

    .PARAMETER Timeout
    Specifies the time period in seconds after which the prompt should timeout. Default: UI timeout value set in the config XML file.

    .PARAMETER NoExitOnTimeout
    Specifies whether to not exit the script if the UI times out. Default: $false.

    .PARAMETER NotTopMost
    Specifies whether the progress window shouldn't be topmost. Default: $false.

    .INPUTS
    None. You cannot pipe objects to this function.

    .OUTPUTS
    None. This function does not generate any output.

    .EXAMPLE
    Show-ADTInstallationPrompt -Message 'Do you want to proceed with the installation?' -ButtonRightText 'Yes' -ButtonLeftText 'No'

    .EXAMPLE
    Show-ADTInstallationPrompt -Title 'Funny Prompt' -Message 'How are you feeling today?' -ButtonRightText 'Good' -ButtonLeftText 'Bad' -ButtonMiddleText 'Indifferent'

    .EXAMPLE
    Show-ADTInstallationPrompt -Message 'You can customize text to appear at the end of an install, or remove it completely for unattended installations.' -Icon Information -NoWait

    .LINK
    https://psappdeploytoolkit.com

    #>

    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [System.String]$Message,

        [Parameter(Mandatory = $false)]
        [ValidateSet('MiddleLeft', 'MiddleCenter', 'MiddleRight')]
        [System.Drawing.ContentAlignment]$MessageAlignment = 'MiddleCenter',

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$ButtonRightText,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$ButtonLeftText,

        [Parameter(Mandatory = $false)]
        [ValidateNotNullOrEmpty()]
        [System.String]$ButtonMiddleText,

        [Parameter(Mandatory = $false)]
        [ValidateSet('Application', 'Asterisk', 'Error', 'Exclamation', 'Hand', 'Information', 'Question', 'Shield', 'Warning', 'WinLogo')]
        [System.String]$Icon,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$NoWait,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$PersistPrompt,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$MinimizeWindows,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$NoExitOnTimeout,

        [Parameter(Mandatory = $false)]
        [System.Management.Automation.SwitchParameter]$NotTopMost
    )

    dynamicparam {
        # Initialise variables.
        if (!($adtSession = try {Get-ADTSession} catch {[System.Void]$null}))
        {
            Initialize-ADTModule
        }
        $adtConfig = Get-ADTConfig

        # Define parameter dictionary for returning at the end.
        $paramDictionary = [System.Management.Automation.RuntimeDefinedParameterDictionary]::new()

        # Add in parameters we need as mandatory when there's no active ADTSession.
        $paramDictionary.Add('Title', [System.Management.Automation.RuntimeDefinedParameter]::new(
            'Title', [System.String], [System.Collections.Generic.List[System.Attribute]]@(
                [System.Management.Automation.ParameterAttribute]@{Mandatory = !$adtSession}
                [System.Management.Automation.ValidateNotNullOrEmptyAttribute]::new()
            )
        ))
        $paramDictionary.Add('Timeout', [System.Management.Automation.RuntimeDefinedParameter]::new(
            'Timeout', [System.UInt32], [System.Collections.Generic.List[System.Attribute]]@(
                [System.Management.Automation.ParameterAttribute]@{Mandatory = $false}
                [System.Management.Automation.ValidateScriptAttribute]::new({
                    if ($_ -gt $adtConfig.UI.DefaultTimeout)
                    {
                        $PSCmdlet.ThrowTerminatingError((New-ADTValidateScriptErrorRecord -ParameterName Timeout -ProvidedValue $_ -ExceptionMessage 'The installation UI dialog timeout cannot be longer than the timeout specified in the configuration file.'))
                    }
                    return !!$_
                })
            )
        ))

        # Return the populated dictionary.
        return $paramDictionary
    }

    begin {
        # Initialise function.
        Initialize-ADTFunction -Cmdlet $PSCmdlet -SessionState $ExecutionContext.SessionState

        # Set up defaults if not specified.
        if (!$PSBoundParameters.ContainsKey('Title'))
        {
            $PSBoundParameters.Add('Title', $adtSession.GetPropertyValue('InstallTitle'))
        }
        if (!$PSBoundParameters.ContainsKey('Timeout'))
        {
            $PSBoundParameters.Add('Timeout', $adtConfig.UI.DefaultTimeout)
        }
        if ($adtSession)
        {
            $PSBoundParameters.Add('ADTSession', $adtSession)
        }
    }

    process {
        Show-ADTInstallationPromptClassic @PSBoundParameters -ADTConfig $adtConfig
    }

    end {
        Complete-ADTFunction -Cmdlet $PSCmdlet
    }
}
