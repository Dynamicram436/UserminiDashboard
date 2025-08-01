import React, { useEffect, useState } from "react";
import { fetchInternData } from "../api/internApi";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const internName = localStorage.getItem("internName");

  useEffect(() => {
    fetchInternData().then(setData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("internName");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
        >
          Logout
        </button>
      </div>

      {data ? (
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="text-lg text-gray-700">
            <p><strong>Name:</strong> {internName}</p>
            <p><strong>Referral Code:</strong> <span className="text-blue-600 font-mono">{data.referralCode}</span></p>
            <p><strong>Total Donations:</strong> <span className="text-green-600 font-semibold">₹{data.totalDonations}</span></p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rewards / Unlockables</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>🎖 Bronze Badge</li>
              <li>🥈 Silver Badge</li>
              <li>🥇 Gold Badge</li>
            </ul>
          </div>

          <Link
            to="/leaderboard"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium underline"
          >
            View Leaderboard
          </Link>
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">Loading...</p>
      )}
    </div>
  );
}
