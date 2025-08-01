import React, { useEffect, useState } from "react";
import { fetchLeaderboardData } from "../api/internApi";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const internName = localStorage.getItem("internName");

  useEffect(() => {
    fetchLeaderboardData().then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Leaderboard</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow rounded-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Donations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => {
              const isCurrentUser = entry.name.toLowerCase() === internName?.toLowerCase();
              return (
                <tr
                  key={i}
                  className={`${isCurrentUser ? "bg-green-100 font-semibold" : "bg-white"} hover:bg-gray-50 transition`}
                >
                  <td className="py-3 px-4 border-b">{entry.name}</td>
                  <td className="py-3 px-4 border-b">₹{entry.donations}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Link
          to="/dashboard"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
