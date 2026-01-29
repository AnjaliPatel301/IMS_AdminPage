import React from "react";

const InternDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-4">Hello Intern</h1>
        <p className="text-gray-600 mb-6">Welcome to your intern dashboard.</p>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-[#2e2a69] text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default InternDashboard;
