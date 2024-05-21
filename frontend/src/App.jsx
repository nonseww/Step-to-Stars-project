import { useState } from "react";
import axios from "axios";
import useTocken from "./components/useToken";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Pages/Register/Register";
import MainPage from "./components/Pages/MainPage/MainPage";


export default function App() {
    const { token, removeToken, setToken } = useTocken(); 

    return(
        <BrowserRouter>
            {!token && token!=="" && token!==undefined ? 
                <RegisterForm setToken={setToken} />
            :(
                <>
                    <Routes>
                        <Route exact path="/" element={<MainPage token={token} setToken={setToken} />}></Route>
                    </Routes>
                </>
            )}
        </BrowserRouter>
    )
}