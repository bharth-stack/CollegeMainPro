import React from "react";
import classes from "./header.module.css";
import { SignOut, PersonSimpleRun } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../Store/counterSlice";

export default function header() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(logoutHandler());
  };
  return (
    <div className={classes.head}>
      <h1 className={classes.header}>
        <PersonSimpleRun size={40} weight="fill" />
        Travel Guide
      </h1>
      <p onClick={logouthandler} className={classes.he_button}>
        <SignOut className={classes.sideNav_icon} size={20} weight="fill" />
        logout
      </p>
    </div>
  );
}
