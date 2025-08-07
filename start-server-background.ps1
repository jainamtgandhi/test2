# PowerShell script to run server in background
Write-Host "Starting server in background..." -ForegroundColor Green
Write-Host "Server will be available at: http://localhost:8000" -ForegroundColor Yellow
Write-Host "To stop the server, run: Get-Job | Stop-Job" -ForegroundColor Cyan
Write-Host ""

# Start the server as a background job
$job = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    node start-server.js
}

Write-Host "Server started with Job ID: $($job.Id)" -ForegroundColor Green
Write-Host "To check status: Get-Job" -ForegroundColor Cyan
Write-Host "To see output: Receive-Job $($job.Id)" -ForegroundColor Cyan
Write-Host "To stop server: Stop-Job $($job.Id)" -ForegroundColor Red
