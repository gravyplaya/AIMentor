import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Messages.css';
import Header from '../components/Header';

const Messages: React.FC = () => {
  return (
    <IonPage>
<Header name="Messages"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Messages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Messages" />
      </IonContent>
    </IonPage>
  );
};

export default Messages;
