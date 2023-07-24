import "./App.css";
import { useEffect, useState } from "react";
import { getBreeds } from "./api";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then((res) => {
      setBreeds(res);
    });
  }, []);

  return <div className="App">{breeds.length}</div>;
}

export default App;
