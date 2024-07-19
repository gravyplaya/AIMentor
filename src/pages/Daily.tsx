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
import "./Daily.css";
import Day1 from "../components/Day1";
import Day2 from "../components/Day2";
import Day3 from "../components/Day3";
import Day4 from "../components/Day4";
import Day5 from "../components/Day5";
import Day6 from "../components/Day6";
import Day7 from "../components/Day7";

import { linkOutline, addOutline } from "ionicons/icons";

const Daily: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const handleModalPresent = () => {
    console.log("Modal has been presented");

    // Your function logic here
  };

  return (
    <IonCard>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day1.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Discovering Your Vision{" "}
                <IonButton id="open-modal1">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>
                Passion | Future Aspiration | Intention
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Identify and articulate your core values and creative vision.
            </IonCardContent>
            <Day1 onDidPresent={handleModalPresent} />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day2.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Planning and Goal Setting{" "}
                <IonButton id="open-modal2">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>
                Visualize | Action Steps | Evaluation
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Transform your vision into a structured plan with achievable
              goals.
            </IonCardContent>
            <Day2 />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day3.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Understanding Audience and Social Impact{" "}
                <IonButton id="open-modal3">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>Key Audience | Plan | Impact</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Learn to engage your audience and understand the social
              implications of your work.
            </IonCardContent>
            <Day3 />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day4.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Creative Problem Solving and Innovation{" "}
                <IonButton id="open-modal4">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>
                Creative Blocks | Technique | Progress
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Overcome creative blocks and explore new storytelling techniques.
            </IonCardContent>
            <Day4 />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day5.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Personal Branding and Identity{" "}
                <IonButton id="open-modal5">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>
                Personal Brand | Strategy | Improvements
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Define and refine your personal brand to stand out in the
              industry.
            </IonCardContent>
            <Day5 />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day6.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Resilience and Career Longevity{" "}
                <IonButton id="open-modal6">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>
                Challenges | Setbacks | Habit Forming
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Reflecting and Planning</IonCardContent>
            <Day6 />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/day7.png"
              className="right-aligned"
              height="180"
              width="325"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <IonCardHeader>
              <IonCardTitle>
                Reflecting and Planning{" "}
                <IonButton id="open-modal7">
                  <IonIcon
                    icon={linkOutline}
                    size="small"
                    className="left-aligned"
                  />
                  VIew More
                </IonButton>
              </IonCardTitle>
              <IonCardSubtitle>Lessons | Long-Term | Growth</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Regularly reflect on your progress and set future goals to keep
              moving forward.
            </IonCardContent>
            <Day7 />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default Daily;
