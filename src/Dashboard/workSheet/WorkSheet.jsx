import { Typography } from "@mui/material";
import { useState } from "react";
import swal from "sweetalert";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const WorkSheet = () => {
  const [selectedTask, setSelectedTask] = useState("sales");
  const { user } = useAuth();
  const axios = useAxios();

  const handleWorkSheet = (e) => {
    e.preventDefault();
    const hours = e.target.hours.value;
    const date = e.target.date.value;
    const workSheet = {
      task: selectedTask,
      hours: parseFloat(hours),
      date,
      name: user.displayName,
    };
    axios
      .post("/work-sheet", workSheet)
      .then((response) => {
        if (response.data.acknowledged) {
          swal({ title: "Work Submitted", icon: "success" });
        }
      })
      .catch((error) => {
        return swal(error.code);
      });
  };

  return (
    <div>
      <div className="border-b border-gray-200 bg-white p-5">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          Work Sheet
        </Typography>
      </div>
      <div className=" bg-white p-5">
        <form onSubmit={handleWorkSheet}>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            <div className="">
              <label
                className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                htmlFor="taskDropdown"
              >
                Select Tasks:
              </label>
              <select
                id="taskDropdown"
                className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
              >
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="content">Content</option>
                <option value="paperwork">Paper-work</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="research">Research</option>
                <option value="design">Design</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="">
              <div>
                <label
                  className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                  htmlFor="hours"
                >
                  Hours:
                </label>
              </div>
              <div>
                <input
                  className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                  type="number"
                  name="hours"
                  id="hours"
                  placeholder="Work Hours"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div>
                <label
                  className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                  htmlFor="date"
                >
                  Date:
                </label>
              </div>
              <div>
                <input
                  className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                  type="date"
                  name="date"
                  id="date"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="px-10 mt-4 mb-2 py-2.5 text-white text-lg font-medium  bg-gradient-to-r from-blue-02 to-blue-01 hover:bg-transparent duration-500  rounded active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkSheet;
