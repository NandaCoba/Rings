import React, { useState } from 'react';
import { Settings } from "lucide-react";
import ChangePortCard from './ChangePortCard';

const MainPort = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="bg-zinc-900 w-full rounded-2xl shadow-md px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          Current Port: <span className="text-green-500 font-bold">4040</span>
        </h1>
        <button 
          className="flex items-center bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          <Settings className="w-4 h-4" />
          Change Port
        </button>
      </div>
    </>
  );
};

export default MainPort;
