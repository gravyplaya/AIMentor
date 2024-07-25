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
} from "@ionic/react";
import "../pages/Daily.css";
import { linkOutline, addOutline } from "ionicons/icons";

const Day5: React.FC<{
  onDidPresent: () => void;
  currentSpot: any;
}> = ({ onDidPresent, currentSpot }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  const accordionGroupRef1 = useRef<HTMLIonAccordionGroupElement | null>(null);
  const accordionGroupRef2 = useRef<HTMLIonAccordionGroupElement | null>(null);
  const accordionGroupRef3 = useRef<HTMLIonAccordionGroupElement | null>(null);

  const disableAccordionById = async (id: any) => {
    const accordionGroups = [
      accordionGroupRef1.current,
      accordionGroupRef2.current,
      accordionGroupRef3.current,
    ];

    for (const group of accordionGroups) {
      if (group) {
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

  useEffect(() => {
    setPresentingElement(page.current);
    if (currentSpot.includes("d5")) {
      const currentHour = currentSpot.substring(3);

      const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      hours.forEach((hour, index) => {
        if (hour >= currentHour) {
          console.log("disable: ", index, questions[index]);
          disableAccordionById("accordian" + questions[index]);
        }
      });
    }
  }, [currentSpot]);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonModal
      ref={modal}
      trigger="open-modal5"
      presentingElement={presentingElement!}
      onDidPresent={onDidPresent}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Day 5</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src="/images/day5.png" height="260" width="260" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/suitcase.svg" height="24" width="24" /> Morning
              Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Define and refine personal brand.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef1}>
          <IonAccordion value="accordian1">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 AM:</IonCol>
                    <IonCol id="d5q1" className="blur">
                      Good morning! How do you define your personal brand in
                      three words?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a1">
              these three words
            </div>
          </IonAccordion>
          <IonAccordion value="accordian2">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">9:00 AM:</IonCol>
                    <IonCol id="d5q2" className="blur">
                      What are the key elements of your work that express your
                      personal brand?{" "}
                      <i>
                        Recognizing these elements strengthens your brand
                        consistency.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a2">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian3">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">10:00 AM:</IonCol>
                    <IonCol id="d5q3" className="blur">
                      Share a recent project that accurately reflects your
                      personal brand. What feedback did you receive on it?{" "}
                      <i>
                        Feedback can reveal how well your brand is communicated.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a3">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian4">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">11:00 AM:</IonCol>
                    <IonCol id="d5q4" className="blur">
                      What aspect of your personal brand needs further
                      development?{" "}
                      <i>Identifying growth areas helps refine your brand.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a4">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian5">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">12:00 PM:</IonCol>
                    <IonCol id="d5q5" className="blur">
                      How can you more effectively communicate your brand values
                      through your work?{" "}
                      <i>
                        Clear communication ensures your audience understands
                        your brand.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a5">
              Content
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
              By lunchtime, you will have defined your personal brand,
              recognized key elements of your work, received feedback on your
              brand communication, and identified areas for further development.
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
            Enhance online presence and marketing strategies.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef2}>
          <IonAccordion value="accordian6">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1:00 PM:</IonCol>
                    <IonCol id="d5q6" className="blur">
                      Evaluate your online presence. Does it effectively
                      represent your “brand” to your satisfaction?{" "}
                      <i>A strong online presence supports your brand.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a6">
              yesirr
            </div>
          </IonAccordion>
          <IonAccordion value="accordian7">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">2:00 PM:</IonCol>
                    <IonCol id="d5q7" className="blur">
                      Identify a new tactic you could use to enhance your online
                      visibility and engagement.{" "}
                      <i>New strategies can boost your reach.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a7">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian8">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">3:00 PM:</IonCol>
                    <IonCol id="d5q8" className="blur">
                      Plan a content calendar for the next month that aligns
                      with your personal brand.{" "}
                      <i>Consistent content reinforces your brand.</i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a8">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian9">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">4:00 PM:</IonCol>
                    <IonCol id="d5q9" className="blur">
                      Reach out to a person from your audience list who aligns
                      with your brand values. Propose a collaboration.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a9">
              Content
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
              By the end of the afternoon, you will have evaluated your online
              presence, identified tactics to enhance visibility, planned a
              content calendar, and proposed a collaboration with an influencer.
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
            Reflect on branding efforts and plan improvements.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup ref={accordionGroupRef3}>
          <IonAccordion value="accordian10">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">5:00 PM:</IonCol>
                    <IonCol id="d5q10" className="blur">
                      What are your main marketing challenges currently?{" "}
                      <i>
                        Identifying challenges is the first step to overcoming
                        them.
                      </i>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a10">
              my challenges are
            </div>
          </IonAccordion>
          <IonAccordion value="accordian11">
            <IonItem slot="header">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">6:00 PM:</IonCol>
                    <IonCol id="d5q11" className="blur">
                      Identify a recent successful marketing strategy in your
                      field. How could its principles be adapted for your use?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a11">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian12">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">7:00 PM:</IonCol>
                    <IonCol id="d5q12" className="blur">
                      Create a list of marketing goals for the upcoming quarter.
                      Think of this like a shotlist.
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a12">
              Content
            </div>
          </IonAccordion>
          <IonAccordion value="accordian13">
            <IonItem slot="header">
              <IonLabel>
                {" "}
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">8:00 PM:</IonCol>
                    <IonCol id="d5q13" className="blur">
                      Reflect on your attention and perspective strategies.
                      Which tactics do you believe will be most effective and
                      why?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d5a13">
              Content
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
              By the end of the evening, you will have identified marketing
              challenges, learned from successful strategies, set marketing
              goals, and reflected on the effectiveness of your tactics.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonModal>
  );
};

export default Day5;
