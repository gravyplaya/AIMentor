import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import CardCarousel from '../components/HomeCards';

import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
<Header name="Home"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <CardCarousel />


      </IonContent>
    </IonPage>
  );
};

export default Home;
