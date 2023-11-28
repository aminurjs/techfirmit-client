import { Typography } from "@mui/material";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Progress = () => {
  const [selectedName, setSelectedName] = useState("default");
  const axios = useAxios();

  const getWorks = async () => {
    const res = await axios.get(`/all-works?filter=${selectedName}`);
    return res.data;
  };

  const {
    data: list = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-works"],
    queryFn: getWorks,
  });
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  const handleSelect = (e) => {
    setSelectedName(e.target.value);
    refetch();
  };
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
            onChange={handleSelect}
          >
            <option value="default">Default</option>
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
