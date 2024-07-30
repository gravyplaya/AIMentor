import React, { useEffect } from "react";
import { IonButton } from "@ionic/react";

const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === "granted";
};

export const showNotification = (
  title: string,
  options?: NotificationOptions
) => {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  }
};

export const scheduleNotification = async (
  title: string,
  body: string,
  delay: number
) => {
  if (await requestNotificationPermission()) {
    setTimeout(() => {
      showNotification(title, { body });
    }, delay);
  }
};

export const scheduleHourlyNotifications = async (
  title: string,
  body: string
) => {
  if (await requestNotificationPermission()) {
    // Calculate time until the next hour
    const now = new Date();
    const nextHour = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours() + 1,
      0,
      0
    );
    const timeUntilNextHour = nextHour.getTime() - now.getTime();

    // Schedule the first notification
    setTimeout(() => {
      showNotification(title, { body });

      // Set up interval for subsequent hourly notifications
      setInterval(() => {
        showNotification(title, { body });
      }, 60 * 60 * 1000); // 1 hour in milliseconds
    }, timeUntilNextHour);
  }
};

const Notifications: React.FC = () => {
  const handleScheduleNotification = async () => {
    await scheduleNotification(
      "Test Notification",
      "This is a test notification",
      5000
    ); // 5 seconds delay
  };

  useEffect(() => {
    // Start hourly notifications when component mounts
    // scheduleHourlyNotifications('Hourly Reminder', 'This is your hourly notification!');
  }, []);

  return (
    <IonButton onClick={handleScheduleNotification}>
      Schedule Notification
    </IonButton>
  );
};

export default Notifications;
