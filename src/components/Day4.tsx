import React, { useState, useRef, useEffect } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  useIonAlert,
  IonTextarea,
} from "@ionic/react";
import "../pages/Daily.css";

import { useUser } from "@clerk/clerk-react";

const Day4: React.FC<{
  onDidPresent: () => void;
}> = ({ onDidPresent }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [presentAlert] = useIonAlert();
  const { isSignedIn, user, isLoaded } = useUser();

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
    getResponses();
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textarea4, setTextarea4] = useState("");
  const [textarea5, setTextarea5] = useState("");
  const [textarea6, setTextarea6] = useState("");
  const [textarea7, setTextarea7] = useState("");
  const [textarea8, setTextarea8] = useState("");
  const [textarea9, setTextarea9] = useState("");
  const [textarea10, setTextarea10] = useState("");
  const [textarea11, setTextarea11] = useState("");
  const [textarea12, setTextarea12] = useState("");
  const [textarea13, setTextarea13] = useState("");
  const [isAccordion1Disabled, setisAccordion1Disabled] = useState();
  const [isAccordion2Disabled, setisAccordion2Disabled] = useState();
  const [isAccordion3Disabled, setisAccordion3Disabled] = useState();
  const [isAccordion4Disabled, setisAccordion4Disabled] = useState();
  const [isAccordion5Disabled, setisAccordion5Disabled] = useState();
  const [isAccordion6Disabled, setisAccordion6Disabled] = useState();
  const [isAccordion7Disabled, setisAccordion7Disabled] = useState();
  const [isAccordion8Disabled, setisAccordion8Disabled] = useState();
  const [isAccordion9Disabled, setisAccordion9Disabled] = useState();
  const [isAccordion10Disabled, setisAccordion10Disabled] = useState();
  const [isAccordion11Disabled, setisAccordion11Disabled] = useState();
  const [isAccordion12Disabled, setisAccordion12Disabled] = useState();
  const [isAccordion13Disabled, setisAccordion13Disabled] = useState();

  let userId: string;
  if (isLoaded && isSignedIn) {
    userId = user.id;
  }
  const saveResponse = (question: string, answer: string) => {
    if (!userId) {
      presentAlert({
        header: "Error",
        message: "You must be logged in to do that.",
        buttons: ["OK"],
      });
      return;
    } else {
      fetch(
        "https://nocodb.tavonni.com/api/v2/tables/mrg99nr91g164o1/records",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "xc-auth": import.meta.env.VITE_NOCODB_TOKEN,
            "xc-token": import.meta.env.VITE_NOCODB_TOKEN,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            response: answer,
            questionId: question,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }
  };

  const getResponses = () => {
    if (!userId) {
      presentAlert({
        header: "Error",
        message: "You must be logged in to do that.",
        buttons: ["OK"],
      });
      return;
    } else {
      fetch(
        "https://nocodb.tavonni.com/api/v2/tables/mrg99nr91g164o1/records?where=where%3D%28userId%2Ceq%2C" +
          userId +
          "%29&limit=25&shuffle=0&offset=0",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "xc-auth": import.meta.env.VITE_NOCODB_TOKEN,
            "xc-token": import.meta.env.VITE_NOCODB_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
          questions.forEach((question, index) => {
            const q = data.list.find(
              (q: any) => q.questionId === "d4q" + index
            );

            if (q && index == 1) {
              setTextarea1(q.response);
            }
            if (q && index == 2) {
              setTextarea2(q.response);
            }
            if (q && index == 3) {
              setTextarea3(q.response);
            }
            if (q && index == 4) {
              setTextarea4(q.response);
            }
            if (q && index == 5) {
              setTextarea5(q.response);
            }
            if (q && index == 6) {
              setTextarea6(q.response);
            }
            if (q && index == 7) {
              setTextarea7(q.response);
            }
            if (q && index == 8) {
              setTextarea8(q.response);
            }
            if (q && index == 9) {
              setTextarea9(q.response);
            }
            if (q && index == 10) {
              setTextarea10(q.response);
            }
            if (q && index == 11) {
              setTextarea11(q.response);
            }
            if (q && index == 12) {
              setTextarea12(q.response);
            }
            if (q && index == 13) {
              setTextarea13(q.response);
            }
          });
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <IonModal
      ref={modal}
      trigger="open-modal4"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 4</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day4.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Identify and tackle creative blocks.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion1Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d4q1" className="blur">
                      Good morning! What creative block are you currently facing
                      in your work? Identifying the problem is the first step
                      towards finding a solution.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q1", textarea1)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion2Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">9:00 AM:</IonCol>
                    <IonCol id="d4q2" className="blur">
                      How have you historically overcome similar creative
                      blocks? Reflecting on past successes can provide a roadmap
                      for current challenges.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a2">
              <IonTextarea
                placeholder="Respond here"
                value={textarea2}
                autoGrow={true}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q2", textarea2)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion3Disabled} id="accordian3">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">10:00 AM:</IonCol>
                    <IonCol id="d4q3" className="blur">
                      Explore a creative problem-solving technique like lateral
                      thinking. How might it apply to your current block?{" "}
                      <i>New approaches can unlock fresh perspectives.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a3">
              <IonTextarea
                placeholder="Respond here"
                value={textarea3}
                autoGrow={true}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q3", textarea3)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion4Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">11:00 AM:</IonCol>
                    <IonCol id="d4q4" className="blur">
                      Engage in a peer-to-peer idea exchange. Share a recent
                      idea and receive feedback in the Provision Academy Skool
                      Community.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a4">
              <IonTextarea
                placeholder="Respond here"
                value={textarea4}
                autoGrow={true}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q4", textarea4)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion5Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">12:00 PM:</IonCol>
                    <IonCol id="d4q5" className="blur">
                      How did the feedback from your peer exchange inspire you
                      to think differently about your project?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a5">
              <IonTextarea
                placeholder="Respond here"
                value={textarea5}
                autoGrow={true}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q5", textarea5)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">Morning Conclusion</IonCol>
                    <IonCol>Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By lunchtime, you will have identified your creative blocks,
              reflected on past solutions, explored new problem-solving
              techniques, and received feedback from peers to inspire new ideas.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" />{" "}
              Afternoon Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Explore new mediums and techniques.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion6Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d4q6" className="blur">
                      What changes in the media landscape could impact your
                      current projects?{" "}
                      <i>Staying informed helps you adapt and innovate.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a6">
              <IonTextarea
                placeholder="Respond here"
                value={textarea6}
                autoGrow={true}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q6", textarea6)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion7Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">2:00 PM:</IonCol>
                    <IonCol id="d4q7" className="blur">
                      Identify a new narrative form or storytelling platform you
                      would like to explore. What attracts you to it? Exploring
                      new mediums can expand your creative toolkit.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a7">
              <IonTextarea
                placeholder="Respond here"
                value={textarea7}
                autoGrow={true}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q7", textarea7)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion8Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">3:00 PM:</IonCol>
                    <IonCol id="d4q8" className="blur">
                      How can adapting to these changes potentially expand your
                      audience or creative scope?{" "}
                      <i>Embracing change can lead to new opportunities.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a8">
              <IonTextarea
                placeholder="Respond here"
                value={textarea8}
                autoGrow={true}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q8", textarea8)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion9Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">4:00 PM:</IonCol>
                    <IonCol id="d4q9" className="blur">
                      Plan a small experiment using a new narrative form or
                      platform. Outline your first steps.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a9">
              <IonTextarea
                placeholder="Respond here"
                value={textarea9}
                autoGrow={true}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q9", textarea9)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">Afternoon Conclusion</IonCol>
                    <IonCol>Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By the end of the afternoon, you will have identified changes in
              the media landscape, chosen a new narrative form to explore,
              planned how to adapt to these changes, and outlined an
              experimental project.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Evening
              Objective:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Reflect on the day's progress and plan future steps.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion10Disabled} id="q10">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d4q10" className="blur">
                      Describe an innovative project idea that you haven't yet
                      started. What makes it innovative?{" "}
                      <i>Identifying unique aspects can help you stand out.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a10">
              <IonTextarea
                placeholder="Respond here"
                value={textarea10}
                autoGrow={true}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q10", textarea10)}
              >
                Save
              </IonButton>{" "}
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion11Disabled} id="q11">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">6:00 PM:</IonCol>
                    <IonCol id="d4q11" className="blur">
                      What resources or collaborations would you need to bring
                      this innovative idea to life.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a11">
              <IonTextarea
                placeholder="Respond here"
                value={textarea11}
                autoGrow={true}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q11", textarea11)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion12Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">7:00 PM:</IonCol>
                    <IonCol id="d4q12" className="blur">
                      Draft a pitch for your innovative idea. Who would be the
                      audience for this pitch?{" "}
                      <i>
                        Clear, targeted pitches increase your chances of
                        success.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a12">
              <IonTextarea
                placeholder="Respond here"
                value={textarea12}
                autoGrow={true}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q12", textarea12)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion13Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 PM:</IonCol>
                    <IonCol id="d4q13" className="blur">
                      Reflect on the potential impact of your innovative idea.
                      How could it change your creative or professional
                      trajectory?{" "}
                      <i>Understanding its impact can guide your efforts.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a13">
              <IonTextarea
                placeholder="Respond here"
                value={textarea13}
                autoGrow={true}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d4q13", textarea13)}
              >
                Save
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">Evening Conclusion</IonCol>
                    <IonCol>Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By the end of the evening, you will have described an innovative
              project, identified necessary resources and collaborations,
              drafted a pitch, and reflected on the potential impact of your
              idea.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day4;
