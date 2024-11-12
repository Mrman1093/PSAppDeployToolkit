﻿#-----------------------------------------------------------------------------
#
# MARK: Get-ADTRunAsActiveUser
#
#-----------------------------------------------------------------------------

function Get-ADTRunAsActiveUser
{
    <#
    .SYNOPSIS
        Retrieves the active user session information.

    .DESCRIPTION
        The Get-ADTRunAsActiveUser function determines the account that will be used to execute commands in the user session when the toolkit is running under the SYSTEM account.
        The active console user will be chosen first. If no active console user is found, for multi-session operating systems, the first logged-on user will be used instead.

    .INPUTS
        None

        You cannot pipe objects to this function.

    .OUTPUTS
        PSADT.Types.UserSessionInfo

        Returns a custom object containing the user session information.

    .EXAMPLE
        Get-ADTRunAsActiveUser

        This example retrieves the active user session information.

    .NOTES
        An active ADT session is NOT required to use this function.

        Tags: psadt
        Website: https://psappdeploytoolkit.com
        Copyright: (C) 2024 PSAppDeployToolkit Team (Sean Lillis, Dan Cunningham, Muhammad Mashwani, Mitch Richters, Dan Gough).
        License: https://opensource.org/license/lgpl-3-0

    .LINK
        https://psappdeploytoolkit.com
    #>

    [CmdletBinding()]
    param
    (
    )

    # Determine the account that will be used to execute commands in the user session when toolkit is running under the SYSTEM account.
    # The active console user will be chosen first. Failing that, for multi-session operating systems, the first logged on user will be used instead.
    try
    {
        $sessionInfoMember = if (Test-ADTIsMultiSessionOS) { 'IsCurrentSession' } else { 'IsActiveUserSession' }
        foreach ($userSessionInfo in [PSADT.QueryUser]::GetUserSessionInfo())
        {
            if ($userSessionInfo.NTAccount -and $userSessionInfo.$sessionInfoMember)
            {
                return $userSessionInfo
            }
        }
    }
    catch
    {
        $PSCmdlet.ThrowTerminatingError($_)
    }
}
