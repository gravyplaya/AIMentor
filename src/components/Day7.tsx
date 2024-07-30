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
  IonTextarea,
  useIonAlert,
} from "@ionic/react";
import "../pages/Daily.css";
import { useUser } from "@clerk/clerk-react";

const Day7: React.FC<{
  onDidPresent: () => void;
}> = ({ onDidPresent }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const [presentAlert] = useIonAlert();
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
      hasAnswer(question).then((answerExists) => {
        if (answerExists == false) {
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
        } else {
          fetch(
            "https://nocodb.tavonni.com/api/v2/tables/mrg99nr91g164o1/records",
            {
              method: "PATCH",
              headers: {
                accept: "application/json",
                "xc-auth": import.meta.env.VITE_NOCODB_TOKEN,
                "xc-token": import.meta.env.VITE_NOCODB_TOKEN,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Id: answerExists,
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
      });
    }
  };

  const getResponses = () => {
    if (!userId) {
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
              (q: any) => q.questionId === "d7q" + index
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

  const hasAnswer = async (qid: string): Promise<boolean> => {
    if (!userId) {
      return false; // Return false if userId is not available
    } else {
      const response = await fetch(
        "https://nocodb.tavonni.com/api/v2/tables/mrg99nr91g164o1/records?where=where%3D%28userId%2Ceq%2C" +
          userId +
          "%29~and%28questionId%2Ceq%2C" +
          qid +
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
      );
      const data = await response.json();
      if (data.list.length >= 1) {
        return data.list[0].Id;
      } else {
        return false;
      }
    }
  };

  return (
    <IonModal
      ref={modal}
      trigger="open-modal7"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 7</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day7.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Reflect on the week's achievements and lessons.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d7q1" className="blur">
                      Good morning! Reflect on the past week. What were the most
                      significant challenges you faced?{" "}
                      <i>Identifying challenges helps you learn and grow.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q1", textarea1)}
              >
                {textarea1 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">9:00 AM:</IonCol>
                    <IonCol id="d7q2" className="blur">
                      What were your greatest achievements last week?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a2">
              <IonTextarea
                placeholder="Respond here"
                value={textarea2}
                autoGrow={true}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q2", textarea2)}
              >
                {textarea2 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">10:00 AM:</IonCol>
                    <IonCol id="d7q3" className="blur">
                      Identify any skills or knowledge gaps that last week
                      highlighted.{" "}
                      <i>Recognizing gaps guides your learning efforts.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a3">
              <IonTextarea
                placeholder="Respond here"
                value={textarea3}
                autoGrow={true}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q3", textarea3)}
              >
                {textarea3 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">11:00 AM:</IonCol>
                    <IonCol id="d7q4" className="blur">
                      Set a learning goal for the coming week to address one of
                      those gaps. Clear goals focus your efforts.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a4">
              <IonTextarea
                placeholder="Respond here"
                value={textarea4}
                autoGrow={true}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q4", textarea4)}
              >
                {textarea4 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">12:00 PM:</IonCol>
                    <IonCol id="d7q5" className="blur">
                      Plan a specific activity or task for each day of the
                      upcoming week that aligns with your long-term goals.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a5">
              <IonTextarea
                placeholder="Respond here"
                value={textarea5}
                autoGrow={true}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q5", textarea5)}
              >
                {textarea5 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">Morning Conclusion</IonCol>
                    <IonCol>Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By lunchtime, you will have reflected on challenges and
              achievements, identified skills or knowledge gaps, set learning
              goals, and planned daily activities for the upcoming week.
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
            Set long-term goals and plan actionable steps.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d7q6" className="blur">
                      Think about someone who inspires you creatively. What
                      qualities do they have that you admire? Learning from
                      others can inspire your own journey.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a6">
              <IonTextarea
                placeholder="Respond here"
                value={textarea6}
                autoGrow={true}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q6", textarea6)}
              >
                {textarea6 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">2:00 PM:</IonCol>
                    <IonCol id="d7q7" className="blur">
                      How can you embody these qualities in your work and daily
                      habits?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a7">
              <IonTextarea
                placeholder="Respond here"
                value={textarea7}
                autoGrow={true}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q7", textarea7)}
              >
                {textarea7 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">3:00 PM:</IonCol>
                    <IonCol id="d7q8" className="blur">
                      Draft a weekly schedule that includes time for self-care
                      and personal development. Balancing work and self-care
                      sustains long-term success.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a8">
              <IonTextarea
                placeholder="Respond here"
                value={textarea8}
                autoGrow={true}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q8", textarea8)}
              >
                {textarea8 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">4:00 PM:</IonCol>
                    <IonCol id="d7q9" className="blur">
                      Plan an engagement with someone in your field that you can
                      learn from.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7a9">
              <IonTextarea
                placeholder="Respond here"
                value={textarea9}
                autoGrow={true}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q9", textarea9)}
              >
                {textarea9 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">Afternoon Conclusion</IonCol>
                    <IonCol>Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By the end of the afternoon, you will have identified
              inspirational qualities to embody, drafted a balanced weekly
              schedule, and planned an engagement or collaboration for mutual
              growth.
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
            Consolidate plans for future growth and continual learning.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d7q10" className="blur">
                      What tools or resources do you need to make your plans for
                      next week successful? Preparation is key to success.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7q10">
              <IonTextarea
                placeholder="Respond here"
                value={textarea10}
                autoGrow={true}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q10", textarea10)}
              >
                {textarea10 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">6:00 PM:</IonCol>
                    <IonCol id="d7q11" className="blur">
                      How will you track and measure your progress on these
                      plans? Tracking progress ensures accountability.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7q11">
              <IonTextarea
                placeholder="Respond here"
                value={textarea11}
                autoGrow={true}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q11", textarea11)}
              >
                {textarea11 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">7:00 PM:</IonCol>
                    <IonCol id="d7q12" className="blur">
                      Write down any fears or concerns about the coming week and
                      how you plan to address them. Acknowledging concerns helps
                      you manage them.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7q12">
              <IonTextarea
                placeholder="Respond here"
                value={textarea12}
                autoGrow={true}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q12", textarea12)}
              >
                {textarea12 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 PM:</IonCol>
                    <IonCol id="d7q13" className="blur">
                      Close your week with relaxation and reflection. Reflect on
                      this week's effectiveness and how it could be integrated
                      into your regular routine.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d7q13">
              <IonTextarea
                placeholder="Respond here"
                value={textarea13}
                autoGrow={true}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d7q13", textarea13)}
              >
                {textarea13 ? "Update" : "Save"}
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
              By the end of the evening, you will have prepared necessary tools
              and resources, planned progress tracking methods, addressed
              concerns for the coming week, and reflected on the week's
              effectiveness.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day7;
