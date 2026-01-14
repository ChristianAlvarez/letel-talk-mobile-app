# Configuración de Android Studio para este proyecto

## Problema conocido
Este proyecto tiene un problema conocido con Gradle en Windows relacionado con el bloqueo de archivos. Android Studio no puede sincronizar correctamente debido a este error.

## Soluciones

### Opción 1: Configurar GRADLE_USER_HOME en Android Studio

1. Abre Android Studio
2. Ve a `File` → `Settings` (o `Ctrl+Alt+S`)
3. Navega a `Build, Execution, Deployment` → `Build Tools` → `Gradle`
4. En "Gradle user home", cambia a: `C:\gradle-cache`
5. Aplica los cambios
6. Cierra y vuelve a abrir Android Studio
7. Abre el proyecto nuevamente

### Opción 2: Usar Expo Go (Desarrollo rápido)

Para desarrollo y pruebas rápidas, puedes usar Expo Go sin compilar:

```bash
pnpm start
```

Luego escanea el código QR con la app Expo Go en tu dispositivo Android.

### Opción 3: Compilar APK directamente

Si necesitas un APK, puedes intentar compilarlo directamente con Gradle usando el script:

```powershell
.\run-android.ps1
```

### Opción 4: Usar WSL2 (si está disponible)

Si tienes WSL2 instalado, puedes ejecutar la compilación desde Linux donde este problema no ocurre.

## Nota importante

El error "Could not move temporary workspace" es un problema conocido de Gradle en Windows con NTFS. Las soluciones anteriores son workarounds. La solución más confiable es usar WSL2 o desarrollar en Linux/Mac.
