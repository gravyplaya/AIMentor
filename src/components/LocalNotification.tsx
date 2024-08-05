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
          title: "Permission granted",
          body: "Thanks. Here's a Scheduled notification",
          id: 1,
          schedule: { at: new Date(Date.now()) },
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
          schedule: { at: new Date(Date.now() + 1000) },
        },
      ],
    });
  };

  const scheduleNotifications = async () => {
    const oneMin = new Date();
    oneMin.setMinutes(oneMin.getMinutes() + 1);

    const nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1);

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
          schedule: { at: oneMin },
        },
        {
          title: "Afternoon Notification",
          body: "Don't forget to take a break!",
          id: 2,
          schedule: { at: nextHour },
        },
        {
          title: "Evening Notification",
          body: "Time to wind down for the day. after 30 secs.",
          id: 3,
          schedule: { at: new Date(Date.now() + 30000) }, // 30 seconds from now
        },
      ],
    });
  };
  async function testNotifications() {
    try {
      const permStatus = await LocalNotifications.checkPermissions();
      console.log("Permission status:", permStatus);

      if (permStatus.display !== "granted") {
        const reqResult = await LocalNotifications.requestPermissions();
        console.log("Permission request result:", reqResult);
      }

      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Debug Notification",
            body: "If you see this, notifications are working!",
            id: 1,
          },
        ],
      });

      console.log("Notification scheduled");
    } catch (error) {
      console.error("Error in testNotifications:", error);
    }
  }

  // testNotifications();
  return (
    <IonButton onClick={scheduleTestNotification}>
      Test Local Notification
    </IonButton>
  );
};

export default LocalNotification;
