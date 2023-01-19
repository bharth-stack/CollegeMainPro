import LogIn from "./Components/Auth/logIn";
// import Page1 from "./Components/MainPage/sideNav";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import Layout from "./Components/Layout/Layout";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Budget from "./Components/pages/Budget";
import MainPage from "./Components/pages/starter";
import AllMeetUpsPage from "./Components/pages/AllMeetUps";
import NewMeetUpPage from "./Components/pages/NewMeetUps";
import Map from "./Components/pages/Map";
import Weather from "./Components/pages/Weather";
import Plan from "./Components/pages/Plan";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "cabs",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "shopping", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Restaurants",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "charminar",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const loggedIn = useSelector((state) => {
    return state.counter.logIn;
  });
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const log = useSelector((state) => {
    return state.counter.logIn;
  });
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* {!log ? (
        <LogIn></LogIn>
      ) : ( */}
      <Layout>
        <Routes>
          {/* <Route path="/" element={<LogIn />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/calculator" element={<Budget />} />
          <Route path="/meetups" element={<AllMeetUpsPage />} />
          <Route path="/new-meetup" element={<NewMeetUpPage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Layout>
      {/* )} */}
    </div>
  );
}

export default App;
