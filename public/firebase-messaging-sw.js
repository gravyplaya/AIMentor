importScripts("https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAWyb8vE2p7jHm7s502slDEOsqscaauL7s",
  authDomain: "aimentor-59b08.firebaseapp.com",
  projectId: "aimentor-59b08",
  storageBucket: "aimentor-59b08.appspot.com",
  messagingSenderId: "79783555551",
  appId: "1:79783555551:web:82d18ade760b7c79c3d46a",
  measurementId: "G-RP7HKSPVJX",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
