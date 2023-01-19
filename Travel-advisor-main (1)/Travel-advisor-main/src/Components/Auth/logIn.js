import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import MainNavigation from "../MainPage/header";
import { PersonSimpleRun } from "phosphor-react";

import { tokenHandler, logInHandler } from "../Store/counterSlice";
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";

    try {
      // axios
    } catch (error) {
      console.log(error)
    }

  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAphSYpVNnlsgbEcaP0MJ5C5jv1BR5ESbM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAphSYpVNnlsgbEcaP0MJ5C5jv1BR5ESbM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.status === 200) {
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          dispatch(logInHandler(res.ok));
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(tokenHandler(data.idToken));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className={classes.head}>
        <div className={classes.header}>
          <PersonSimpleRun size={40} weight="fill" />
          <h1>Travel Guide </h1>
        </div>
      </div>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
