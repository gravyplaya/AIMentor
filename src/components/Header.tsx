import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  useIonAlert,
} from "@ionic/react";
import SignUpSignIn from "./SignUpSignIn";
import CurrentTime from "./Time";
import React, { useState } from "react";
import { Storage } from "@ionic/storage";
const storage = new Storage();
await storage.create();
import Backdrop from "../components/Backdrop";

const firstRun = await storage.get("firstRun");
const hasStarted = firstRun !== null;

interface ContainerProps {
  name?: string;
}

const Header: React.FC<ContainerProps> = () => {
  const [presentAlert] = useIonAlert();
  const [showAlert, setShowAlert] = useState(false);
  const date = new Date(firstRun);
  const humanReadableDate = date.toLocaleString();

  const handleShowAlert = () => {
    setShowAlert(true);
    startTimer();
  };

  const handleDismiss = () => {
    setShowAlert(false);
  };
  const startTimer = async () => {
    presentAlert({
      header: "Status",
      message: "This will start your 7 day timer.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "OK",
          role: "confirm",
          handler: async () => {
            console.log(firstRun);
            if (firstRun === null) {
              await storage.set("firstRun", new Date().getTime());
            }
          },
        },
      ],
    });
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButton
          slot="start"
          color="light"
          onClick={handleShowAlert}
          disabled={hasStarted}
        >
          {firstRun === null ? "START" : humanReadableDate}
        </IonButton>
        <IonButtons slot="end" className="ion-margin-start">
          <CurrentTime />
          <SignUpSignIn />
        </IonButtons>
      </IonToolbar>
      <Backdrop visible={showAlert} />
    </IonHeader>
  );
};

export default Header;
