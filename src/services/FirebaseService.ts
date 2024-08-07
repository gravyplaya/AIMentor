import { Capacitor } from "@capacitor/core";
import { PushNotifications } from "@capacitor/push-notifications";
// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWyb8vE2p7jHm7s502slDEOsqscaauL7s",
  authDomain: "aimentor-59b08.firebaseapp.com",
  projectId: "aimentor-59b08",
  storageBucket: "aimentor-59b08.appspot.com",
  messagingSenderId: "79783555551",
  appId: "1:79783555551:web:82d18ade760b7c79c3d46a",
  measurementId: "G-RP7HKSPVJX",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

export { messaging, getToken, onMessage, analytics };

export class FirebaseService {
  async initializePushNotifications() {
    if (Capacitor.getPlatform() === "web") {
      this.initializeWebPush();
    } else {
      await PushNotifications.requestPermissions();
      await PushNotifications.register();
    }
  }

  private async initializeWebPush() {
    const permission = await Notification.requestPermission();
    console.log("perms", permission);
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BGBVomoxGTR0Tu1aN5Z9yo4x6JdNRi4EyKLnpWoUvkcS_ySJ2VOIC8wOpkl9Js0XzlomvgKVlA4htAOrQn8yDL0",
      });
      console.log("FCM Token:", token);
    }
  }

  listenForMessages() {
    onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      // Handle the received message
    });
  }
}

export const firebaseService = new FirebaseService();
