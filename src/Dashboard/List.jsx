import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

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
  console.log(list);
  return (
    <div className="bg-white p-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl font-semibold text-dark-01 ">No.</th>
              <th className="text-xl font-semibold text-dark-01 ">Employee</th>
              <th className="text-xl font-semibold text-dark-01 ">Email</th>
              <th className="text-xl font-semibold text-dark-01 ">
                Bank Account
              </th>
              <th className="text-xl font-semibold text-dark-01 ">Salary</th>
              <th className="text-xl font-semibold text-dark-01 ">Verified</th>
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
                      <div className="font-bold text-dark-01">{item?.name}</div>
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
                    <button className="btn btn-circle bg-transparent border-none">
                      <FaXmark className="text-2xl text-red-500" />
                    </button>
                  )}
                </td>
                <th>
                  <button>paid</button>
                </th>
                <th>
                  <button className="btn btn-info btn-sm btn-outline">
                    Details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
