import React, { useState } from "react";
import __ from "../utils/Translator";

function ChatControls({ onScroll, messagesRef, firebase, auth, controlsRef }) {
  const [newMessage, setNewMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setNewMessage("");
    onScroll();
  };

  return (
    <div className="row bg-dark" ref={controlsRef}>
      <div className="col">
        <form onSubmit={sendMessage}>
          <div className="row">
            <div className="col flex-grow-2 p-0">
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                value={newMessage}
                placeholder={__("Message...")}
                onChange={({ target: { value } }) => setNewMessage(value)}
              />
            </div>
            <div className="col flex-grow-0 p-0">
              <button
                className="btn btn-info btn-lg rounded-0 d-flex flex-nowrap align-items-center"
                type="submit"
              >
                {__("send")}
                <i className="fa fa-send ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatControls;
