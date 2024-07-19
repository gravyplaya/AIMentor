import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonFooter,
  IonText,
} from "@ionic/react";
import SignUpSignIn from "./SignUpSignIn";
import CurrentTime from "./Time";

import React from "react";

interface ContainerProps {
  name?: string;
}

const Footer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonText slot="start">@2024, All Rights Reserved</IonText>
        <IonText slot="end">Powered by Provision Academy</IonText>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
