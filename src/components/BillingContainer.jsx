import Billing from "./Billing";

const BillingContainer = ({ products, currentMethod, handleChoosePlan }) => {
  return (
    <div className="flex items-center justify-around">
      <Billing
        products={products}
        currentMethod={currentMethod}
        handleChoosePlan={handleChoosePlan}
      />
    </div>
  );
};

export default BillingContainer;
