import PropTypes from "prop-types";

const PeepCard = (props) => {
  return (
    <>
      <li> Name {props.name} </li>
      <li> Username {props.username} </li>
      <li> Posted on: {props.time} </li>
      <li> Peep message: {props.message}</li>
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
