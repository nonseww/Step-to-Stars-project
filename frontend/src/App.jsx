import useToken from "./components/useToken";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Pages/Register/Register";
import MainPage from "./components/Pages/MainPage/MainPage";
import ChatPage from "./components/Pages/ChatPage/ChatPage"; 
import DictPage from "./components/Pages/DictPage/DictPage"; 
import ProfilePage from "./components/Pages/ProfilePage/ProfilePage"; 
import TasksPage from "./components/Pages/TasksPage/TasksPage";
import SettingProfilePage from "./components/Pages/SettingProfilePage/SettingProfilePage"; 


export default function App() {
    const { token, removeToken, setToken } = useToken(); 

    return(
        <BrowserRouter>
            {!token && token!=="" && token!==undefined ? 
                <RegisterForm setToken={setToken} />
            :(
                <>
                    <Routes>
                        <Route exact path="/" element={<MainPage token={token} setToken={setToken} />}></Route>
                        <Route exact path="/chat" element={<ChatPage token={token} setToken={setToken} />}></Route>
                        <Route exact path="/tasks" element={<TasksPage token={token} setToken={setToken} />}></Route>
                        <Route exact path="/dict" element={<DictPage token={token} setToken={setToken} />}></Route>
                        <Route exact path="/profile" element={<ProfilePage token={token} setToken={setToken} />}></Route>
                        <Route exact path="/profile/setting" element={<SettingProfilePage token={token} setToken={setToken} />}></Route>
                    </Routes>
                </>
            )}
        </BrowserRouter>
    )
}