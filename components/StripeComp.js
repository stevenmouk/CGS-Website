import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Router from "next/router";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function PreviewPage(props) {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      props.setAlert(true);
      Router.push("/");
    }

    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
      Router.push("/");
    }
  }, []);

  return (
    // <div className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2 hover:cursor-pointer w-fit">
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link" className="py-2 px-4 text-white bg-black rounded-3xl ">
          Donate
        </button>
      </section>
      {/* <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style> */}
    </form>
    // </div>
  );
}
