import { configureStore } from "@reduxjs/toolkit";
import App from "./app";
import head from "./head";

const store =configureStore({
    reducer:{
        appState:App,
        headState:head
    }
})


export default  store;