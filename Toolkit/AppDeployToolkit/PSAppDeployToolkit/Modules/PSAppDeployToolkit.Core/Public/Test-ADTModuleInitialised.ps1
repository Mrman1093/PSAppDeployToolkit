function Test-ADTModuleInitialised
{
	return (Get-ADTModuleData).Initialised
}
