import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import OnBoardingPage from "./pages/OnBoardingPage";
import GenderPage from "./pages/GenderPage";
import BirthdayPage from "./pages/BirthdayPage";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import ChatCard from "./components/ChatCard";

// Layout component for pages with sidebar
const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OnBoardingPage />,
    },
    {
      path: "/gender",
      element: <GenderPage />,
    },
    {
      path: "/birthday",
      element: <BirthdayPage />,
    },
    {
      path: "/chat",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Chat />,
        },
        {
          path: ":chatId",
          element: <ChatCard />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
