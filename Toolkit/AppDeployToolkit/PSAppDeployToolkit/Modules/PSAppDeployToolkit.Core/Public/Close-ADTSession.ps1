﻿function Close-ADTSession
{
    param (
        [ValidateNotNullOrEmpty()]
        [System.Int32]$ExitCode
    )

    # Close the Installation Progress Dialog if running.
    if ($Script:ADT.Sessions.Count.Equals(1) -and (Get-Module -Name PSAppDeployToolkit.Dialogs))
    {
        Close-ADTInstallationProgress
    }

    # Close out the active session and clean up session state.
    ($adtSession = Get-ADTSession).Close($ExitCode)
    [System.Void]$Script:ADT.Sessions.Remove($adtSession)

    # If this was the last session, exit out with our code.
    if (!$Script:ADT.Sessions.Count)
    {
        exit $Script:ADT.LastExitCode
    }
}
