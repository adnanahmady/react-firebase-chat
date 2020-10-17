import React from "react";
import { auth } from "../utils/firebase";

function ChatMessage({ message: { text, photoURL, uid } }) {
  const isSameUser = () => uid === auth.currentUser.uid;
  const typeClass = isSameUser() ? "info" : "light";
  const directionClass = isSameUser() ? "flex-row-reverse" : "flex-row";
  const imageClass = isSameUser() ? "mr-3" : "ml-3";

  return (
    <div className={`my-3 row flex-nowrap ${directionClass}`}>
      <img
        src={photoURL}
        alt={auth.currentUser.displayName}
        className={`${imageClass} img-thumbnail rounded-circle ${
          !photoURL && "d-none"
        }`}
        style={{ height: "50px" }}
      />
      <span className={`bg-${typeClass} p-3 rounded mx-3`}>{text}</span>
    </div>
  );
}

export default ChatMessage;
