import Chart from "./Chart";

const user = {
  name: "Grace Wang",
  email: "grace.wang@example.com",
  verified: false,
  bankAccount: "3456-7890-1234",
  salary: [
    {
      month: "July",
      amount: 70000,
    },
    {
      month: "August",
      amount: 72000,
    },
    {
      month: "September",
      amount: 75000,
    },
    {
      month: "October",
      amount: 78000,
    },
    {
      month: "November",
      amount: 80000,
    },
  ],
  photo: "https://i.ibb.co/0GgNTd0/2.jpg",
  designation: "Sales Representative",
};

const EmployeeDetails = () => {
  return (
    <div className="flex gap-6 flex-col md:flex-row ">
      <div className="w-full md:w-1/3 lg:w-1/4 text-center bg-white rounded p-5">
        <img className=" w-3/5 mx-auto rounded-lg" src={user.photo} alt="" />
        <h2 className="text-2xl mb-1 mt-4 font-semibold text-dark-01 ">
          {user.name}
        </h2>
        <p className="text-dark-02 mb-4">{user.designation}</p>
      </div>
      <div className="w-full md:w-2/3 bg-white rounded p-5">
        <h2 className="text-3xl mb-10 mt-4 font-semibold text-dark-01 ml-10">
          Salary chart
        </h2>
        <div className="overflow-x-auto ml-5">
          <Chart data={user.salary} w={500} h={300} s={50} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
