import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
} from "@ionic/react";
import SignUpSignIn from "./SignUpSignIn";
import CurrentTime from "./Time";

import React from "react";

interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          <CurrentTime />
          {"  "}
          <SignUpSignIn />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
