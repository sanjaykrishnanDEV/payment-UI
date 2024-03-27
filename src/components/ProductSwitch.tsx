import { useState } from "react";
import { Tabs } from "flowbite-react";

export default function ProductSwitch() {
    const [currentplan,setcurrentplan] = useState("chargebee")
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item  title="chargebee" >
      </Tabs.Item>
      <Tabs.Item title="paddle">
      </Tabs.Item>
      
    </Tabs>
  );
}
