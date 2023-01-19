import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "showMail",
  initialState: {
    value: false,
    token: localStorage.getItem("token"),
    isLoggedIn: false,
    logIn: false,
    logOut: {},
    city: "",
    temp: "",
    humd: "",
    win: "",
    ico: "",
    des: "",
  },
  reducers: {
    tokenHandler: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logInHandler: (state, action) => {
      state.logIn = action.payload;
    },
    cityHandler: (state, action) => {
      state.city = action.payload;
      // console.log(action.payload);
    },
    tempHandler: (state, action) => {
      state.temp = action.payload;
      // console.log(action.payload);
    },
    humHandler: (state, action) => {
      state.humd = action.payload;
      // console.log(action.payload);
    },
    winHandler: (state, action) => {
      state.win = action.payload;
      // console.log(action.payload);
    },
    icoHandler: (state, action) => {
      state.ico = action.payload;
      // console.log(action.payload);
    },
    desHandler: (state, action) => {
      state.des = action.payload;
      // console.log(action.payload);
    },
    logoutHandler: (state, action) => {
      state.logIn = false;
    },
  },
});

export const {
  tokenHandler,
  logInHandler,
  cityHandler,
  tempHandler,
  humHandler,
  winHandler,
  icoHandler,
  desHandler,
  logoutHandler,
} = counterSlice.actions;
export default counterSlice.reducer;
