import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import PropTypes from "prop-types";

const stripePromise = loadStripe(
  "pk_test_51OHXV2EoU837ysm0QEPZGwfLpM55TO6uxKAeRATdU95YjkTLF9xwn9cbdYTqGuO6npYqI3ofiuSH7UKuJfK1s3Cu00d3orI7Ut"
);

const Payment = ({ data }) => {
  console.log("stripePromise", stripePromise);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};
Payment.propTypes = {
  data: PropTypes.object,
};
export default Payment;
