import React, { useState, useEffect } from "react";
import { IonText } from "@ionic/react";

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
