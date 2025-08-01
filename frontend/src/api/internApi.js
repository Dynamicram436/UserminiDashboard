export async function fetchInternData() {
  const name = localStorage.getItem("internName") || "Default Intern";
  const res = await fetch(`http://localhost:5000/api/intern?name=${encodeURIComponent(name)}`);
  return await res.json();
}

export async function fetchLeaderboardData() {
  const name = localStorage.getItem("internName") || "Default Intern";
  const res = await fetch(`http://localhost:5000/api/leaderboard?name=${encodeURIComponent(name)}`);
  return await res.json();
}


