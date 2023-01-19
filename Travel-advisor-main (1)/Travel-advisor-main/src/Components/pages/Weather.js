import React from "react";
import { createRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cityHandler,
  tempHandler,
  humHandler,
  winHandler,
  icoHandler,
  desHandler,
} from "../Store/counterSlice";

import classes from "./Weather.module.css";
export default function Weather() {
  const [data, setData] = useState({});
  const [check, check1] = useState(false);
  const dispatch = useDispatch();
  const code = createRef();
  const cityName = useSelector((state) => {
    return state.counter.city;
  });
  const tempt = useSelector((state) => {
    return state.counter.temp;
  });
  const hum = useSelector((state) => {
    return state.counter.humd;
  });
  const wind = useSelector((state) => {
    return state.counter.win;
  });
  const icon = useSelector((state) => {
    return state.counter.ico;
  });
  const description = useSelector((state) => {
    return state.counter.des;
  });
  console.log(icon);
  const setDataHandler = (e) => {
    setData(e);
    check1(true);
  };
  let seen;
  if (check === true) {
    seen = classes.weather_after;
  } else {
    seen = classes.weather_before;
  }
  const getReportHandler = (e) => {
    let apiKey = "745e82d350b49f130544c2400e8eb24e";
    let city = code.current.value;
    e.preventDefault();
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.cod === 200) {
          console.log(response);
          setDataHandler(response);
          dispatch(cityHandler(response.name));
          dispatch(tempHandler(response.main.temp));
          dispatch(humHandler(response.main.humidity));
          dispatch(icoHandler(response.weather[0].icon));
          dispatch(desHandler(response.weather[0].description));
          dispatch(winHandler(response.wind.speed));
        } else {
          throw new Error("Please check the city name");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  let sou = "https://openweathermap.org/img/wn/" + icon + ".png";
  let sou1 = "https://source.unsplash.com/1600x900/?" + cityName;
  return (
    <div
      className={classes.card_img}
      style={{
        backgroundImage: `url(${sou1})`,
        objectFit: "cover",
      }}
    >
      <div className={classes.card}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.search_bar}
            placeholder="Search"
            ref={code}
          />
          <button onClick={getReportHandler} className={classes.card_btn}>
            <svg
              className={classes.icon}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </button>
        </div>
        <div className={`${seen} `}>
          <h2 className={classes.city}>{`Weather in ${cityName}`} </h2>
          <h1 className={classes.temp}>{`${tempt}°C`}</h1>
          <div className={classes.flex}>
            <img
              // src={`https://openweathermap.org/img/wn/${icon}.png}` + ""}
              // src="https://openweathermap.org/img/wn/"+ {`${icon}`} + ".png "+""
              src={sou}
              alt=""
              className={classes.icon}
            />
            <div className={classes.description}>{`${description}`}</div>
          </div>
          <div className={classes.humidity}>Humidity: {`${hum}`}</div>
          <div className={classes.wind}>Wind speed: {`${wind}`}</div>
        </div>
      </div>
    </div>
  );
}
