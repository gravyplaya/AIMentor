import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Vision.css';
import Header from '../components/Header';

const Vision: React.FC = () => {
  return (
    <IonPage>
<Header name="Vision"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vision</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Vision" />
      </IonContent>
    </IonPage>
  );
};

export default Vision;
