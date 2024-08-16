import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  useIonAlert,
  IonImg,
  IonIcon,
} from "@ionic/react";
import {
  flashOutline,
  globeOutline,
  personOutline,
  sparkles,
} from "ionicons/icons";
import SignUpSignIn from "./SignUpSignIn";
import CurrentTime from "./Time";
import showComponent1 from "../pages/Home";
import showComponent2 from "../pages/Home";

import React, { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
const storage = new Storage();
await storage.create();
import Backdrop from "../components/Backdrop";
import { useUser } from "@clerk/clerk-react";

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
  const { isSignedIn, user, isLoaded } = useUser();

  let userId: string;
  if (isLoaded && isSignedIn) {
    userId = user.id;
  }
  const handleShowAlert = () => {
    if (!userId) {
      presentAlert({
        header: "Error",
        message: "You must be logged in to do that.",
        buttons: ["OK"],
      });
      return;
    } else {
      setShowAlert(true);
      startTimer();
    }
  };

  const handleDismiss = () => {
    setShowAlert(false);
  };
  const startTimer = async () => {
    presentAlert({
      header: "Disclaimer",
      message:
        "By pressing 'Start', you agree to commit to receiving hourly notifications as part of this 7-day challenge. Participation in these prompts is highly recommended to ensure you get the most out of this transformative experience. Your active engagement is key to unlocking your full potential and achieving your filmmaking goals. Once you start you can't stop the program untill after the end of the 7 days.",
      buttons: [
        {
          text: "Start Later",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "Start NOW",
          role: "confirm",
          handler: async () => {
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

        <div id="mobileNav">
          <IonButtons className="mobile-button-container">
            <IonButton href="/home" routerLink="/home">
              <IonIcon icon={personOutline} />
            </IonButton>
            <IonButton href="/daily" routerLink="/daily">
              <IonIcon icon={flashOutline} />
            </IonButton>
          </IonButtons>
        </div>
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
