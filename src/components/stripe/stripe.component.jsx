import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JQALpFpAAJz9xs8oBhzrori5vOfEQSn7Ri7PlWhMXcL5wJNKdr2BFzfxnLtZnayT4bzDts9twQNxD9gwWeg8qvu00dCo7UJI7";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful !");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Umamad Clothing Ltd."
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total Price $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
