import React, { useContext, useState } from "react";
import LoginBg from "../../../images/loginbg.png";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });


  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 7;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = passwordHasNumber + isPasswordValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage, errorCode, email, credential);
      });
  };

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <form>
            <label htmlFor="" className="mb-2">
              Your Name
            </label>{" "}
            <br />
            <input
              className="form-control"
              type="text"
              name="name"
              onBlur={handleBlur}
              placeholder="Your name"
              required
            />
            <label htmlFor="" className="mb-2 mt-2">
              Your Email
            </label>{" "}
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Your email"
              required
            />
            <label htmlFor="" className="mb-2 mt-2">
              Your Email
            </label>{" "}
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Your password"
              required
            />
            <input
              type="button"
              value="Submit"
              className="btn btn-brand mt-3"
            />{" "}
            <br />
          </form>
          <div className="text-center">
            <button
              className="btn btn-brand text-white mt-3"
              onClick={handleGoogleSignIn}
            >
              <FontAwesomeIcon className="me-2 text-danger" icon={faGoogle} />
              Google
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
