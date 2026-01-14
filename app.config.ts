import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    name: 'Talk Letel',
    slug: process.env.EXPO_PUBLIC_APP_SLUG || 'letel-talk-mobile',
    version: '4.3.12',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: false,
    scheme: 'talkletelapp',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
      enableFullScreenImage_legacy: true,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.chatwoot.app',
      infoPlist: {
        NSCameraUsageDescription:
          'This app requires access to the camera to upload images and videos.',
        NSPhotoLibraryUsageDescription:
          'This app requires access to the photo library to upload images.',
        NSMicrophoneUsageDescription: 'This app requires access to the microphone to record audio.',
        NSAppleMusicUsageDescription:
          'This app does not use Apple Music, but a system API may require this permission.',
        UIBackgroundModes: ['fetch', 'remote-notification'],
        ITSAppUsesNonExemptEncryption: false,
      },
      // Please use the relative path to the google-services.json file
      googleServicesFile: process.env.EXPO_PUBLIC_IOS_GOOGLE_SERVICES_FILE || undefined,
      entitlements: { 'aps-environment': 'production' },
      associatedDomains: ['applinks:talk.letel.cl'],
    },
    android: {
      adaptiveIcon: { foregroundImage: './assets/adaptive-icon.png', backgroundColor: '#ffffff' },
      package: 'com.chatwoot.app',
      permissions: ['android.permission.CAMERA', 'android.permission.RECORD_AUDIO'],
      // Please use the relative path to the google-services.json file
      googleServicesFile: process.env.EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE || (process.env.EAS_BUILD_PROFILE === 'development' ? undefined : './android/app/google-services.json'),
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: 'talk.letel.cl',
              pathPrefix: '/app/accounts/',
              pathPattern: '/*/conversations/*',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
        {
          action: 'VIEW',
          data: [
            {
              scheme: 'talkletelapp',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    extra: {
      eas: {
        projectId: process.env.EXPO_PUBLIC_PROJECT_ID || 'dfb18482-1715-4085-bdca-8bfda855f061',
        storybookEnabled: process.env.EXPO_STORYBOOK_ENABLED,
      },
    },
    // owner: 'chatwoot', // Comentado para permitir crear un nuevo proyecto EAS con tu cuenta
    plugins: [
      'expo-font',
      ['react-native-permissions', { iosPermissions: ['Camera', 'PhotoLibrary', 'MediaLibrary'] }],
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          project: process.env.EXPO_PUBLIC_SENTRY_PROJECT_NAME,
          organization: process.env.EXPO_PUBLIC_SENTRY_ORG_NAME,
        },
      ],
      // Firebase plugins - comentados temporalmente para development builds
      // Descomentar cuando tengas un google-services.json válido
      // '@react-native-firebase/app',
      // '@react-native-firebase/messaging',
      [
        'expo-build-properties',
        {
          // https://github.com/invertase/notifee/issues/808#issuecomment-2175934609
          android: {
            minSdkVersion: 24,
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            enableProguardInReleaseBuilds: true,
          },
          ios: { useFrameworks: 'static' },
        },
      ],
      './with-ffmpeg-pod.js',
    ],
    androidNavigationBar: { backgroundColor: '#ffffff' },
  };
};
