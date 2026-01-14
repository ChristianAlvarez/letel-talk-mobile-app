// Wrapper para Firebase Messaging que maneja cuando Firebase no está disponible
let messagingModule: any = null;

try {
  messagingModule = require('@react-native-firebase/messaging').default;
} catch (error) {
  console.warn('Firebase messaging not available:', error);
}

const isFirebaseAvailable = () => {
  try {
    if (!messagingModule) return false;
    const instance = messagingModule();
    return instance != null;
  } catch {
    return false;
  }
};

export const getMessaging = () => {
  if (!isFirebaseAvailable()) {
    return {
      setBackgroundMessageHandler: () => {},
      getInitialNotification: async () => null,
      onNotificationOpenedApp: () => () => {},
      hasPermission: async () => 0,
      requestPermission: async () => 0,
      getToken: async () => '',
    };
  }
  return messagingModule();
};
