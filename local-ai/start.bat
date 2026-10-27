@echo off
cd /d "%~dp0"
set "BUNDLED_PYTHON=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
where py >nul 2>nul
if not errorlevel 1 (
  py -3 server.py
) else (
  where python >nul 2>nul
  if not errorlevel 1 (
    python server.py
  ) else (
    if exist "%BUNDLED_PYTHON%" (
      "%BUNDLED_PYTHON%" server.py
    ) else (
      echo Python 3 was not found. Install Python 3 and try again.
      pause
    )
  )
)
