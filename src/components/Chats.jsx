import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

function Chats({ messages, dummy, containerRef, containerSize }) {
  useEffect(() => {
    containerRef.current.style.height = containerSize();
  }, [containerRef, containerSize]);

  return (
    <div
      className="row flex-grow-1 bg-dark-gray overflow-auto"
      ref={containerRef}
    >
      <div className="col overflow-auto d-flex flex-column">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
    </div>
  );
}

export default Chats;
