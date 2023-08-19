import PropTypes from "prop-types";
import "../css/PeepCard.css";

const PeepCard = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <br />
          <h5 className="card-title"> Name {props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.username} Posted on: {props.time}
          </h6>
          <p className="card-text"> {props.message} </p>
          {/* <a href="#" className="card-link">
            Comments
          </a>{" "}
          <br />
          <a href="#" className="card-link">
            RePeep
          </a> */}
        </div>
      </div>
    </>
  );
};

PeepCard.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

PeepCard.defaultProps = {
  name: "default name",
  username: "default username",
  time: new Date(),
  message: "default message",
};

export default PeepCard;
