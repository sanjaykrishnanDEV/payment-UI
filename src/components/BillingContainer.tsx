import Billing from "./Billing";

const BillingContainer = ({ products, currentMethod, handleSubmit }) => {
  return (
    <div className="flex items-center justify-around">
      <Billing
        products={products}
        currentMethod={currentMethod}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BillingContainer;
