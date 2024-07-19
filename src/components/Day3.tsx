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

const Day3: React.FC = () => {
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
      trigger="open-modal3"
      presentingElement={presentingElement!}
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
          <IonAccordion>
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
            <div className="ion-padding" slot="content" id="d3q1">
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
                    <IonCol id="d3q12" className="blur">
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
                    <IonCol className="blur">Tap to Review</IonCol>
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
          <IonAccordion toggleIcon={addOutline}>
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
          <IonAccordion toggleIcon={addOutline}>
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
                    <IonCol id="d3q12" className="blur">
                      How can you strengthen your network this week to support
                      your career goals?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a12">
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
                    <IonCol id="d3q13" className="blur">
                      Evaluate your networking efforts today. What worked, and
                      what could be improved?
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3a13">
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
                    <IonCol id="d3q1" className="blur">
                      Tap to Review
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content" id="d3q1">
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
