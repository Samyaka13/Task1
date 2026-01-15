import { useState } from "react";
import TitleBar from "../../components/titleBar/TitleBar";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";

const TABS = [
  { key: "pending", label: "Pending" },
  { key: "hold", label: "Hold" },
  { key: "completed", label: "Completed" },
];

const TeamApprovals = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const completedColumns = [
    {
      key: "details",
      label: "Details",
      render: (row) => (
        <button
          onClick={() => {
            setSelectedRow(row);
            setOpenModal(true);
          }}
          className="text-purple-600 hover:underline font-medium"
        >
          {row.details}
        </button>
      ),
    },
    { key: "submittedOn", label: "Submitted On" },
    { key: "date", label: "Date" },
    { key: "service", label: "Service" },
    { key: "amount", label: "Amount" },
  ];

  const columns = {
    completed: completedColumns,
    pending: [
      { key: "dueDate", label: "Due Date" },
      { key: "applied", label: "Applied" },
    ],
    hold: [
      { key: "dueDate", label: "Due Date" },
      { key: "applied", label: "Applied" },
    ],
  };

  const DATA = {
    completed: [
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
    pending: [{ dueDate: "4 days ago", applied: "08 Jan 26" }],
    hold: [{ dueDate: "2 days ago", applied: "10 Jan 26" }],
  };

  return (
    <>
      <TitleBar
        title="Team Approvals"
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="mt-6">
        <Table columns={columns[activeTab]} data={DATA[activeTab]} />
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Approval Details"
      >
        {selectedRow && (
          <div className="space-y-2 text-sm">
            <p><strong>ID:</strong> {selectedRow.details}</p>
            <p><strong>Service:</strong> {selectedRow.service}</p>
            <p><strong>Amount:</strong> {selectedRow.amount}</p>
            <p><strong>Date:</strong> {selectedRow.date}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TeamApprovals;
