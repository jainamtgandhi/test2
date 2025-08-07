@echo off
title Permanent Server Runner
echo Starting permanent server...
echo.
echo This will keep your server running permanently.
echo The server will restart automatically if it crashes.
echo.
echo Your website will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the permanent server
echo.

:loop
echo Starting server...
node start-server.js
echo.
echo Server stopped. Restarting in 3 seconds...
timeout /t 3 /nobreak >nul
goto loop
