import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonImg,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import {
  triangle,
  ellipse,
  square,
  personOutline,
  flashOutline,
  mailOutline,
} from "ionicons/icons";
import Home from "../pages/Home";
import Daily from "../pages/Daily";
import Messages from "../pages/Messages";
import Personal from "../pages/Personal";
import Vision from "../pages/Vision";
import "./VerticalTabs.css";

const VerticalTabs: React.FC = () => {
  return (
    <div className="responsive-tabs-container">
      <IonTabs className="responsive-tabs">
        <div className="logo-container">
          <IonImg src="/7days-logo.png" alt="Logo" className="logo" />
        </div>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={personOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="daily" href="/daily">
            <IonIcon icon={flashOutline} />
            <IonLabel>Daily</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="personal" href="/personal">
            <IonIcon icon={mailOutline} />
            <IonLabel>Journal</IonLabel>
          </IonTabButton> */}
        </IonTabBar>

        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/daily" component={Daily} exact={true} />
          <Route path="/messages" component={Messages} exact={true} />
          <Route path="/personal" component={Personal} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonTabs>
    </div>
  );
};

export default VerticalTabs;
