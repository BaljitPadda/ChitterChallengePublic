import { useState } from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import axios from "axios";
import PeepCard from "./PeepCard";
import PropTypes from "prop-types";
import "../css/PeepsPage.css";
import Header from "./Header";

const addPeep = async (username) => {
  try {
    const response = await axios.post("http://localhost:3000/addPeep", {
      userID: username,
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
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {});

  const handleSubmit = (event) => {
    event.preventDefault();
    addPeep(props.userData.username);
  };

  return (
    <>
      <br />
      {props.userData.userIsLoggedIn && (
        <div>
          {/* <Header title="Logged in view" /> */}
          <h3> Welcome {props.userData.username}! </h3>
          <form onSubmit={handleSubmit} className="peepForm">
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
        </div>
      )}
      {!props.userData.userIsLoggedIn && <h2> Sign in to peep. </h2>}
      {displayPeeps(props.dataArray)}
    </>
  );
};

PeepsPage.propTypes = {
  dataArray: PropTypes.array,
  userData: PropTypes.any.isRequired,
};

PeepsPage.defaultProps = {
  dataArray: [],
};

export default PeepsPage;
