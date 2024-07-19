import React, { useState, useEffect } from "react";
import { IonText } from "@ionic/react";
import { Storage } from "@ionic/storage";
const storage = new Storage();
await storage.create();

const firstRun = await storage.get("firstRun");
if (firstRun === null) {
  await storage.set("firstRun", new Date().getTime());
}

function getTimeDifference(
  timestamp1: number,
  timestamp2: number
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

function showQuestion(day: number, hour: number) {
  const magicDiv = document.getElementById("d" + day + "q" + hour);
  magicDiv?.classList.add("clear");
}

if (diff.days <= 7) {
  if (currentHour >= 8) {
    showQuestion(diff.days, 1);
  }
  if (currentHour >= 9) {
    showQuestion(diff.days, 2);
  }
  if (currentHour >= 10) {
    showQuestion(diff.days, 3);
  }
  if (currentHour >= 11) {
    showQuestion(diff.days, 4);
  }
  if (currentHour >= 12) {
    showQuestion(diff.days, 5);
  }
  if (currentHour >= 13) {
    showQuestion(diff.days, 6);
  }
  if (currentHour >= 14) {
    showQuestion(diff.days, 7);
  }
  if (currentHour >= 15) {
    showQuestion(diff.days, 8);
  }
  if (currentHour >= 16) {
    showQuestion(diff.days, 9);
  }
  if (currentHour >= 17) {
    showQuestion(diff.days, 10);
  }
  if (currentHour >= 18) {
    showQuestion(diff.days, 11);
  }
  if (currentHour >= 19) {
    showQuestion(diff.days, 12);
  }
  if (currentHour >= 20) {
    showQuestion(diff.days, 13);
  }
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
    <IonText>
      <p>{currentTime}</p>
    </IonText>
  );
};

export default CurrentTime;
