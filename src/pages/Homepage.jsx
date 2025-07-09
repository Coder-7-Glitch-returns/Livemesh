import React from 'react'
import Sidebar from '../components/Sidebar';

export default function Homepage() {
  return (
    <div className="bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA] min-h-screen flex items-center w-full">
      <div className="flex items-center justify-center">
        <Sidebar />
      </div>
    </div>
  );
}
