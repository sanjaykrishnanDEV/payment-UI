import Billing from "../components/Billing";
import { useEffect, useState } from "react";
import BillingContainer from "../components/BillingContainer";
import TabList from "../components/Tabs";
import planData from "../planData.json";
import BillingDetails from "../components/BillingDetails";
import { Paddle, initializePaddle } from "@paddle/paddle-js";

const PaddlePoc = () => {
  const { paddleMethods, products } = planData;
  const [currentMethod, setCurrentMethod] = useState("overlay");
  const [show, setShow] = useState(false);
  const handleSelectMethod = (index) => {
    setCurrentMethod(paddleMethods[index]);
  };

  useEffect(() => {
    console.log("cur", currentMethod);
  }, [currentMethod]);
  const [paddle, setPaddle] = useState<Paddle>();
  ``;
  useEffect(() => {
    initializePaddle({
      token: "test_326875c3daef1b9bbb1c39e0198",
      environment: "sandbox",
    }).then((paddleInstance: Paddle | undefined) => {
      paddle?.Environment.set("sandbox");
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);
  console.log(paddle);

  let customerInfo = {
    email: "sam@example.com",
    address: {
      countryCode: "US",
      postalCode: "10021",
    },
  };

  // const openCheckout = () => {

  // };

  console.log(currentMethod);

  const handleSubmit = () => {
    switch (currentMethod) {
      case "overlay":
        paddle?.Checkout.open({
          items: [
            {
              priceId: "pri_01hsgechrwd14z35wn5fkqp8sn",
              quantity: 1,
            },
          ],
          customer: customerInfo,
        });
        break;
      case "inline":
        paddle?.Checkout.open({
          items: [
            {
              priceId: "pri_01hsgechrwd14z35wn5fkqp8sn",
              quantity: 1,
            },
          ],
          customer: customerInfo,
          settings: {
            displayMode: "inline",
            theme: "light",
            locale: "en",
            frameTarget: "checkout-container",
            frameInitialHeight: 450,
            frameStyle:
              "width: 100%; min-width: 312px; background-color: transparent; border: none;",
          },
        });
        break;

      default:
        console.log("invalid");
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-around">
      <TabList
        currentMethod={currentMethod}
        methods={paddleMethods}
        handleSelectMethod={handleSelectMethod}
      />
      <BillingContainer
        handleSubmit={handleSubmit}
        products={products}
        currentMethod={currentMethod}
      />
      {show && <BillingDetails />}
      <div className="checkout-container"></div>
    </div>
  );
};

export default PaddlePoc;
