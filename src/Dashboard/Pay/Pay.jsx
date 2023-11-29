import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Payment from "../Payment/payment";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Pay({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Get the current year and month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

  // State to store the selected month and year
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { salary, verified, email } = item;
  const data = {
    handleClose,
    salary,
    verified,
    email,
    selectedMonth,
    selectedYear,
  };

  // Array to store the months for the dropdown
  const monthOptions = Array.from({ length: 12 }, (_, index) => index); // Months are 1-based

  // Array to store the years for the dropdown (current year and past 10 years)
  const yearOptions = Array.from(
    { length: 11 },
    (_, index) => currentYear - index
  );

  // Event handlers for changing the selected month and year
  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  // Set the default selected month and year to the current month and year on initial render
  useEffect(() => {
    setSelectedMonth(currentMonth);
    setSelectedYear(currentYear);
  }, [currentMonth, currentYear]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-5 py-1.5  rounded-md text-white bg-accent  flex items-center gap-2"
      >
        Pay
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <button onClick={handleClose} className=" text-red-500 bg-gray-100">
              <Close />
            </button>
          </div>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            textAlign="center"
            sx={{ fontWeight: "700", mb: 2 }}
          >
            Salary Payment
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "700", mb: 1 }}
          >
            Salary: ${salary}
          </Typography>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  pb-10 border-b border-gray-200 ">
            <div>
              <label htmlFor="monthSelect">Select Month: </label>
              <select
                className="px-5 py-2 my-3 outline-none border border-gray-200 text-dark-0 rounded w-full"
                id="monthSelect"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                {monthOptions.map((month) => (
                  <option key={month} value={month}>
                    {new Date(0, month - 1, 1).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="yearSelect">Select Year: </label>
              <select
                className="px-5 py-2 my-3  outline-none border border-gray-200 text-dark-01   rounded w-full"
                id="yearSelect"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className=" col-span-2">
              <Payment data={data} />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
Pay.propTypes = {
  item: PropTypes.object,
};

export default Pay;
