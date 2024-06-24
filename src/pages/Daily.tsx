import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Daily.css';
import Header from '../components/Header';

const Daily: React.FC = () => {
  return (
    <IonPage>
<Header name="Daily"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Daily</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Daily" />
      </IonContent>
    </IonPage>
  );
};

export default Daily;
