# Script para ejecutar Android con cache de Gradle en ubicación alternativa
# Esto evita problemas de bloqueo de archivos en Windows

# Configurar variable de entorno para Gradle
$env:GRADLE_USER_HOME = "C:\gradle-cache"
$env:GRADLE_OPTS = "-Dgradle.user.home=C:\gradle-cache"

Write-Host "========================================="
Write-Host "Configuración de Gradle:"
Write-Host "GRADLE_USER_HOME: $env:GRADLE_USER_HOME"
Write-Host "GRADLE_OPTS: $env:GRADLE_OPTS"
Write-Host "========================================="
Write-Host ""

# Detener cualquier daemon de Gradle existente
Write-Host "Deteniendo daemons de Gradle..."
cd android
.\gradlew.bat --stop 2>&1 | Out-Null
cd ..
Start-Sleep -Seconds 2

# Eliminar directorio .gradle local si existe
if (Test-Path "android\.gradle") {
    Write-Host "Eliminando directorio .gradle local..."
    Remove-Item "android\.gradle" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Ejecutando: pnpm run run:android"
Write-Host ""
pnpm run run:android
