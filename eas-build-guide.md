# Guía para compilar con EAS Build

## Pasos para compilar tu development build

### 1. Iniciar sesión en EAS
Ejecuta en tu terminal:
```bash
eas login
```
Esto abrirá tu navegador para autenticarte. Si no tienes cuenta, créala en https://expo.dev

### 2. Configurar el proyecto (si es necesario)
Si es la primera vez que usas EAS con este proyecto:
```bash
eas build:configure
```
Esto configurará el `projectId` en tu `app.config.ts` si no está configurado.

### 3. Compilar el development build
Una vez autenticado, ejecuta:
```bash
eas build --profile development --platform android
```

### 4. Instalar el APK
Una vez que la compilación termine (15-20 minutos):
- EAS te dará un enlace para descargar el APK
- Descarga el APK
- Instálalo en tu emulador o dispositivo Android:
  ```bash
  adb install path/to/your-app.apk
  ```
  O arrastra el APK al emulador

### 5. Ejecutar la app
Una vez instalado el development build:
```bash
pnpm start
```
Luego presiona `a` en la terminal para abrir en Android, o escanea el código QR.

## Notas importantes

- La primera compilación puede tardar 15-20 minutos
- Necesitas una cuenta gratuita de Expo (https://expo.dev)
- El APK generado es un development build que se conecta a tu servidor Metro local
- Una vez instalado, puedes desarrollar normalmente con `pnpm start`

## Alternativa: Compilación local con EAS

Si prefieres compilar localmente (pero aún usando EAS):
```bash
eas build --profile development --platform android --local
```
Esto descargará las dependencias y compilará localmente, pero puede tener los mismos problemas de Gradle.
