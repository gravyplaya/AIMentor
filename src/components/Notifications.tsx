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

const checkPermissions = () => {
  console.log("Notification permission status:", Notification.permission);
};

export const showNotification = (
  title: string,
  options?: NotificationOptions
) => {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  }
};

export const scheduleNotification45 = async (
  title: string,
  body: string,
  delay: number = 1000
) => {
  // if (await requestNotificationPermission()) {
  //   setTimeout(() => {
  //     showNotification(title, { body });
  //   }, delay);
  // }
};

export const scheduleHourlyNotifications = async (
  title: string,
  body: string,
  time?: number
) => {
  if (await requestNotificationPermission()) {
    // Calculate time until the next hour
    const now = new Date();
    const oneMin = 60 * 1000; // 1 minute in milliseconds

    const nextMin = new Date();
    nextMin.setMinutes(nextMin.getMinutes() + 1);

    const nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1);

    const tomorrow9AM = new Date();
    tomorrow9AM.setDate(tomorrow9AM.getDate() + 1);
    tomorrow9AM.setHours(9, 0, 0, 0);

    const dayAfterTomorrow2PM = new Date();
    dayAfterTomorrow2PM.setDate(dayAfterTomorrow2PM.getDate() + 2);
    dayAfterTomorrow2PM.setHours(14, 0, 0, 0);

    const timeUntilNextHour = nextHour.getTime() - now.getTime();
    const timeUntilNextMin = nextMin.getTime() - now.getTime();
    // Schedule the first notification
    // setTimeout(() => {
    //   showNotification(title, { body });

    //   // Set up interval for subsequent hourly notifications
    //   // setInterval(() => {
    //   //   showNotification(title, { body });
    //   // }, 60 * 60 * 1000); // 1 hour in milliseconds
    // }, timeUntilNextMin);
  }
};
let scheduledNotifications: NodeJS.Timeout[] = [];

function scheduleNotification(title: any, options: any, delay: any) {
  const timerId = setTimeout(() => {
    new Notification(title, options);
  }, delay);

  scheduledNotifications.push(timerId);
}

function clearAllScheduledNotifications() {
  for (let i = 1; i < 99999; i++) {
    clearTimeout(i);
    clearInterval(i);
  }
}

const Notifications: React.FC = () => {
  const handleScheduleNotification = async () => {
    showNotification("Tester title", { body: "This is just a test" });
    // await scheduleNotification(
    //   "Test Notification",
    //   "This is a 5 sec delayed notification",
    //   5000
    // ); // 5 seconds delay
  };

  useEffect(() => {
    // Start hourly notifications when component mounts
    // scheduleHourlyNotifications(
    //   "Hourly Reminder",
    //   "This is your hourly scheduled notification."
    // );
  }, []);

  return (
    <IonButton onClick={clearAllScheduledNotifications}>
      Schedule Notification
    </IonButton>
  );
};

export default Notifications;
