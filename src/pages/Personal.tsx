import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Personal.css';
import Header from '../components/Header';

const Personal: React.FC = () => {
  return (
    <IonPage>
<Header name="Personal"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Personal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Personal" />
      </IonContent>
    </IonPage>
  );
};

export default Personal;
