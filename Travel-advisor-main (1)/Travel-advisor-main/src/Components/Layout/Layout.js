import React, { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import MainNavigation from "../MainPage/header";
import SideNavigation from "../MainPage/SideNav";
import MainPage from "../pages/starter";
const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.app_nav}>
        <SideNavigation></SideNavigation>
        <MainNavigation />
        <div className={classes.img_nav}>
          {/* <MainPage></MainPage> */}
          <main>{props.children}</main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
