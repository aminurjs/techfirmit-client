import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import Swal from "sweetalert2";
import Pay from "../Pay/Pay";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./../employee.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);
  const handleVerify = () => {
    Swal.fire({
      title: "Verify Employee?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Verified!",
        });
      }
    });
  };
  let x = false;
  return (
    <>
      <div className="p-5 flex justify-between">
        <h3 className="font-semibold">Employee List</h3>
        <p className="text-sm">{"Dashboard > Emloyee-List"}</p>
      </div>
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
                <th className="text-xl font-semibold text-dark-01 ">Email</th>
                <th className="text-xl font-semibold text-dark-01 ">
                  Bank Account
                </th>
                <th className="text-xl font-semibold text-dark-01 ">Salary</th>
                <th className="text-xl font-semibold text-dark-01 ">
                  Verified
                </th>
                <th className="text-xl font-semibold text-dark-01 ">Payment</th>
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
                        <div className="text-sm opacity-50">
                          {item?.designation}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-dark-01">{item?.email}</td>
                  <td>{item?.bankAccount}</td>
                  <td className="font-semibold text-dark-01 text-lg">
                    ${item?.salary}
                  </td>
                  <td>
                    {item.verified ? (
                      <button className="btn btn-circle bg-transparent border-none">
                        <FaCheckSquare className="text-2xl text-green-500" />
                      </button>
                    ) : (
                      <button
                        onClick={handleVerify}
                        className="btn btn-circle bg-transparent border-none"
                      >
                        <FaXmark className="text-2xl text-red-500" />
                      </button>
                    )}
                  </td>
                  <th>
                    {x ? (
                      <button className="px-3 py-1.5 pl-2 rounded-md text-green-400  bg-green-100  flex items-center gap-2">
                        <FaCheck />
                        Paid
                      </button>
                    ) : (
                      <Pay
                        item={{
                          salary: item?.salary,
                          verified: item?.verified,
                        }}
                      />
                    )}
                  </th>
                  <th>
                    <Link to={"/dashboard/details"}>
                      <button className="btn btn-info btn-sm btn-outline">
                        Details
                      </button>
                    </Link>
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

export default List;
