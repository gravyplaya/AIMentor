import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Messages from "./pages/Messages";
import Personal from "./pages/Personal";
import Vision from "./pages/Vision";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route exact path="/daily">
            <Daily />
          </Route>
          <Route exact path="/personal">
            <Personal />
          </Route>
          <Route exact path="/vision">
            <Vision />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          <IonTabButton tab="daily" href="/daily">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Daily</IonLabel>
          </IonTabButton>
          <IonTabButton tab="personal" href="/personal">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Personal</IonLabel>
          </IonTabButton>
          <IonTabButton tab="vision" href="/vision">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Vision</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
