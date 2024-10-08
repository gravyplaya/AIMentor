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
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="custom-grid">
          <IonRow>
            {/* First column spanning all rows */}
            <IonCol
              size="1"
              className="ion-align-self-stretch border-right-gray ion-justify-content-center ion-align-items-center col1"
            >
              <div className="full-height magical-column">
                {" "}
                <IonImg
                  src="/images/7days-logo.png"
                  className="right-aligned"
                />
              </div>
              <IonButtons className="button-container">
                <IonButton href="/home" routerLink="/home">
                  <IonIcon icon={personOutline} />
                </IonButton>
                <IonButton href="/daily" routerLink="/daily">
                  <IonIcon icon={flashOutline} />
                </IonButton>
              </IonButtons>
            </IonCol>

            {/* Middle column with 3 rows */}
            <IonCol
              size="10"
              className="ion-no-padding ion-align-self-stretch "
            >
              <IonRow>
                <IonCol className="col2">
                  <div className="">
                    <Header />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className=" border-top-gray border-bottom-gray ion-no-padding col2">
                  <div className="" style={{ height: "100%" }}>
                    <ContentCol />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="col2">
                  <div className="">
                    <Footer />
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>

            {/* Third column spanning all rows */}
            <IonCol
              size="1"
              className="ion-align-self-stretch border-left-gray col3"
            >
              <div className="full-height magical-column right-row-pt">
                {" "}
                <IonButtons className="button-container">
                  <IonButton
                    href="https://www.instagram.com/academyofprovision/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon icon={logoInstagram} />
                  </IonButton>
                  <IonButton
                    href="https://www.skool.com/provision-academy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
