import { auth, useAuthState } from "../utils/firebase";
import React from "react";
import __ from "../utils/Translator";

function SignOut(props) {
  const [user] = useAuthState(auth);

  return (
    user && (
      <div className="col bg-dark-gray d-flex py-2 bg-dark">
        <button
          className="btn rounded-0 btn-dark btn-lg ml-auto"
          onClick={() => auth.signOut()}
        >
          {__("Sign Out")}
          <i className="fa fa-sign-out ml-2" aria-hidden="true"></i>
        </button>
      </div>
    )
  );
}

export default SignOut;
