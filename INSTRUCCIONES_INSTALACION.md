# Instrucciones para Levantar la Aplicación Móvil

## Paso 1: Descargar el APK

1. Ve al enlace del build que EAS te proporcionó (debería estar en la terminal o en https://expo.dev/accounts/calvarez01/projects/chatwoot-mobile/builds)
2. Descarga el archivo APK del build exitoso

## Paso 2: Instalar el APK

### Opción A: Si usas Emulador Android
1. Abre tu emulador (Medium_Phone_API_36.1)
2. Arrastra el archivo APK al emulador
3. Espera a que se instale

### Opción B: Si usas un dispositivo físico
1. Transfiere el APK a tu dispositivo (por USB, email, etc.)
2. En tu dispositivo, ve a Configuración → Seguridad
3. Habilita "Fuentes desconocidas" o "Instalar apps desconocidas"
4. Abre el APK y sigue las instrucciones para instalarlo

### Opción C: Usando ADB (si tienes ADB configurado)
```bash
adb install path/to/tu-app.apk
```

## Paso 3: Iniciar el Servidor de Desarrollo

En tu terminal, ejecuta:

```bash
pnpm start
```

Esto iniciará el servidor Metro que sirve el código JavaScript a tu app.

## Paso 4: Conectar la App al Servidor

Una vez que el servidor esté corriendo:

1. Abre la app que acabas de instalar en tu emulador/dispositivo
2. En la terminal donde corre `pnpm start`, presiona la tecla `a` para abrir en Android
3. O escanea el código QR si estás usando un dispositivo físico (la app Expo Development Client tiene un escáner QR)

## Paso 5: Desarrollo

¡Listo! Ahora puedes:
- Ver cambios en tiempo real (Hot Reload)
- Ver logs en la terminal
- Depurar la aplicación
- La app se conectará automáticamente a tu servidor Metro local

## Solución de Problemas

### La app no se conecta al servidor
- Asegúrate de que el servidor Metro esté corriendo
- Verifica que tu dispositivo/emulador esté en la misma red
- Si usas emulador, normalmente se conecta automáticamente
- Si usas dispositivo físico, ambos deben estar en la misma WiFi

### La app muestra "Unable to connect to Metro"
- Verifica que `pnpm start` esté corriendo
- Reinicia el servidor Metro
- Reinicia la app en el dispositivo

### Quieres cambiar algo en el código
- Simplemente edita los archivos
- Guarda los cambios
- La app se recargará automáticamente (Fast Refresh)
