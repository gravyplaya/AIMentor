import React, { useState, useEffect } from "react";
import { IonText } from "@ionic/react";
import { Storage } from "@ionic/storage";
const storage = new Storage();
storage.create();
let firstRun;
// Change the top-level await to be inside an async function
const initializeStorage = async () => {
  firstRun = await storage.get("firstRun");
  if (firstRun === null) {
    await storage.set("firstRun", new Date().getTime());
  }
};

initializeStorage();

function getTimeDifference(
  timestamp1: any,
  timestamp2: any
): {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
} {
  const difference = Math.abs(timestamp2 - timestamp1);

  return {
    milliseconds: difference,
    seconds: Math.floor(difference / 1000),
    minutes: Math.floor(difference / (1000 * 60)),
    hours: Math.floor(difference / (1000 * 60 * 60)),
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  };
}

const diff = getTimeDifference(firstRun, new Date().getTime());
const currentHour = new Date().getHours();
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const questions = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12noon",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

if (diff.days <= 7) {
  hours.forEach((hour, index) => {
    if (currentHour >= hour) {
      console.log(`show ${questions[index]} question for day ${diff.days}`);
    }
  });
}

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial call to set the time immediately

    const timer = setInterval(updateTime, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <IonText className="ion-margin-end">
      <p>{currentTime}</p>
    </IonText>
  );
};

export default CurrentTime;
