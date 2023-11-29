import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";
import swal from "sweetalert";

const CheckoutForm = ({ data }) => {
  const { salary, verified, email, handleClose, selectedMonth, selectedYear } =
    data;
  const [clientSecret, setClientSecret] = useState();
  const [paid, setPaid] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axios = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    if (salary > 0) {
      axios.post("/create-payment-intent", { price: salary }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axios, salary]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return setLoading(false);
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return setLoading(false);
    }
    const res = await axios.post("/checking-payment", {
      email,
      selectedMonth,
      selectedYear,
    });
    if (res.data.status) {
      setPaid("Already Paid This Months Salary");
      return setLoading(false);
    }
    setPaid("");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
      setLoading(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
      setLoading(false);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const data = {
          email,
          salary,
          month: selectedMonth,
          year: selectedYear,
          paymentId: paymentIntent.id,
        };
        axios
          .post("/payment-data", data)
          .then((res) => {
            if (res.data.insertedId) {
              swal({ icon: "success", title: "Payment Successful" });
              handleClose();
              setLoading(false);
            }
          })
          .catch((error) => {
            return swal(error.code);
          });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="py-2 px-5 border-gray-200 border"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#767676",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {loading ? (
          <button
            disabled
            className="btn btn-secondary btn-sm px-12 mt-5 rounded"
          >
            <span className="loading loading-spinner"></span>
          </button>
        ) : (
          <button
            className="btn btn-accent text-white btn-sm px-10 mt-5 rounded"
            type="submit"
            disabled={!stripe || !clientSecret || !verified}
          >
            Pay
          </button>
        )}
        <p className="text-red-500 mt-2">{error}</p>
        <p className="text-green-500 mb-2 text-lg font-medium">{paid}</p>
      </form>
    </>
  );
};
CheckoutForm.propTypes = {
  data: PropTypes.object,
};
export default CheckoutForm;
