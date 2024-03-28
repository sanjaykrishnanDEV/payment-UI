import { Tabs } from "flowbite-react";
import Billing from "./Billing";
import BillingDetails from "./BillingDetails";

export default function TabList({
  currentMethod,
  methods,
  handleSelectMethod,
}) {
  return (
    <Tabs
      aria-label="Tabs with underline"
      style="underline"
      activeIndex={currentMethod}
      onActiveTabChange={(dd) => handleSelectMethod(dd)}
    >
      {methods.map((method) => (
        <Tabs.Item active title={method}>
          <span className="font-medium text-gray-800 dark:text-white">
            Full page or In app chargeBee's UI for card data collection payment
            processing
          </span>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
