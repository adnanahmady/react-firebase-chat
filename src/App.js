import React, { useRef } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import firebase, { auth, useAuthState } from "./utils/firebase";

function App() {
  const containerRef = useRef();
  const headerRef = useRef();
  const controlsRef = useRef();
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  };
  const getChatsContainerHeight = () =>
    `${
      containerRef.current.clientHeight -
      (headerRef.current.clientHeight + controlsRef.current.clientHeight)
    }px`;

  return (
    <div className="container-fluid d-flex flex-column bg-dark-gray vh-100">
      <header className="row" ref={headerRef}>
        {user && <SignOut />}
      </header>
      <main className="d-flex flex-column flex-grow-1">
        {user ? (
          <ChatRoom
            containerSize={getChatsContainerHeight}
            containerRef={containerRef}
            controlsRef={controlsRef}
          />
        ) : (
          <SignIn signInWithGoogle={signInWithGoogle} />
        )}
      </main>
    </div>
  );
}

export default App;
