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

const Day1: React.FC<{
  onDidPresent: () => void;
}> = ({ onDidPresent }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

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
        <IonAccordionGroup>
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
              The core value that drives all my creative projects is
              authenticity. I believe in being true to myself and my vision,
              which ensures my work resonates deeply and genuinely with my
              audience.
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Second Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Third Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Third Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Third Content
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
        <IonAccordionGroup>
          <IonAccordion toggleIcon={addOutline}>
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
              The core value that drives all my creative projects is
              authenticity. I believe in being true to myself and my vision,
              which ensures my work resonates deeply and genuinely with my
              audience.
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Second Content
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
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
              Third Content
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
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
              Third Content
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
        <IonAccordionGroup>
          <IonAccordion toggleIcon={addOutline}>
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
              The core value that drives all my creative projects is
              authenticity. I believe in being true to myself and my vision,
              which ensures my work resonates deeply and genuinely with my
              audience.
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Second Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Third Content
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
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
              Third Content
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
