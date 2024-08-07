import "./ExploreContainer.css";
import { LocalNotifications } from "@capacitor/local-notifications";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { IonButton } from "@ionic/react";

const SignUpSignIn: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="ion-margin-start">
      <SignedOut>
        <SignInButton>
          <IonButton>Sign In</IonButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* {isSignedIn && (
    <p>Welcome back, {user?.firstName}!</p>
  )} */}
    </div>
  );
};

export default SignUpSignIn;
