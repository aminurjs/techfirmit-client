import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllEmployees = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./../employee.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);
  const handleFire = () => {
    Swal.fire({
      title: "Are You Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Fired!",
        });
      }
    });
  };
  return (
    <>
      {" "}
      <div className="border-b border-gray-200 bg-white  p-5">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          All Employees
        </Typography>
      </div>
      <div className="overflow-x-auto lg:w-11/12">
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
                <tr key={i}>
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
                    {/* <button className="px-3 py-1.5 pl-2 rounded-md text-green-400  bg-green-100">
                      HR
                    </button> */}
                    <button className="px-3 py-1.5 pl-2 rounded-md btn btn-accent btn-outline btn-sm">
                      Make HR
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={handleFire}
                      className="btn btn-error btn-sm btn-outline"
                    >
                      Fire
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllEmployees;
