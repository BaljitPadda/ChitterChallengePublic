import { useState } from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import axios from "axios";
import PeepCard from "./PeepCard";
import PropTypes from "prop-types";
import "../css/PeepsPage.css";

const addPeep = async () => {
  try {
    const response = await axios.post("http://localhost:3000/addPeep", {
      userID: "John2000",
      message: message.value,
      // time: new Date().toLocaleDateString(),
    });
    if (response.status == 200) {
      window.location.reload();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  addPeep();
};

const displayPeeps = (peeps) => {
  return peeps.map((peep, index) => {
    return (
      <PeepCard
        name={peep.name}
        username={peep.userID}
        time={peep.time}
        message={peep.message}
        key={index}
      />
    );
  });
};

const PeepsPage = (props) => {
  const [message, setMessage] = useState(``);
  const [time, setTime] = useState(``);

  useEffect(() => {});

  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <legend>Peep something... </legend>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          id="message"
          placeholder="peep text here"
        />
        <br />
        <input type="submit" value="Submit" name="submit" />
      </form>
      {displayPeeps(props.dataArray)}
    </>
  );
};

PeepsPage.propTypes = {
  dataArray: PropTypes.array,
};

PeepsPage.propTypes = {
  dataArray: [],
};

export default PeepsPage;
