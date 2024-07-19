import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  IonIcon,
  IonImg,
  IonLabel,
} from "@ionic/react";
import { logoInstagram, basketballOutline } from "ionicons/icons";

import ContentCol from "../components/ContentCol";
import Daily from "./Daily";

import Header from "../components/Header";
import Footer from "../components/Footer";

import CardCarousel from "../components/HomeCards";

import "./Home.css";
import {
  flashOutline,
  globeOutline,
  personOutline,
  sparkles,
} from "ionicons/icons";
import { useState } from "react";

const Home: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<
    "component1" | "component2"
  >("component1");

  const showComponent1 = () => {
    if (currentComponent !== "component1") {
      setCurrentComponent("component1");
    }
  };

  const showComponent2 = () => {
    if (currentComponent !== "component2") {
      setCurrentComponent("component2");
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {/* First column spanning all rows */}
            <IonCol
              size="1"
              className="ion-align-self-stretch border-right-gray ion-justify-content-center ion-align-items-center"
            >
              <div className="full-height magical-column">
                {" "}
                <img
                  src="/7days-logo.png"
                  className="right-aligned"
                  height="50"
                  width="50"
                  style={{ scale: "160%" }}
                />
              </div>
              <IonButtons className="button-container">
                <IonButton onClick={showComponent1}>
                  <IonIcon icon={personOutline} />
                </IonButton>
                <IonButton onClick={showComponent2}>
                  <IonIcon icon={flashOutline} />
                </IonButton>
              </IonButtons>
            </IonCol>

            {/* Middle column with 3 rows */}
            <IonCol size="10" className="ion-no-padding ion-align-self-stretch">
              <IonRow>
                <IonCol>
                  <div className="">
                    <Header />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className=" border-top-gray border-bottom-gray ion-no-padding">
                  <div className="" style={{ height: "100%" }}>
                    {currentComponent === "component1" ? (
                      <ContentCol />
                    ) : (
                      <Daily />
                    )}
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="">
                    <Footer />
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>

            {/* Third column spanning all rows */}
            <IonCol
              size="1"
              className="ion-align-self-stretch border-left-gray"
            >
              <div className="full-height magical-column right-row-pt">
                {" "}
                <IonButtons className="button-container">
                  <IonButton>
                    <IonIcon icon={logoInstagram} />
                  </IonButton>
                  <IonButton>
                    <IonIcon icon={basketballOutline} />
                  </IonButton>
                </IonButtons>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
