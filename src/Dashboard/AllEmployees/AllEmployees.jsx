import { Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import Grid from "./Grid";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { useState } from "react";

const AllEmployees = () => {
  const [grid, setGrid] = useState(false);
  const axios = useAxios();

  const getEmployees = async () => {
    const res = await axios.get("/all-employee");
    return res.data;
  };

  const {
    data: list = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-employee"],
    queryFn: getEmployees,
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
  const handleMakeHR = (_id) => {
    Swal.fire({
      title: "Are You Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`/update-role/${_id}`)
          .then((res) => {
            if (res.data.matchedCount > 0) {
              refetch();
              Swal.fire({ icon: "success", title: "Done !" });
            }
          })
          .catch((error) => {
            return Swal.fire({ title: error.code });
          });
      }
    });
  };
  const handleFire = (_id) => {
    Swal.fire({
      title: "Are You Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`/employee/fire/${_id}`)
          .then((res) => {
            if (res.data.matchedCount > 0) {
              refetch();
              Swal.fire({ icon: "success", title: "Done !" });
            }
          })
          .catch((error) => {
            return Swal.fire({ title: error.code });
          });
      }
    });
  };
  return (
    <>
      <div className="border-b border-gray-200 bg-white  p-5 flex justify-between items-end">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          All Employees
        </Typography>
        <div className="bg-stone-200 ">
          <button
            onClick={() => setGrid(false)}
            className={`px-3 py-2  text-2xl ${!grid ? "bg-stone-400" : ""}`}
          >
            <FaList />
          </button>
          <button
            onClick={() => setGrid(true)}
            className={`px-3 py-2 ${grid ? "bg-stone-400" : ""} text-2xl`}
          >
            <IoGridOutline />
          </button>
        </div>
      </div>
      {!grid ? (
        <div className="overflow-x-auto">
          <div className="bg-white p-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xl font-semibold text-dark-01 ">No.</th>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Employee
                  </th>
                  <th className="text-xl font-semibold text-dark-01 ">
                    Designation
                  </th>
                  <th className="text-xl font-semibold text-dark-01 ">Role</th>
                  <th className="text-xl font-semibold text-dark-01 ">Fire</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, i) => (
                  <tr key={item._id}>
                    <th>
                      <p>{i + 1}</p>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-full w-12 h-12">
                            <img
                              src={item?.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-dark-01">
                            {item?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold text-dark-01">
                      {item?.designation}
                    </td>
                    <th>
                      {item.role === "hr" ? (
                        <button
                          disabled
                          className="px-3 py-1.5 pl-2 rounded-md text-green-400  bg-green-100"
                        >
                          HR
                        </button>
                      ) : (
                        <div>
                          {item.role === "fired" ? (
                            <Button variant="contained" disabled>
                              Make HR
                            </Button>
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
                    </th>
                    <th>
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
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="pt-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <Grid
              key={item._id}
              item={item}
              handleFire={handleFire}
              handleMakeHR={handleMakeHR}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllEmployees;
