import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header.jsx";
import PeepsPage from "./Components/PeepsPage";
import PeepCard from "./Components/PeepCard";

function App() {
  const [peeps, setPeeps] = useState([]);

  const getPeeps = async () => {
    try {
      const response = await axios.get("http://localhost:3000/peeps");
      return response.data;
    } catch (e) {
      console.log("No peeps found");
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      setPeeps(await getPeeps());
    };
    setTimeout(() => getData(), 0);
  }, []);

  return (
    <>
      <Header />
      <PeepsPage dataArray={peeps} />
    </>
  );
}

export default App;
