import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import PeepsPage from "./Components/PeepsPage";
import PeepCard from "./Components/PeepCard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PeepsPage dataArray={peeps} />}>
            {/* <PeepsPage dataArray={peeps} /> */}
          </Route>
          <Route path="/login" element={<Login />}>
            {/* <Login /> */}
          </Route>
          <Route path="/register" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
