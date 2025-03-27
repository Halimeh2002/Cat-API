import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const [fact, setFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res);
      setFact(res.data.fact);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchFact}>fetch data</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
