import swal from "sweetalert";
import Button from "../../../Components/Button/Button";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    swal("Thanks For Subscribe Us", "", "success");
  };

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-200">
        <div className="md:w-1/2">
          <h2 className="text-dark-01 font-semibold text-3xl md:text-4xl mb-2">
            Subscribe now
          </h2>
          <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
          <p className="text-dark-02 text-lg mb-5">
            Get latest updates, deals, and exclusive offers Every time.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
            />
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id=""
            />
            <div type="submit">
              <Button text={"Subscribe"} />
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-10">
          <img src="https://i.ibb.co/C8K3MX4/News.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
