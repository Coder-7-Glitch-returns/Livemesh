import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import OnBoardingPage from "./pages/OnBoardingPage";
import GenderPage from "./pages/GenderPage";
import BirthdayPage from "./pages/BirthdayPage";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OnBoardingPage />,      
    },
    {
      path: '/gender',
      element: <GenderPage />,
    },
    {
      path: '/birthday',
      element: <BirthdayPage />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
