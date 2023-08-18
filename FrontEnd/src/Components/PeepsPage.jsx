import PeepCard from "./PeepCard";
import PropTypes from "prop-types";

const displayPeeps = (peeps) => {
  return peeps.map((peep) => {
    return (
      <PeepCard
        name={peep.name}
        username={peep.userID}
        time={peep.time}
        message={peep.message}
      />
    );
  });
};

const PeepsPage = (props) => {
  return <>{displayPeeps(props.dataArray)}</>;
};

PeepsPage.propTypes = {
  dataArray: PropTypes.array,
};

PeepsPage.propTypes = {
  dataArray: [],
};

export default PeepsPage;
