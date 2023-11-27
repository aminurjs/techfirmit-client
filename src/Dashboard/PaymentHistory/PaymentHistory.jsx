import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./../paymentHistory.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);
  return (
    <>
      <div className="border-b border-gray-200 bg-white  p-5 max-w-4xl">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
        >
          Salary History
        </Typography>
      </div>
      <div className="overflow-auto max-w-4xl max-h-[70vh]">
        <div className="bg-white p-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-2xl font-semibold text-dark-01 ">Date</th>
                <th className="text-2xl font-semibold text-dark-01 ">Month</th>
                <th className="text-2xl font-semibold text-dark-01 ">Amount</th>
                <th className="text-2xl font-semibold text-dark-01 ">
                  Transaction id
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, i) => (
                <tr key={i}>
                  <th>
                    <p>{item?.date}</p>
                  </th>
                  <td>
                    <p className="text-lg font-semibold text-dark-01 ">
                      {item?.month}
                    </p>
                  </td>
                  <td className="text-xl font-semibold text-dark-01">
                    ${item?.amount}
                  </td>
                  <td className="text-lg text-dark-01">
                    {item?.transactionId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
