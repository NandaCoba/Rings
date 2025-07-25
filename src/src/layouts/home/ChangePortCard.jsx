import React, { useState } from 'react';

const ChangePortCard = ({ currentPort, onClose, onSave }) => {
  const [inputPort, setInputPort] = useState(currentPort);

  const handleSubmit = () => {
    if (isNaN(inputPort) || inputPort < 1 || inputPort > 65535) {
      alert("Invalid port number!");
      return;
    }
    onSave(Number(inputPort));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-white">Change Port</h2>
        <input
          type="number"
          className="w-full px-4 py-2 border bg-zinc-700 text-white rounded-lg mb-4 "
          value={inputPort}
          onChange={(e) => setInputPort(e.target.value)}
          min="1"
          max="65535"
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePortCard;
