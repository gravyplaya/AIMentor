import { useEffect } from "react";
import "./ExploreContainer.css";
import { LocalNotifications } from "@capacitor/local-notifications";
import { IonPage, IonContent, IonButton } from "@ionic/react";

LocalNotifications.requestPermissions().then((result) => {
  if (result.display === "granted") {
    console.log("Permission granted, scheduling notification.");

    const notifs = LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Body",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: undefined,
          attachments: undefined,
          actionTypeId: "",
          extra: undefined,
        },
      ],
    });
    console.log("scheduled notifications", notifs);
  } else {
    console.log("Permission denied");
  }
});

LocalNotifications.addListener("localNotificationReceived", (notification) => {
  console.log("Received notification:", notification);
});

LocalNotifications.addListener(
  "localNotificationActionPerformed",
  (notificationAction) => {
    console.log("Notification action performed:", notificationAction);
  }
);

interface ContainerProps {
  name?: string;
}

const LocalNotification: React.FC<ContainerProps> = ({ name }) => {
  useEffect(() => {
    requestPermission();

    LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (notification) => {
        console.log("Notification tapped:", notification);
      }
    );

    return () => {
      LocalNotifications.removeAllListeners();
    };
  }, []);

  const requestPermission = async () => {
    const permStatus = await LocalNotifications.requestPermissions();
    if (permStatus.display !== "granted") {
      console.log("Permission not granted");
    }
  };

  const scheduleTestNotification = async () => {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Test Notification",
          body: "This is a test local notification",
          id: 1,
          schedule: { at: new Date(Date.now() + 5000) },
        },
      ],
    });
  };

  const scheduleNotifications = async () => {
    const tomorrow9AM = new Date();
    tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
    tomorrow9AM.setHours(9, 0, 0, 0);

    const dayAfterTomorrow2PM = new Date();
    dayAfterTomorrow2PM.setDate(dayAfterTomorrow2PM.getDate() + 2);
    dayAfterTomorrow2PM.setHours(14, 0, 0, 0);

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Morning Notification",
          body: "Good morning! Time to start your day.",
          id: 1,
          schedule: { at: tomorrow9AM },
        },
        {
          title: "Afternoon Notification",
          body: "Don't forget to take a break!",
          id: 2,
          schedule: { at: dayAfterTomorrow2PM },
        },
        {
          title: "Evening Notification",
          body: "Time to wind down for the day.",
          id: 3,
          schedule: { at: new Date(Date.now() + 30000) }, // 30 seconds from now
        },
      ],
    });
  };

  return (
    <IonButton onClick={scheduleTestNotification}>
      Test Local Notification
    </IonButton>
  );
};

export default LocalNotification;
