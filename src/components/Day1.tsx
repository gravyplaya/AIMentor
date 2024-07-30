import React, { useState, useRef, useEffect, useCallback } from "react";
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

const Day1: React.FC<{
  onDidPresent: () => void;
}> = ({ onDidPresent }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const [presentAlert] = useIonAlert();
  const accordionGroupRef1 = useRef<HTMLIonAccordionGroupElement | null>(null);
  const accordionGroupRef2 = useRef<HTMLIonAccordionGroupElement | null>(null);
  const accordionGroupRef3 = useRef<HTMLIonAccordionGroupElement | null>(null);
  const [disabledAccordions, setDisabledAccordions] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
    getResponses();
    // disableAccordionById("accordian1");
    //toggleAccordionDisabled("accordion2");
  }, []);

  // const toggleAccordion = (accordionKey: "first" | "second" | "third") => {
  //   setDisabledAccordions((prevState) => ({
  //     ...prevState,
  //     [accordionKey]: !prevState[accordionKey],
  //   }));
  // };

  // const toggleAccordionDisabled = useCallback(
  //   (accordionId: "accordion1" | "accordion2" | "accordion3") => {
  //     setDisabledAccordions((prevState) => ({
  //       ...prevState,
  //       [accordionId]: !prevState[accordionId],
  //     }));
  //   },
  //   []
  // );

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
  const [isAccordion1Disabled, setisAccordion1Disabled] = useState(false);
  const [isAccordion2Disabled, setisAccordion2Disabled] = useState(false);
  const [isAccordion3Disabled, setisAccordion3Disabled] = useState(false);
  const [isAccordion4Disabled, setisAccordion4Disabled] = useState(false);
  const [isAccordion5Disabled, setisAccordion5Disabled] = useState(false);
  const [isAccordion6Disabled, setisAccordion6Disabled] = useState(false);
  const [isAccordion7Disabled, setisAccordion7Disabled] = useState(false);
  const [isAccordion8Disabled, setisAccordion8Disabled] = useState(false);
  const [isAccordion9Disabled, setisAccordion9Disabled] = useState(false);
  const [isAccordion10Disabled, setisAccordion10Disabled] = useState(false);
  const [isAccordion11Disabled, setisAccordion11Disabled] = useState(false);
  const [isAccordion12Disabled, setisAccordion12Disabled] = useState(false);
  const [isAccordion13Disabled, setisAccordion13Disabled] = useState(false);

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
              (q: any) => q.questionId === "d1q" + index
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

  const disableAccordionById = async (id: any) => {
    const accordionGroups = [
      accordionGroupRef1.current,
      accordionGroupRef2.current,
      accordionGroupRef3.current,
    ];
    for (const group of accordionGroups) {
      if (group) {
        console.log(group);
        const accordions = await group.getAccordions();
        const targetAccordion = accordions.find(
          (accordion) => accordion.value === id
        );
        if (targetAccordion) {
          targetAccordion.disabled = true;
          break;
        }
      }
    }
  };
  return (
    <IonModal
      ref={modal}
      trigger="open-modal1"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 1</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day1.png" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Identify and articulate personal passions.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef1}>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d1q1" className="blur">
                      What is one core value that drives all your creative
                      projects?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a1">
              <IonTextarea
                placeholder="Respond here"
                value={textarea1}
                autoGrow={true}
                onIonChange={(e) => setTextarea1(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q1", textarea1)}
              >
                {textarea1 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion value="accordian2">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">9:00 AM:</IonCol>
                    <IonCol id="d1q2" className="blur">
                      Think about what you love doing. It could be a hobby, a
                      dream, or a cause you believe in. Write down three things
                      you're passionate about.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a2">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea2}
                onIonChange={(e) => setTextarea2(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q2", textarea2)}
              >
                {textarea2 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion value="accordian3">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">10:00 AM:</IonCol>
                    <IonCol id="d1q3" className="blur">
                      Consider how your personal experiences shape the themes
                      you explore. How do they influence your work? This
                      connection can make your creations more authentic and
                      relatable.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a3">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea3}
                onIonChange={(e) => setTextarea3(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q3", textarea3)}
              >
                {textarea3 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion value="accordian4">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">11:00 AM:</IonCol>
                    <IonCol id="d1q4" className="blur">
                      Your background gives you a unique perspective. What
                      special insights do you bring to your creative work
                      because of it? Embrace these differences—they're what will
                      set you apart from the crowd.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a4">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea4}
                onIonChange={(e) => setTextarea4(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q4", textarea4)}
              >
                {textarea4 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion value="accordian5">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">12:00 PM:</IonCol>
                    <IonCol id="d1q5" className="blur">
                      As you approach lunchtime, think about your values. How
                      could you better integrate them into your creative output?{" "}
                      <i>This will deepen the impact of your work.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a5">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea5}
                onIonChange={(e) => setTextarea5(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q5", textarea5)}
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
              By lunchtime, you will have identified your core values and
              passions, understood how personal experiences influence your work,
              and recognized the unique insights your background brings to your
              creativity.
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
            Reflect on life's fulfilling moments and future aspirations.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef2}>
          <IonAccordion value="accordian6">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d1q6" className="blur">
                      Think of a local or community story that has impacted you.
                      What is it? These stories often have powerful, universal
                      themes that connect personally.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a6">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea6}
                onIonChange={(e) => setTextarea6(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q6", textarea6)}
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
                    <IonCol id="d1q7" className="blur">
                      Identify three themes from this story that could relate to
                      on a global scale. Recognizing these connections can
                      expand the reach of your work
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a7">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea7}
                onIonChange={(e) => setTextarea7(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q7", textarea7)}
              >
                {textarea7 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion8Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">3:00 PM:</IonCol>
                    <IonCol id="d1q8" className="blur">
                      How would you start developing one of these themes into a
                      project concept? Brainstorming this can turn a powerful
                      idea into a tangible plan.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a8">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea8}
                onIonChange={(e) => setTextarea8(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q8", textarea8)}
              >
                {textarea8 ? "Update" : "Save"}
              </IonButton>
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion9Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">4:00 PM:</IonCol>
                    <IonCol id="d1q9" className="blur">
                      What visual elements or styles would best convey the
                      emotion of this story?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a9">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea9}
                onIonChange={(e) => setTextarea9(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q9", textarea9)}
              >
                {textarea9 ? "Update" : "Save"}
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
              By the end of the afternoon, you will have identified a
              significant local story, extracted universal themes from it,
              developed a project concept, and chosen visual elements to enhance
              its emotional impact.
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
            Setting intentions and confronting personal doubts.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef3}>
          <IonAccordion disabled={isAccordion10Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d1q10" className="blur">
                      Let's set some goals. What are three creative achievements
                      you want to reach this month? Clear goals can keep you
                      focused and motivated.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a10">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea10}
                onIonChange={(e) => setTextarea10(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q10", textarea10)}
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
                    <IonCol id="d1q11" className="blur">
                      Identify potential barriers to achieving these goals. How
                      might you overcome them?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a11">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea11}
                onIonChange={(e) => setTextarea11(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q11", textarea11)}
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
                    <IonCol id="d1q12" className="blur">
                      What strategies can you implement to maintain focus on
                      your goals amidst distractions?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a12">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea12}
                onIonChange={(e) => setTextarea12(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q12", textarea12)}
              >
                {textarea12 ? "Update" : "Save"}
              </IonButton>{" "}
            </div>
          </IonAccordion>
          <IonAccordion disabled={isAccordion13Disabled}>
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 PM:</IonCol>
                    <IonCol id="d1q13" className="blur">
                      Reflect on the day's work. What insights have you gained
                      about your creative vision? Taking time to reflect helps
                      solidify your progress and clarify your direction.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d1a13">
              <IonTextarea
                placeholder="Respond here"
                autoGrow={true}
                value={textarea13}
                onIonChange={(e) => setTextarea13(e.detail.value!)}
              ></IonTextarea>
              <IonButton
                expand="full"
                onClick={() => saveResponse("d1q13", textarea13)}
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
              By the end of the evening, you will have set clear creative goals,
              anticipated potential barriers, developed strategies to stay
              focused, and reflected on the insights gained about your creative
              vision.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day1;
