import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://YOUR-ALB-URL/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div>
      <h1>AWS DevOps Project 🚀</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
