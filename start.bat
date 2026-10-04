@echo off
title Bebe, Benji ^& Lamine
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js belum terpasang. Halaman download akan dibuka...
  echo Install versi LTS, lalu klik start.bat ini lagi.
  start https://nodejs.org
  pause
  exit /b
)

if not exist node_modules (
  echo Pertama kali: memasang paket, tunggu sebentar...
  call npm install
  if errorlevel 1 (
    echo npm install gagal. Cek koneksi internet lalu coba lagi.
    pause
    exit /b
  )
)

echo Membangunkan Bebe, Benji ^& Lamine...
start "" /min cmd /c "npm start"
exitn