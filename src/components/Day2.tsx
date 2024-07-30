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
import { linkOutline, addOutline } from "ionicons/icons";
import { useUser } from "@clerk/clerk-react";

const Day2: React.FC<{
  onDidPresent: () => void;
}> = ({ onDidPresent }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [presentAlert] = useIonAlert();
  const { isSignedIn, user, isLoaded } = useUser();
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

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
              (q: any) => q.questionId === "d2q" + index
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

  useEffect(() => {
    setPresentingElement(page.current);
    getResponses();
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonModal
      ref={modal}
      trigger="open-modal2"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 2</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day2.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Visualize the end goal for your vision.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d2q1" className="blur">
                      Good morning! Let's focus on turning your vision into a
                      concrete plan. Begin by envisioning the ultimate success
                      of your journey. What does the peak of achievement look
                      like for you?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q1", textarea1)}
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
                    <IonCol id="d2q2" className="blur">
                      Get your creative juices flowing. Visualize your future in
                      full effect. What does it encompass? Describe in detail
                      what your vision coming to life looks, sounds, and feels
                      like.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a2">
              <IonTextarea
                placeholder="Respond here"
                value={textarea2}
                autoGrow={true}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q2", textarea2)}
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
                    <IonCol id="d2q3" className="blur">
                      Let's create SMART(ER) goals to make your vision
                      achievable. Identify a specific, measurable goal you can
                      accomplish within the next month. How does this step bring
                      you closer to your future self?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a3">
              <IonTextarea
                placeholder="Respond here"
                value={textarea3}
                autoGrow={true}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q3", textarea3)}
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
                    <IonCol id="d2q4" className="blur">
                      Great job setting a SMARTER goal! Now, let's divide it
                      into smaller, manageable steps. What are the essential
                      actions required to achieve this goal? List them.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a4">
              <IonTextarea
                placeholder="Respond here"
                value={textarea4}
                autoGrow={true}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q4", textarea4)}
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
                    <IonCol id="d2q5" className="blur">
                      As you enjoy your lunch, reflect on the goals and steps
                      you've outlined this morning. How do they align with your
                      overall vision? Adjust as needed.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a5">
              <IonTextarea
                placeholder="Respond here"
                value={textarea5}
                autoGrow={true}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q5", textarea5)}
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
              By lunchtime, you will have visualized your ultimate success, set
              SMART(ER) goals, and broken them down into manageable steps
              aligned with your vision.
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
            Break down your vision into actionable steps.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d2q6" className="blur">
                      Examine the steps you've planned so far. Determine which
                      is the most crucial to begin with. This step is your
                      priority. How does it fit into your bigger picture?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a6">
              <IonTextarea
                placeholder="Respond here"
                value={textarea6}
                autoGrow={true}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q6", textarea6)}
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
                    <IonCol id="d2q7" className="blur">
                      Let's allocate time to your top-priority step. How much
                      time can you realistically dedicate to it on a daily or
                      weekly basis?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a7">
              <IonTextarea
                placeholder="Respond here"
                value={textarea7}
                autoGrow={true}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q7", textarea7)}
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
                    <IonCol id="d2q8" className="blur">
                      Identify the resources necessary for accomplishing your
                      first step. Consider time, information, tools, and support
                      you might need.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a8">
              <IonTextarea
                placeholder="Respond here"
                value={textarea8}
                autoGrow={true}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q8", textarea8)}
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
                    <IonCol id="d2q9" className="blur">
                      Anticipate any challenges that may arise. How will you
                      prepare for and address these potential obstacles?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a9">
              <IonTextarea
                placeholder="Respond here"
                value={textarea9}
                autoGrow={true}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q9", textarea9)}
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
              By the end of the afternoon, you will have prioritized your tasks,
              allocated time for them, identified necessary resources, and
              anticipated potential challenges.
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
            Evaluate and refine your day's planning.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d2q10" className="blur">
                      Creating an accountability plan is crucial. How will you
                      ensure you stay on track with your goals? Consider
                      establishing a daily check-in routine.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a10">
              <IonTextarea
                placeholder="Respond here"
                value={textarea10}
                autoGrow={true}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q10", textarea10)}
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
                    <IonCol id="d2q11" className="blur">
                      Who would you like to discuss your goal and initial steps
                      with?{" "}
                      <i>
                        Sharing your plan can add another layer of reality and
                        commitment.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a11">
              <IonTextarea
                placeholder="Respond here"
                value={textarea11}
                autoGrow={true}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q11", textarea11)}
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
                    <IonCol id="d2q12" className="blur">
                      Take some time to review the day's work. Are there any
                      goals or steps that need further refinement or adjustment?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a12">
              <IonTextarea
                placeholder="Respond here"
                value={textarea12}
                autoGrow={true}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q12", textarea12)}
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
                    <IonCol id="d2q13" className="blur">
                      You've done excellent work today! Use this evening to
                      relax and rejuvenate.{" "}
                      <i>Rest is a vital part of the creative process.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d2a13">
              <IonTextarea
                placeholder="Respond here"
                value={textarea13}
                autoGrow={true}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d2q13", textarea13)}
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
            <div className="ion-padding" slot="content" id="d2q1">
              By the end of the evening, you will have created an accountability
              plan, shared your goals, reviewed and refined your steps, and
              allowed yourself time to relax and rejuvenate.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day2;
