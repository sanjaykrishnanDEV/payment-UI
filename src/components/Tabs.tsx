
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { useState } from "react";

export default function TabList({title}) {
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title={title} icon={HiUserCircle}>
         <span className="font-medium text-gray-800 dark:text-white">Full page or In app chargeBee's UI for card data collection
        payment processing</span>
      </Tabs.Item>
    </Tabs>
  );
}
