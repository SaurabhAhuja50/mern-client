import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { FaSignOutAlt } from 'react-icons/fa';


const Dashboard = () => {
  const { auth} = useContext(AuthContext);
  const navigate = useNavigate();


    const handleLogout = () => {
    // Clear context and localStorage
    localStorage.removeItem("auth");

    // Redirect to login
    navigate("/login");
  };


  return (
    
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Welcome, {auth?.firstName}!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="space-y-2">
          <p><strong>Name:</strong> {auth?.user?.firstName} {auth?.user?.lastName}</p>
          <p><strong>Email:</strong> {auth?.user?.email}</p>
          <p><strong>Mobile:</strong> {auth?.user?.mobile}</p>
        </div>
      </div>
    </div>


      
  );
};

export default Dashboard;
