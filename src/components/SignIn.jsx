import React from "react";
import __ from "../utils/Translator";

function SignIn(props) {
  return (
    <button
      className="btn btn-info rounded-0 my-auto"
      onClick={props.signInWithGoogle}
    >
      {__("Sign in with Google")}
      <i className="fa fa-google ml-3" aria-hidden="true"></i>
    </button>
  );
}

export default SignIn;
