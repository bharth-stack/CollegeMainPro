import React from "react";
import MainImg from "../Images/I1.jpg";
import Layout from "../Layout/Layout";
import I1 from "../Images/I2.jpg";
import I2 from "../Images/I4.jpg";
import I3 from "../Images/I5.jpg";
import I4 from "../Images/I3.jpg";
import classes from "./starter.module.css";
import { Compass, Heart, MapTrifold, Binoculars } from "phosphor-react";
// import StarIcon from "@mui/icons-material/Star";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
// import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
function starter() {
  return (
    <div>
      <div>
        <img className={classes.h_img} alt="Img" src={I1}></img>
        <img className={classes.h_img} alt="Img" src={I2}></img>
        <img className={classes.h_img} alt="Img" src={I3}></img>
        <img className={classes.h_img} alt="Img" src={I4}></img>
      </div>

      <div className={classes.c_content}>
        <h2 className={classes.c_header}>
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </h2>

        <div className={classes.c_text}>
          <div className={classes.c_text_inner}>
            <div>
              <h3>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h3>
              <p className={classes.c_text_inner_p}>
                dolor sit amet consectetur adipisicing elit. Aperiam, ipsum
                sapiente aspernatur libero repellat quis consequatur ducimus
                quam nisi exercitationem omnis earum qui.
              </p>
            </div>
            <div className={classes.c_text_inner_h2}>
              <h3>LIFE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
              <p className={classes.c_text_inner_p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>
            </div>
            <div className={classes.c_text_inner_button}>
              <button className={classes.c_text_inner_button_content}>
                Learn More
              </button>
            </div>
          </div>
          <div className={classes.c_content_card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </p>
            <hr className={classes.c_content_card_hr}></hr>
            <div className={classes.c_text}>
              <img
                className={classes.c_content_card_img}
                alt="Img"
                src={I2}
              ></img>
              <div>
                <h3 className={classes.c_content_card_h3}>
                  THE OBEROI UDAIVILAS,{" "}
                  <span className={classes.c_content_card_span}>UDAIPUR</span>
                </h3>
                {/* <StarIcon className={classes.c_content_card_h3}></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.card__picture} ${classes.s_img}`}>
        <div className={classes.c_explore_card}>
          <Compass className={classes.ico} size={70} weight="fill" />
          {/* <LanguageSharpIcon
            sx={{
              color: "#7ed56f",
              fontSize: 70,
              marginTop: "17px",
            }}
          ></LanguageSharpIcon> */}
          <h3 className={classes.c_explore_card_h3}>EXPLORE THE INDIA</h3>
          <p className={classes.c_explore_card_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
        <div className={classes.c_explore_card}>
          <MapTrifold className={classes.ico} size={70} weight="fill" />
          {/* <MapOutlinedIcon
            sx={{
              color: "#7ed56f",
              fontSize: 70,
              marginTop: "17px",
            }}
          ></MapOutlinedIcon> */}
          <h3 className={classes.c_explore_card_h3}>FIND YOUR WAY</h3>
          <p className={classes.c_explore_card_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
        <div className={classes.c_explore_card}>
          <Binoculars className={classes.ico} size={70} weight="fill" />
          {/* <ExploreOutlinedIcon
            sx={{
              color: "#7ed56f",
              fontSize: 70,
              marginTop: "17px",
            }}
          ></ExploreOutlinedIcon> */}
          <h3 className={classes.c_explore_card_h3}>MEET NATURE</h3>
          <p className={classes.c_explore_card_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
        <div className={classes.c_explore_card}>
          <Heart className={classes.ico} size={70} weight="fill" />
          {/* <FavoriteBorderSharpIcon
            sx={{
              color: "#7ed56f",
              fontSize: 70,
              marginTop: "17px",
            }}
          ></FavoriteBorderSharpIcon> */}
          <h3 className={classes.c_explore_card_h3}>LIVE A HEALTHIER LIFE</h3>
          <p className={classes.c_explore_card_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
      </div>
      <div className={classes.c_select}>
        <div className={`${classes.c_select_card} `}>
          <div
            className={`${classes.c_select_card_cover} ${classes.c_select_card_picture}`}
          ></div>
          <h2 className={`${classes.c_header}  ${classes.c_header_heading}`}>
            TRAVEL
          </h2>
        </div>
        <div className={`${classes.c_select_card} `}>
          <div
            className={`${classes.c_select_card_cover} ${classes.c_select_card_picture}`}
          ></div>
          <h2 className={`${classes.c_header}  ${classes.c_header_heading}`}>
            TRAVEL
          </h2>
        </div>
        <div className={`${classes.c_select_card} `}>
          <div
            className={`${classes.c_select_card_cover} ${classes.c_select_card_picture}`}
          ></div>
          <h2 className={`${classes.c_header}  ${classes.c_header_heading}`}>
            TRAVEL
          </h2>
        </div>
      </div>
      <div className={classes.c_footer}>
        <ul>
          <li>COMPANY</li>
          <li>CONTACTUS</li>
          <li>CARRERS</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS</li>
        </ul>

        <p>
          Built by A.V.N.BHARATH and A.RAKESH SARMA for his final project.
          Copyright © by A.V.N.BHARATH and A.RAKESH SARMA. You are 100% allowed
          to use this webpage for both personal and commercial use, but NOT to
          claim it as your own design. A credit to the original author,
          A.V.N.BHARATH and A.RAKESH SARMA, is of course highly appreciated!
        </p>
      </div>
    </div>
  );
}
export default starter;
