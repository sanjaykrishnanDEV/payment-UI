import { useState } from "react";
import BillingContainer from "../components/BillingContainer";
import TabList from "../components/Tabs";
import planData from "../planData.json";
import BillingDetails from "../components/BillingDetails";
import axios from "axios";
const ChargeBee = () => {
  const { chargebeeMethods, products } = planData;
  const [currentMethod, setCurrentMethod] = useState("api");
  const [show, setShow] = useState(false);
  const [planId, setPlanId] = useState(null);
  const handleSelectMethod = (index) => {
    setCurrentMethod(chargebeeMethods[index]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("e", e.target.elements.expiry_date);

    const [expiry_month, expiry_year] =
      e.target.elements.expiry_date.value.split("/");

    const customer_data = {
      customer_details: {
        first_name: e.target.elements.first_name.value,
        last_name: e.target.elements.last_name.value,
        email: e.target.elements.email.value,
      },
      card_details: {
        first_name: e.target.elements.first_name.value,
        last_name: e.target.elements.last_name.value,
        number: e.target.elements.number.value,
        expiry_month: expiry_month,
        expiry_year: expiry_year,
        cvv: e.target.elements.cvv.value,
      },
      subscription_items: [
        {
          item_price_id: planId,
        },
      ],
    };
    console.log("c", customer_data);
    const data = await axios.post(
      "https://chargebee-express.onrender.com/checkout",
      customer_data,
    );
    console.log("data", data);
  };

  const handleChoosePlan = (selectedPlanId) => {
    switch (currentMethod) {
      case "link":
        window.open(
          `https://beamer-test.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=${selectedPlanId}&subscription_items[quantity][0]=1&layout=full_page`,
          "_blank",
        );
        break;
      case "api":
        setShow(true);
        setPlanId(selectedPlanId);
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
        handleChoosePlan={handleChoosePlan}
        products={products}
        currentMethod={currentMethod}
      />
      {show && <BillingDetails handleSubmit={handleSubmit} />}
    </div>
  );
};

export default ChargeBee;
