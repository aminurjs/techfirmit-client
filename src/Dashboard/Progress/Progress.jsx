import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Progress = () => {
  const [selectedName, setSelectedName] = useState("Default");
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./../worksheet.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);
  return (
    <>
      <div className="border-b border-gray-200 bg-white  p-5 max-w-4xl flex justify-between">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          Work Sheet
        </Typography>{" "}
        <div className="">
          <label
            className="text-2xl font-medium text-dark-01 opacity-80 mb-1 mr-3"
            htmlFor="nameFilter"
          >
            Filter:
          </label>
          <select
            id="nameFilter"
            className="px-3 py-1.5 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md "
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          >
            <option value="Default">Default</option>
            {list?.map((item, i) => (
              <option key={i} value={item?.name}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-auto max-w-4xl max-h-[70vh]">
        <div className="bg-white p-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-2xl font-semibold text-dark-01 ">No.</th>
                <th className="text-2xl font-semibold text-dark-01 ">Name</th>
                <th className="text-2xl font-semibold text-dark-01 ">Task</th>
                <th className="text-2xl font-semibold text-dark-01 ">Hour</th>
                <th className="text-2xl font-semibold text-dark-01 ">Date</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, i) => (
                <tr key={i}>
                  <th>
                    <p className="text-lg font-semibold text-dark-01 ml-1">
                      {i + 1}
                    </p>
                  </th>
                  <th>
                    <p className="text-lg font-semibold text-dark-01 ">
                      {item?.name}
                    </p>
                  </th>
                  <td>
                    <p className="text-lg font-semibold text-dark-01 ">
                      {item?.task}
                    </p>
                  </td>
                  <td className="text-lg font-semibold text-dark-01">
                    {item?.hours} Hours
                  </td>
                  <td className="text-lg text-dark-01">{item?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Progress;
