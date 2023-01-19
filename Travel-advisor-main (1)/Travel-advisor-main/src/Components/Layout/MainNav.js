import React , { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


import classes from "./Main-Nav.module.css";
// import FavoritesContext from "../../store/favouriates-context";

function MainNavigation() {
  // const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New Meetup</NavLink>
          </li>
          {/* <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
