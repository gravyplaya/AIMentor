import "./Messages.css";
import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";

interface IMessage {
  id: number;
  text: string;
  sender: "user" | "other";
}
const LLM_KEY = import.meta.env.VITE_LLM_KEY;

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    { id: 1, text: "Hello!", sender: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "user",
        },
      ]);
      setNewMessage("");

      const response = await fetch(
        "https://visioncraft.top/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + LLM_KEY,
          },
          body: JSON.stringify({
            model: "Mixtral-8x22B-Instruct-v0.1",
            messages: [
              {
                role: "user",
                content: newMessage,
              },
            ],
          }),
        }
      );
      const data = await response.json();
      setMessages((messages) => [
        ...messages,
        {
          id: messages.length + 1,
          text: data.choices[0].message.content,
          sender: "other",
        },
      ]);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          {messages.map((message) => (
            <IonItem
              key={message.id}
              className={
                message.sender === "user" ? "user-message" : "system-message"
              }
            >
              <IonLabel>{message.text}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonToolbar>
          <IonInput
            value={newMessage}
            placeholder="Message"
            onIonChange={(e) => {
              setNewMessage(e.detail.value!);
            }}
          ></IonInput>
          <IonButton
            onClick={sendMessage}
            expand="full"
            color="light"
            type="submit"
          >
            Send Your Message
          </IonButton>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
