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

const Day4: React.FC<{
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
          <IonAccordion>
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
              A response
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Content
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header">
              <IonLabel>
                {" "}
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
                    <IonCol id="d4q5" className="blur">
                      How did the feedback from your peer exchange inspire you
                      to think differently about your project?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d4a5">
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
              By lunchtime, you will have identified your creative blocks,
              reflected on past solutions, explored new problem-solving
              techniques, and received feedback from peers to inspire new ideas.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <img src="/images/images/suitcase.svg" height="24" width="24" />{" "}
              Afternoon Objectives:
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-left animated-text move-text-top">
            Explore new mediums and techniques.
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup>
          <IonAccordion toggleIcon={addOutline}>
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
              everything changes
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
          <IonAccordion toggleIcon={addOutline}>
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
              a response
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
              Content
            </div>
          </IonAccordion>
          <IonAccordion>
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
