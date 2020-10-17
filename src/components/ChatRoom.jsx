import React, { useRef } from "react";
import firebase, {
  auth,
  firestore,
  useCollectionData,
} from "../utils/firebase";
import config from "../config";
import Chats from "./Chats";
import ChatControls from "./ChatControls";

function ChatRoom({ containerRef, containerSize, controlsRef }) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef
    .orderBy("createdAt")
    .limit(config("messages.limit"));
  const [messages] = useCollectionData(query, { idField: "id" });

  const handleScroll = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Chats
        messages={messages}
        dummy={dummy}
        containerRef={containerRef}
        containerSize={containerSize}
      />
      <ChatControls
        onScroll={handleScroll}
        firebase={firebase}
        auth={auth}
        messagesRef={messagesRef}
        controlsRef={controlsRef}
      />
    </React.Fragment>
  );
}

export default ChatRoom;
