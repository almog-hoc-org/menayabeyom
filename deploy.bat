@echo off
REM Double-click on Windows to publish the site to Vercel.
cd /d "%~dp0"
echo Deploying Menaya BeYom to Vercel...
echo (first run opens a browser once to log in, then publishes)
npx --yes vercel@latest deploy --prod
pause
