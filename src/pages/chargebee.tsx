import Billing from "../components/Billing";
import { useEffect, useState } from "react";
import BillingContainer from "../components/BillingContainer";
import TabList from "../components/Tabs";
import planData from "../planData.json";
import BillingDetails from "../components/BillingDetails";

const ChargeBee = () => {
  const { chargebeeMethods, products } = planData;
  const [currentMethod, setCurrentMethod] = useState("api");
  const [show, setShow] = useState(false);
  const handleSelectMethod = (index) => {
    setCurrentMethod(chargebeeMethods[index]);
  };

  useEffect(() => {
    console.log("cur", currentMethod);
  }, [currentMethod]);

  const handleSubmit = () => {
    switch (currentMethod) {
      case "link":
        window.open(
          "https://beamer-test.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=nps_scale-USD-Monthly&subscription_items[quantity][0]=1&layout=full_page",
          "_blank",
        );
        break;
      case "api":
        setShow(false);
        break;

      default:
        console.log("invalid");
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-around">
      <TabList
        currentMethod={currentMethod}
        methods={chargebeeMethods}
        handleSelectMethod={handleSelectMethod}
      />
      <BillingContainer
        handleSubmit={handleSubmit}
        products={products}
        currentMethod={currentMethod}
      />
      {show && <BillingDetails />}
    </div>
  );
};

export default ChargeBee;
