import {  IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import SignUpSignIn from './SignUpSignIn';
import React from 'react';

interface ContainerProps {
    name: string;
  }

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
    <IonToolbar>
      <IonTitle>{name}</IonTitle>
    <IonButtons slot="end">
      <IonButton><SignUpSignIn /></IonButton>
    </IonButtons>
    </IonToolbar>

  </IonHeader>
  );
};

export default ExploreContainer;
