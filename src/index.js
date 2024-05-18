import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import MainPage from "./components/Pages/MainPage/MainPage";
import Register from "./components/Pages/Register/Register";
import DictPage from './components/Pages/DictPage/DictPage';
import TasksPage from './components/Pages/TasksPage/TasksPage';
import ChatPage from './components/Pages/ChatPage/ChatPage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import SettingProfilePage from './components/Pages/ProfilePage/SettingProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage /> 
  }, 
  {
    path: "/register", 
    element: <Register />
  }, 
  {
    path: "/dict", 
    element: <DictPage />
  }, 
  {
    path: "/tasks", 
    element: <TasksPage />
  }, 
  {
    path: "/chat", 
    element: <ChatPage />
  }, 
  {
    path: "/profile", 
    element: <ProfilePage />
  }, 
  {
    path: "/profile/setting", 
    element: <SettingProfilePage />
  }
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider 
    router={router} 
  />
);
