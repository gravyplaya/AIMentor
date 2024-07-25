import React from "react";
import { IonBackdrop } from "@ionic/react";

interface BackdropProps {
  visible: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ visible }) => {
  return visible ? (
    <IonBackdrop visible={true} tappable={false} stopPropagation={true} />
  ) : null;
};

export default Backdrop;
