import { Typography } from "@mui/material";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getPaymentHistory = async () => {
    const res = await axios.get(`/employee/payment-history/${user?.email}`);
    return res.data;
  };

  const { data: list = [], isLoading } = useQuery({
    queryKey: ["payment-history"],
    queryFn: getPaymentHistory,
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
  console.log(list);
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
          {list.length === 0 ? (
            <h3 className="text-2xl font-semibold text-dark-01 my-10 text-center">
              No Data Found
            </h3>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-2xl font-semibold text-dark-01 ">Date</th>
                  <th className="text-2xl font-semibold text-dark-01 ">
                    Amount
                  </th>
                  <th className="text-2xl font-semibold text-dark-01 ">
                    Transaction id
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, i) => (
                  <tr key={i}>
                    <th>
                      <p>
                        {item?.month}/{item?.year}
                      </p>
                    </th>
                    <td className="text-xl font-semibold text-dark-01">
                      ${item?.salary}
                    </td>
                    <td className="text-lg text-dark-01">{item?.paymentId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
