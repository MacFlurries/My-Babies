@echo off
cd /d "%~dp0"
powershell -NoProfile -Command "$s=(New-Object -ComObject WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\Bebe Benji Lamine.lnk');$s.TargetPath='%~dp0start.bat';$s.WorkingDirectory='%~dp0';$s.IconLocation='%~dp0icon.ico';$s.WindowStyle=7;$s.Save()"
echo Done! A cat icon shortcut "Bebe Benji Lamine" is now on your Desktop.
pause