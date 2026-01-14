# Script para limpiar y reiniciar el proyecto Expo/React Native
# Uso: .\clean-restart.ps1

Write-Host "========================================="
Write-Host "Limpiando proyecto Expo/React Native..."
Write-Host "========================================="
Write-Host ""

# Limpiar caché de Metro Bundler
Write-Host "1. Limpiando caché de Metro Bundler..."
npx expo start --clear 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Caché de Metro limpiada"
} else {
    Write-Host "   ⚠ No se pudo limpiar Metro (puede estar corriendo)"
}

# Limpiar watchman (si está instalado)
Write-Host "2. Limpiando watchman..."
if (Get-Command watchman -ErrorAction SilentlyContinue) {
    watchman watch-del-all 2>&1 | Out-Null
    Write-Host "   ✓ Watchman limpiado"
} else {
    Write-Host "   ⚠ Watchman no está instalado (opcional)"
}

# Limpiar caché de npm/pnpm
Write-Host "3. Limpiando caché de pnpm..."
pnpm store prune 2>&1 | Out-Null
Write-Host "   ✓ Caché de pnpm limpiada"

# Limpiar node_modules/.cache si existe
Write-Host "4. Limpiando caché de node_modules..."
if (Test-Path "node_modules\.cache") {
    Remove-Item "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Caché de node_modules limpiada"
}

# Limpiar .expo si existe
Write-Host "5. Limpiando directorio .expo..."
if (Test-Path ".expo") {
    Remove-Item ".expo" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Directorio .expo limpiado"
}

# Limpiar android build cache
Write-Host "6. Limpiando caché de Android..."
if (Test-Path "android\.gradle") {
    Remove-Item "android\.gradle" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Caché de Gradle limpiada"
}
if (Test-Path "android\app\build") {
    Remove-Item "android\app\build" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Build de Android limpiado"
}

# Limpiar iOS build cache
Write-Host "7. Limpiando caché de iOS..."
if (Test-Path "ios\Pods") {
    Remove-Item "ios\Pods" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Pods de iOS limpiados"
}
if (Test-Path "ios\build") {
    Remove-Item "ios\build" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✓ Build de iOS limpiado"
}

Write-Host ""
Write-Host "========================================="
Write-Host "✓ Limpieza completada"
Write-Host "========================================="
Write-Host ""
Write-Host "Ahora puedes ejecutar:"
Write-Host "  pnpm start"
Write-Host "  o"
Write-Host "  npx expo start --clear"
Write-Host ""
