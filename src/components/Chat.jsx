import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Chat() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  }, [pathname, navigate]);

  return (
    <div className="flex-1 p-4 bg-gray-50">
      {pathname === "/chat" ? (
        <div className="h-full flex items-center justify-center text-center">
          <div>
            <h3 className="text-xl font-semibold">Select a chat</h3>
            <p className="text-gray-500 mt-2">
              Choose from the sidebar or start a new one
            </p>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
