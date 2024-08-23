---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: https://psappdeploytoolkit.com
schema: 2.0.0
---

# Get-ADTFileVersion

## SYNOPSIS
Gets the version of the specified file.

## SYNTAX

```
Get-ADTFileVersion [-File] <FileInfo> [-ProductVersion] [<CommonParameters>]
```

## DESCRIPTION
The Get-ADTFileVersion function retrieves the version information of the specified file.
By default, it returns the FileVersion, but it can also return the ProductVersion if the -ProductVersion switch is specified.

## EXAMPLES

### EXAMPLE 1
```
Get-ADTFileVersion -File "$env:ProgramFilesX86\Adobe\Reader 11.0\Reader\AcroRd32.exe"
```

This example retrieves the FileVersion of the specified Adobe Reader executable.

### EXAMPLE 2
```
Get-ADTFileVersion -File "$env:ProgramFilesX86\Adobe\Reader 11.0\Reader\AcroRd32.exe" -ProductVersion
```

This example retrieves the ProductVersion of the specified Adobe Reader executable.

## PARAMETERS

### -File
The path of the file.

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProductVersion
Switch that makes the command return ProductVersion instead of FileVersion.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
### You cannot pipe objects to this function.
## OUTPUTS

### System.String
### Returns the version of the specified file.
## NOTES
An active ADT session is NOT required to use this function.

Tags: psadt
Website: https://psappdeploytoolkit.com
Copyright: (c) 2024 PSAppDeployToolkit Team, licensed under LGPLv3
License: https://opensource.org/license/lgpl-3-0

## RELATED LINKS

[https://psappdeploytoolkit.com](https://psappdeploytoolkit.com)
