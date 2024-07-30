import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  IonIcon,
  IonImg,
  IonNote,
} from "@ionic/react";
import { mailOutline } from "ionicons/icons";

const ContentCol: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeSm="6">
            <img
              src="/images/7days-logo.png"
              className="right-aligned"
              height="260"
              width="260"
            />
          </IonCol>
          <IonCol size="12" sizeSm="6">
            <h1>👋🏾 Welcome to 7 Days To Visionary</h1>Congratulations on taking
            the first step towards unlocking your full potential as a filmmaker.
            Welcome to our mentorship experience, designed to explore your
            interpersonal abilities and deepen your understanding of the
            psychology behind successful storytelling.
            <div className="horizontal-buttons ion-padding-vertical">
              <IonButton
                href="mailto:contact@jordanoramdp.com"
                className="ion-padding-horizontal"
              >
                <IonIcon
                  slot="start"
                  src="/images/email.svg"
                  size="large"
                  style={{ paddingTop: "10px" }}
                ></IonIcon>
                MESSAGE ME
              </IonButton>
              <IonButton
                href="https://cal.com/jordan-oram/30min"
                className="ion-padding-horizontal"
              >
                <IonIcon
                  slot="start"
                  src="/images/schedule.svg"
                  size="large"
                  style={{ paddingTop: "10px" }}
                ></IonIcon>
                SCHEDULE CALL
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard className="ion-text-center">
              <h2>7 Days</h2>
              <IonNote>Consistency</IonNote>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="ion-text-center">
              <h2>84+ Hours</h2>
              <IonNote>Dicipline</IonNote>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="ion-text-center">
              <h2>1:1 </h2>
              <IonNote>Personalized Feedback</IonNote>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="ion-text-center">
              <h2>1 Vision Map</h2>
              <IonNote>Precision</IonNote>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonCard>
        <IonText
          className="ion-margin-horizontal animated-text move-text-top ion-margin"
          style={{ paddingStart: "10px" }}
        >
          <h1>
            <img src="/images/markup.png" height="24" width="24" /> About the
            Challenge
          </h1>
          <p>
            Our "challenge" is more than just guidance; it's a transformative
            journey tailored to help you turn your creative visions into
            reality. Here's how we'll support you along the way:
          </p>
        </IonText>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <img src="/images/plearning.png" height="24" width="24" />{" "}
            Personalized Learning
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-left animated-text move-text-top">
          This challenge adapts to your progress, offering content that evolves
          with you. Tailored lessons ensure you are consistently challenged and
          engaged, focusing on your unique strengths and areas for improvement.
          Regular assessments and feedback keep your learning journey dynamic
          and effective.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <img
              src="/images/expert-guidance.svg"
              className="animated-text"
              height="24"
              width="24"
            />{" "}
            Expert Guidance
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-left animated-text">
          Benefit from the insights and advice of seasoned industry
          professionals. Our mentors, with years of experience, provide
          practical knowledge and insider tips that cover all aspects of
          filmmaking, helping you make informed decisions and avoid common
          pitfalls.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <img
              src="/images/comp-resources.svg"
              className="left-aligned"
              height="24"
              width="24"
            />{" "}
            Comprehensive Resources
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-left animated-text">
          Access a rich library of tools, templates, and educational materials.
          Our resources support every phase of your filmmaking process,
          streamlining complex tasks and allowing you to focus on your creative
          vision. Learn continuously with articles, videos, and case studies
          designed to enhance your skills.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <img
              src="/images/comm-support.png"
              className="left-aligned"
              height="24"
              width="24"
            />{" "}
            Community Support
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-left animated-text">
          Join a vibrant network of like-minded filmmakers. Collaborate, share
          ideas, and gain inspiration from peers and mentors in a supportive
          environment. Engage in discussions, participate in group projects, and
          build lasting professional relationships for future collaborations.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonText
          className="ion-margin-horizontal animated-text move-text-top ion-margin"
          style={{ paddingStart: "10px" }}
        >
          <h1>
            <img src="/images/how-it-works.svg" height="24" width="24" /> How
            the Framework Works
          </h1>
          <p>
            Throughout this strategy, you'll dive deep into essential areas of
            communication, focusing on both practical skills and the critical
            soft skills that help drive consistency and success:
          </p>
        </IonText>
      </IonCard>
      <IonGrid>
        <IonRow>
          <IonCol size="12" sizeSm="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <img
                    src="/images/daily-prompts.svg"
                    className="left-aligned"
                    height="24"
                    width="24"
                  />{" "}
                  Daily Prompts and Activities
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-left animated-text">
                Each day, you'll receive carefully designed prompts and tasks to
                build your skills and knowledge systematically.
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="12" sizeSm="6">
            {" "}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <img
                    src="/images/interactive-ex.svg"
                    className="left-aligned"
                    height="24"
                    width="24"
                  />{" "}
                  Interactive Exercises
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-left animated-text">
                You will engage in hands-on activities that reinforce learning
                and practical application.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeSm="6">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <img
                    src="/images/feedback-reflection.svg"
                    className="left-aligned"
                    height="24"
                    width="24"
                  />{" "}
                  Feedback and Reflection
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-left animated-text">
                Take advantage of regular opportunities to reflect on your
                progress and receive personalized feedback.
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="12" sizeSm="6">
            {" "}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <img
                    src="/images/vision-map.svg"
                    className="left-aligned"
                    height="24"
                    width="24"
                  />{" "}
                  Vision Map Creation
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-left animated-text">
                At the end, you will have developed a comprehensive Vision Map
                that will transform your ideas into actionable projects,
                ensuring they are impactful and inspiring.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonCard>
        <IonText
          className="ion-margin-horizontal animated-text move-text-top ion-margin"
          style={{ paddingLeft: "10px" }}
        >
          <h1>
            <img src="/images/markup.png" height="24" width="24" /> Maximize
            Your Experience
          </h1>
          <p>To get the most out of this program, I encourage you to:</p>

          <p>
            Stay Active: Participate in all daily activities and engage with the
            community.
          </p>

          <p>
            Reflect Daily: Take time to reflect on your progress and apply the
            feedback you receive.
          </p>

          <p>
            Collaborate: Connect with fellow filmmakers, share your insights,
            and seek out collaboration opportunities.
          </p>

          <p>
            Stay Open: Embrace new ideas, techniques, and perspectives to
            enhance your creative journey.
          </p>
        </IonText>
      </IonCard>
    </>
  );
};

export default ContentCol;
