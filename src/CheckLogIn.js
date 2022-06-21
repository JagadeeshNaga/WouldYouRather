import React from "react";
import { useSelector } from "react-redux";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";

export default function CheckLogIn() {

    const currentUser = useSelector(state => state.currentUser)

    return (
        <>
            {currentUser.length > 0 ? <Home/> : <LogIn/>}
        </>
    )
}
