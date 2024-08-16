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

const Day3: React.FC<{
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
              (q: any) => q.questionId === "d3q" + index
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
    if (currentSpot.includes("d3")) {
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

  return (
    <IonModal
      ref={modal}
      trigger="open-modal3"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 3</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day3.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Identify key audience characteristics and ethical considerations.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion1Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d3q1" className="blur">
                      Good morning! Who do you consider your primary audience,
                      and what are their key characteristics? Understanding your
                      audience is crucial for creating connections that are
                      truly unforgettable.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q1", textarea1)}
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
                    <IonCol id="d3q2" className="blur">
                      Describe a piece of media that successfully engaged a
                      similar audience. What lessons can you draw from it?
                      Learning from others can provide valuable insights for
                      your own projects.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a2">
              <IonTextarea
                placeholder="Respond here"
                value={textarea2}
                autoGrow={true}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q2", textarea2)}
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
                    <IonCol id="d3q3" className="blur">
                      How do you plan to use your next project to positively
                      impact your audience?{" "}
                      <i>
                        Thinking about impact ensures your work makes a
                        meaningful difference.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a3">
              <IonTextarea
                placeholder="Respond here"
                value={textarea3}
                autoGrow={true}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q3", textarea3)}
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
                    <IonCol id="d3q4" className="blur">
                      What methods will you use to measure the social impact of
                      your work? Knowing how to measure impact can help you
                      gauge the success and influence of your projects.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a4">
              <IonTextarea
                placeholder="Respond here"
                value={textarea4}
                autoGrow={true}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q4", textarea4)}
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
                    <IonCol id="d3q5" className="blur">
                      Can you think of an example where media failed to connect
                      with its audience? Why did it fail? Understanding failures
                      can provide important lessons for your own work.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a5">
              <IonTextarea
                placeholder="Respond here"
                value={textarea5}
                autoGrow={true}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q5", textarea5)}
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
              By lunchtime, you will have identified your primary audience,
              learned from successful media engagements, planned to positively
              impact your audience, and considered methods to measure social
              impact.
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
            Develop a plan to engage and positively impact the audience.{" "}
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion6Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d3q6" className="blur">
                      Discuss an ethical dilemma you might face in your
                      storytelling and how you plan to address it. Tackling
                      ethical issues head-on strengthens the integrity of your
                      work.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a6">
              <IonTextarea
                placeholder="Respond here"
                value={textarea6}
                autoGrow={true}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q6", textarea6)}
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
                    <IonCol id="d3q7" className="blur">
                      How will you ensure your work respects and represents
                      diverse perspectives? Inclusivity enriches your work and
                      broadens its appeal.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a7">
              <IonTextarea
                placeholder="Respond here"
                value={textarea7}
                autoGrow={true}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q7", textarea7)}
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
                    <IonCol id="d3q8" className="blur">
                      What are the potential consequences of not addressing
                      these ethical considerations properly? Anticipating the
                      impact of oversight helps maintain your work's
                      credibility.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a8">
              <IonTextarea
                placeholder="Respond here"
                value={textarea8}
                autoGrow={true}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q8", textarea8)}
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
                    <IonCol id="d3q9" className="blur">
                      Identify individuals in your network who can support you
                      during tough times. List those you can rely on for
                      guidance and motivation. Seeking guidance shows commitment
                      to ethical storytelling.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a9">
              <IonTextarea
                placeholder="Respond here"
                value={textarea9}
                autoGrow={true}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q9", textarea9)}
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
              By the end of the afternoon, you will have identified ethical
              dilemmas, planned to ensure inclusivity, anticipated consequences
              of ethical oversights, and found resources to help navigate these
              challenges.
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
            Evaluate networking strategies and plan future outreach.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion disabled={isAccordion10Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d3q10" className="blur">
                      What networking strategies have you found most effective
                      in building meaningful relationships?{" "}
                      <i>
                        Effective networking opens doors to collaboration and
                        growth.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a10">
              <IonTextarea
                placeholder="Respond here"
                value={textarea10}
                autoGrow={true}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q10", textarea10)}
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
                    <IonCol id="d3q11" className="blur">
                      Identify a professional in your network whom you would
                      like to collaborate with. What makes them a good fit?{" "}
                      <i>Choose the right collaborators.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a11">
              <IonTextarea
                placeholder="Respond here"
                value={textarea11}
                autoGrow={true}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q11", textarea11)}
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
                    <IonCol id="d3q12" className="blur">
                      How can you strengthen your network this week to support
                      your career goals?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a12">
              <IonTextarea
                placeholder="Respond here"
                value={textarea12}
                autoGrow={true}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q12", textarea12)}
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
                    <IonCol id="d3q13" className="blur">
                      Evaluate your networking efforts today. What worked, and
                      what could be improved?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a13">
              <IonTextarea
                placeholder="Respond here"
                value={textarea13}
                autoGrow={true}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d3q13", textarea13)}
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
                    <IonCol id="d3q1">Tap to Review</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              By the end of the evening, you will have evaluated effective
              networking strategies, identified potential collaborators, planned
              to strengthen your network, and reflected on your networking
              efforts.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day3;
