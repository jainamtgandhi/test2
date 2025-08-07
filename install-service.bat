@echo off
echo Installing server as Windows service...
echo.

REM Check if NSSM is available
where nssm >nul 2>&1
if %errorlevel% neq 0 (
    echo NSSM not found. Installing NSSM...
    powershell -Command "Invoke-WebRequest -Uri 'https://nssm.cc/release/nssm-2.24.zip' -OutFile 'nssm.zip'"
    powershell -Command "Expand-Archive -Path 'nssm.zip' -DestinationPath '.' -Force"
    move nssm-2.24\win64\nssm.exe .
    rmdir /s nssm-2.24
    del nssm.zip
)

REM Install the service
nssm install "WebServer" "node.exe" "start-server.js"
nssm set "WebServer" AppDirectory "%~dp0"
nssm set "WebServer" Description "Local Web Server for test2 project"
nssm set "WebServer" Start SERVICE_AUTO_START

echo.
echo Service installed successfully!
echo To start the service: net start WebServer
echo To stop the service: net stop WebServer
echo To remove the service: nssm remove WebServer confirm
echo.
pause
