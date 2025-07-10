import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import OnBoardingPage from "./pages/OnBoardingPage";
import GenderPage from "./pages/GenderPage";
import BirthdayPage from "./pages/BirthdayPage";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import ChatCard from "./components/ChatCard";
import SenderProfile from "./components/SenderProfile";
import SenderProfileCard from "./components/SenderProfileCard";

const ChatLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Outlet context={{ showSidebar, setShowSidebar }} />
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
      element: <ChatLayout />,
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
    {
      path: "/senderProfile",
      element: <SenderProfile />,
      children: [
        {
          index: true,
          element: <SenderProfile />,
        },
        {
          path: ":senderId",
          element: <SenderProfileCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
