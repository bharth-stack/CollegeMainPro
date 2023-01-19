import React from "react";
import classes from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
import {
  House,
  Bed,
  Strategy,
  MapPin,
  Cloud,
  Book,
  ListDashes,
} from "phosphor-react";

export default function sideNav() {
  return (
    <div>
      <div className={classes.sideNav}>
        <ul>
          <li>
            <NavLink className={classes.sideNav_link} to={"/"}>
              <House className={classes.sideNav_icon} size={23} weight="fill" />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/plan"}>
              <Strategy
                className={classes.sideNav_icon}
                size={23}
                weight="fill"
              />
              PLAN
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/map"}>
              <MapPin
                className={classes.sideNav_icon}
                size={23}
                weight="fill"
              />{" "}
              MAP
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/weather"}>
              <Cloud className={classes.sideNav_icon} size={23} weight="fill" />
              WEATHER
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/calculator"}>
              <Book className={classes.sideNav_icon} size={23} weight="fill" />
              BUDGET
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/meetups"}>
              <ListDashes
                className={classes.sideNav_icon}
                size={23}
                weight="fill"
              />
              LIST
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.sideNav_link} to={"/calculator"}>
              <Bed className={classes.sideNav_icon} size={23} weight="fill" />
              ACCOMMODATION
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
