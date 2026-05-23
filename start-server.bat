@echo off
cd /d "%~dp0"

where node >nul 2>&1
if %errorlevel%==0 (
  node server.js
) else if exist "%LOCALAPPDATA%\Programs\cursor\resources\app\resources\helpers\node.exe" (
  "%LOCALAPPDATA%\Programs\cursor\resources\app\resources\helpers\node.exe" server.js
) else (
  echo Node.js is required. Install from https://nodejs.org/ or open via Cursor.
  pause
  exit /b 1
)
