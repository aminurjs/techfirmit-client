import PropTypes from "prop-types";

const Grid = ({ item, handleFire, handleMakeHR }) => {
  return (
    <div>
      <div className="text-center bg-white rounded py-5 pb-8">
        <div className="h-32 w-32 mx-auto rounded-full overflow-hidden">
          <img
            className="scale-150 mt-5 w-auto mx-auto rounded-lg"
            src={item.photo}
            alt=""
          />
        </div>
        <h2 className="text-2xl mb-1 mt-4 font-semibold text-dark-01 ">
          {item.name}
        </h2>
        <p className="text-dark-02 mb-4">{item.designation}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div>
            <span className="text-xl font-semibold">Role: </span>
            {item.role === "hr" ? (
              <button
                disabled
                className="px-3 py-1.5 pl-2 rounded-md text-green-400  bg-green-100"
              >
                HR
              </button>
            ) : (
              <div className="inline">
                {item.role === "fired" ? (
                  <button className="btn btn-sm" disabled>
                    Make HR
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeHR(item._id)}
                    className="px-3 py-1.5 pl-2 rounded-md btn btn-accent btn-outline btn-sm"
                  >
                    Make HR
                  </button>
                )}
              </div>
            )}
          </div>
          <div>
            <span className="text-xl font-semibold">Status: </span>
            {item.role === "fired" ? (
              <button
                disabled
                className="px-3 py-1.5 pl-2 rounded-md text-red-400  bg-red-100"
              >
                Fired
              </button>
            ) : (
              <button
                onClick={() => handleFire(item._id)}
                className="btn btn-error btn-sm btn-outline"
              >
                Fire
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Grid.propTypes = {
  item: PropTypes.object,
  handleFire: PropTypes.func,
  handleMakeHR: PropTypes.func,
};
export default Grid;
