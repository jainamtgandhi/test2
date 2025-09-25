@echo off
echo Building Next.js app...
cd portfolio-nextjs
call npm run build
cd ..

echo Copying built files to root...
xcopy "portfolio-nextjs\out\*" "." /E /H /Y

echo Committing and pushing changes...
git add .
git commit -m "Deploy latest changes"
git push

echo Deployment complete!
pause
