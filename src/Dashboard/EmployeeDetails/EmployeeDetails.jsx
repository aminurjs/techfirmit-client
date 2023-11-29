import { useParams } from "react-router-dom";
import Chart from "./Chart";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

// const data = {
//   name: "Grace Wang",
//   email: "grace.wang@example.com",
//   verified: false,
//   bankAccount: "3456-7890-1234",
//   salary: [
//     {
//       month: "July",
//       amount: 70000,
//     },
//     {
//       month: "August",
//       amount: 72000,
//     },
//     {
//       month: "September",
//       amount: 75000,
//     },
//     {
//       month: "October",
//       amount: 78000,
//     },
//     {
//       month: "November",
//       amount: 80000,
//     },
//   ],
//   photo: "https://i.ibb.co/0GgNTd0/2.jpg",
//   designation: "Sales Representative",
// };

const EmployeeDetails = () => {
  const { email } = useParams();
  console.log(email);
  const axios = useAxios();

  const getEmployee = async () => {
    const res = await axios.get(`/details/${email}`);
    return res.data;
  };

  const { data = {}, isLoading } = useQuery({
    queryKey: ["employee-details"],
    queryFn: getEmployee,
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
  let chartData = [];
  const { user = {}, payment = [] } = data;
  payment.map((item) =>
    chartData.push({ amount: item.salary, date: item.month + "/" + item.year })
  );
  return (
    <div className="flex gap-6 flex-col md:flex-row ">
      <div className="w-full md:w-1/3 lg:w-1/4 text-center bg-white rounded p-5">
        <div className="h-32 w-32 mx-auto rounded-full overflow-hidden">
          <img
            className="scale-150 mt-5 w-auto mx-auto rounded-lg"
            src={user.photo}
            alt=""
          />
        </div>
        <h2 className="text-2xl mb-1 mt-4 font-semibold text-dark-01 ">
          {user.name}
        </h2>
        <p className="text-dark-02 mb-4">{user.designation}</p>
      </div>
      <div className="w-full md:w-2/3 bg-white rounded p-5">
        <h2 className="text-3xl mb-10 mt-4 font-semibold text-dark-01 pl-10 pb-2 border-b border-gray-200">
          Salary chart
        </h2>
        <div className="overflow-x-auto ml-5">
          {payment.length === 0 ? (
            <h3 className="text-2xl font-semibold text-dark-01 mt-5 mb-10 pl-10 ">
              No Data Found
            </h3>
          ) : (
            <Chart data={chartData} w={500} h={300} s={50} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
