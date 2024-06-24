import "./ExploreContainer.css";
import { LocalNotifications } from '@capacitor/local-notifications';

LocalNotifications.requestPermissions().then(permission => {
  if (permission.granted) {
    console.log('Permission granted, scheduling notification.');

const notifs =  LocalNotifications.schedule({
  notifications: [
    {
      title: 'Title',
      body: 'Body',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: undefined,
      attachments: undefined,
      actionTypeId: '',
      extra: undefined
    }
  ]
});
console.log('scheduled notifications', notifs);
  } else {
    console.log('Permission denied');
  }
});

LocalNotifications.addListener('localNotificationReceived', (notification) => {
  console.log('Received notification:', notification);
});

LocalNotifications.addListener('localNotificationActionPerformed', (notificationAction) => {
  console.log('Notification action performed:', notificationAction);
});

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
