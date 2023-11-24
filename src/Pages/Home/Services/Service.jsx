import PropTypes from "prop-types";
import Button from "../../../Components/Button/Button";

const Service = ({ card }) => {
  return (
    <div className="bg-white rounded shadow flex flex-col">
      <img className="rounded-t flex-grow" src={card.image} alt="" />
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <h2 className="text-3xl font-semibold text-dark-01 ">{card.name}</h2>
        </div>

        <p className="text-dark-02 mb-4">
          {card?.description?.length > 120
            ? `${card.description.slice(0, 120)} ...`
            : card.description}
        </p>
        <Button text={"View Details"} />
      </div>
    </div>
  );
};
Service.propTypes = {
  card: PropTypes.object,
};

export default Service;
