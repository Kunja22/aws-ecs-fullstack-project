import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("https://YOUR-ALB-URL/api") // Replace with your real backend
      .then(res => {
        if (!res.ok) throw new Error("Network error: " + res.status);
        return res.json();
      })
      .then(data => setData(data.message))
      .catch(err => setData("Error: " + err.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AWS DevOps Project 🚀</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
