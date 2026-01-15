import { useState } from "react";
import TitleBar from "../../components/titleBar/TitleBar";
import Table from "../../components/Table/Table";

const TABS = [
  { key: "pending", label: "Pending" },
  { key: "completed", label: "Completed" },
  { key: "samyak", label: "Samyak" },
];

const DATA = {
  pending: [
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000259",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "09 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "O-INTERN-000000255",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
    {
      details: "Praful",
      submittedOn: "4 days ago",
      date: "08 Jan 26",
      service: "Food Expenses",
      amount: "₹100",
    },
  ],
  completed: [
    {
      completedBy: "O-INTERN-000000255",
      completedOn: "4 days ago",
    },
  ],
  samyak: [{
    info: "O-INTERN-000000255",
    date: "4 days ago",
  },],
};

const COLUMNS = {
  pending: [
    { key: "details", label: "Details" },
    { key: "submittedOn", label: "Submitted On" },
    { key: "date", label: "Date" },
    { key: "service", label: "Service" },
    { key: "amount", label: "Amount" },
  ],
  completed: [
    { key: "completedBy", label: "Completed By" },
    { key: "completedOn", label: "Completed On" },
  ],
  samyak: [
    { key: "info", label: "Info" },
    { key: "date", label: "Date" },
  ],
};

const MyApprovals = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <>
      <TitleBar
        title="My Approvals"
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="mt-6">
        <Table
          columns={COLUMNS[activeTab]}
          data={DATA[activeTab]}
        />
      </div>
    </>
  );
};

export default MyApprovals;
