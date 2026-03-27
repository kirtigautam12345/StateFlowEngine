import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState("");

  const fetchState = async () => {
    const res = await fetch("http://localhost:5000/api/task");
    const data = await res.json();
    setState(data.state);
  };

  const changeState = async (newState) => {
    await fetch("http://localhost:5000/api/transition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: newState }),
    });
    fetchState();
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Workflow Engine</h1>
      <h2>Current State: {state}</h2>

      <button onClick={() => changeState("Approved")}>Approve</button>
      <button onClick={() => changeState("Rejected")}>Reject</button>
    </div>
  );
}

export default App;
