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
import { linkOutline, addOutline } from "ionicons/icons";
import { useUser } from "@clerk/clerk-react";

const Day6: React.FC<{
  onDidPresent: () => void;
  currentSpot: any;
}> = ({ onDidPresent, currentSpot }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const [presentAlert] = useIonAlert();
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
  const [isAccordion1Disabled, setisAccordion1Disabled] = useState(true);
  const [isAccordion2Disabled, setisAccordion2Disabled] = useState(true);
  const [isAccordion3Disabled, setisAccordion3Disabled] = useState(true);
  const [isAccordion4Disabled, setisAccordion4Disabled] = useState(true);
  const [isAccordion5Disabled, setisAccordion5Disabled] = useState(true);
  const [isAccordion6Disabled, setisAccordion6Disabled] = useState(true);
  const [isAccordion7Disabled, setisAccordion7Disabled] = useState(true);
  const [isAccordion8Disabled, setisAccordion8Disabled] = useState(true);
  const [isAccordion9Disabled, setisAccordion9Disabled] = useState(true);
  const [isAccordion10Disabled, setisAccordion10Disabled] = useState(true);
  const [isAccordion11Disabled, setisAccordion11Disabled] = useState(true);
  const [isAccordion12Disabled, setisAccordion12Disabled] = useState(true);
  const [isAccordion13Disabled, setisAccordion13Disabled] = useState(true);

  useEffect(() => {
    setPresentingElement(page.current);
    getResponses();
    if (currentSpot.includes("d6")) {
      const hour = currentSpot.split("h")[1];
      if (hour >= 8) {
        setisAccordion1Disabled(false);
      }
      if (hour >= 9) {
        setisAccordion2Disabled(false);
      }
      if (hour >= 10) {
        setisAccordion3Disabled(false);
      }
      if (hour >= 11) {
        setisAccordion4Disabled(false);
      }
      if (hour >= 12) {
        setisAccordion5Disabled(false);
      }
      if (hour >= 13) {
        setisAccordion6Disabled(false);
      }
      if (hour >= 14) {
        setisAccordion7Disabled(false);
      }
      if (hour >= 15) {
        setisAccordion8Disabled(false);
      }
      if (hour >= 16) {
        setisAccordion9Disabled(false);
      }
      if (hour >= 17) {
        setisAccordion10Disabled(false);
      }
      if (hour >= 18) {
        setisAccordion11Disabled(false);
      }
      if (hour >= 19) {
        setisAccordion12Disabled(false);
      }
      if (hour >= 20) {
        setisAccordion13Disabled(false);
      }
    }
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }
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
              (q: any) => q.questionId === "d6q" + index
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
      trigger="open-modal6"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 6</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day6.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Recognize and assess potential challenges.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion1Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d6q1" className="blur">
                      Good morning! What techniques do you use to manage stress
                      effectively?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q1", textarea1)}
              >
                {textarea1 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion2Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">9:00 AM:</IonCol>
                    <IonCol id="d6q2" className="blur">
                      How do you ensure a work-life balance? Share a specific
                      strategy that works for you.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a2">
              <IonTextarea
                placeholder="Respond here"
                value={textarea2}
                autoGrow={true}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q2", textarea2)}
              >
                {textarea2 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion3Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">10:00 AM:</IonCol>
                    <IonCol id="d6q3" className="blur">
                      What professional setback did you turn into a learning
                      opportunity?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a3">
              <IonTextarea
                placeholder="Respond here"
                value={textarea3}
                autoGrow={true}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q3", textarea3)}
              >
                {textarea3 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion4Disabled}>
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">11:00 AM:</IonCol>
                    <IonCol id="d6q4" className="blur">
                      Discuss an instance when maintaining patience led to a
                      breakthrough in your career.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a4">
              <IonTextarea
                placeholder="Respond here"
                value={textarea4}
                autoGrow={true}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q4", textarea4)}
              >
                {textarea4 ? "Update" : "Save"}
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
                    <IonCol id="d6q5" className="blur">
                      How does your personal wellness impact your creative
                      output?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a5">
              <IonTextarea
                placeholder="Respond here"
                value={textarea5}
                autoGrow={true}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q5", textarea5)}
              >
                {textarea5 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion5Disabled}>
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
              By lunchtime, you will have identified stress management
              techniques, work-life balance strategies, learning opportunities
              from setbacks, and the impact of wellness on creativity.
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
            Develop strategies for overcoming setbacks.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion6Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d6q6" className="blur">
                      What does 'sustaining creativity' mean to you in your
                      professional life?{" "}
                      <i>
                        Defining this helps prioritize long-term creativity.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a6">
              <IonTextarea
                placeholder="Respond here"
                value={textarea6}
                autoGrow={true}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q6", textarea6)}
              >
                {textarea6 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion7Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">2:00 PM:</IonCol>
                    <IonCol id="d6q7" className="blur">
                      Identify and plan how to incorporate a new habit that
                      fosters long-term creativity.{" "}
                      <i>New habits can sustain your creative energy.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a7">
              <IonTextarea
                placeholder="Respond here"
                value={textarea7}
                autoGrow={true}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q7", textarea7)}
              >
                {textarea7 ? "Update" : "Save"}
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
                    <IonCol id="d6q8" className="blur">
                      Reflect on the career trajectories of professionals you
                      admire. What can you learn from them?{" "}
                      <i>Learning from others provides valuable insights.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a8">
              <IonTextarea
                placeholder="Respond here"
                value={textarea8}
                autoGrow={true}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q8", textarea8)}
              >
                {textarea8 ? "Update" : "Save"}
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
                    <IonCol id="d6q9" className="blur">
                      Outline a plan for personal and professional development
                      for the next five years. Long-term planning supports
                      sustained growth.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a9">
              <IonTextarea
                placeholder="Respond here"
                value={textarea9}
                autoGrow={true}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q9", textarea9)}
              >
                {textarea9 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion9Disabled}>
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
              By the end of the afternoon, you will have defined sustaining
              creativity, planned to incorporate new creative habits, learned
              from admired professionals, and outlined a five-year development
              plan.
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
            Build resilience through reflection and habit formation.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion10Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d6q10" className="blur">
                      How do you receive and integrate feedback into your work?{" "}
                      <i>
                        Constructive feedback fosters continuous improvement.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a10">
              <IonTextarea
                placeholder="Respond here"
                value={textarea10}
                autoGrow={true}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q10", textarea10)}
              >
                {textarea10 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion11Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">6:00 PM:</IonCol>
                    <IonCol id="d6q11" className="blur">
                      Plan a session to gather constructive critique on a
                      current project.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a11">
              <IonTextarea
                placeholder="Respond here"
                value={textarea11}
                autoGrow={true}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q11", textarea11)}
              >
                {textarea11 ? "Update" : "Save"}
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
                    <IonCol id="d6q12" className="blur">
                      What are your immediate next steps based on today's
                      feedback?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a12">
              <IonTextarea
                placeholder="Respond here"
                value={textarea12}
                autoGrow={true}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q12", textarea12)}
              >
                {textarea12 ? "Update" : "Save"}
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
                    <IonCol id="d6q13" className="blur">
                      Reflect on your growth this week. What are your key
                      takeaways and areas for improvement? Reflection
                      consolidates learning and guides future efforts.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d6a13">
              <IonTextarea
                placeholder="Respond here"
                value={textarea13}
                autoGrow={true}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d6q13", textarea13)}
              >
                {textarea13 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion13Disabled}>
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
              By the end of the evening, you will have identified how to
              integrate feedback, planned a feedback session, determined next
              steps, and reflected on weekly growth and improvement areas.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day6;
