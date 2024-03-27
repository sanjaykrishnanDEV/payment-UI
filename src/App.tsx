import { useState } from "react";
import Billing from "./components/Billing";
import ProductSwitch from "./components/ProductSwitch";
import TabList from "./components/Tabs";
import planData from './planData.json'
function App() {
  const products =planData
  return (<div className="flex flex-col justify-around items-center mt-10">
    <TabList title={products[0].Products.chargebee.methods[0]}/>
    <div className="flex justify-around items-center">
    <Billing plan={products[0].Products.chargebee.variants[0]}/>
    <Billing plan={products[0].Products.chargebee.variants[1]}/>
    <Billing plan={products[0].Products.chargebee.variants[2]}/>
    </div>
    <TabList title={products[0].Products.chargebee.methods[1]}/>
    <div className="flex justify-around items-center">
    <Billing/>
    <Billing/>
    <Billing/>
    </div>
  </div>
  );
}

export default App;
