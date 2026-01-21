import { useState } from "react";
import Modal from "../Modal/Modal";

const PolicyCard = ({ title, policies, setPolicies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [activePolicy, setActivePolicy] = useState(null);
  const [hasLimit, setHasLimit] = useState("");
  const [limitValue, setLimitValue] = useState("");

  const handleEditClick = (policy) => {
    setActivePolicy(policy);
    setHasLimit(policy.hasLimit ? "yes" : "no");
    setLimitValue("");
    setModalOpen(true);
  };

  const handleUpdate = () => {
    setPolicies((prev) =>
      prev.map((p) => {
        if (p.key !== activePolicy.key) return p;

        if (hasLimit === "no") {
          return {
            ...p,
            hasLimit: false,
            value: `No ${p.title}`,
          };
        }

        return {
          ...p,
          hasLimit: true,
          value: `${p.title} ${limitValue}`,
        };
      })
    );

    setModalOpen(false);
  };

  return (
    <div className="w-full border border-gray-200 rounded-sm bg-[#f9fafb] shadow-sm">
      {/* HEADER */}
      <div className="p-6 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm mt-1">Policy of category appears below.</p>
        </div>

        <button
          onClick={() => setIsOpen((p) => !p)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <svg
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* POLICIES */}
      {isOpen && (
        <div className="border-t bg-white p-6 space-y-6">
          {policies.map((policy) => (
            <div key={policy.key}>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-600">
                  {policy.title}
                </p>

                <button onClick={() => handleEditClick(policy)}>
                  <span
                    className={`rounded-sm px-3 py-1 text-sm font-medium ${
                      policy.hasLimit
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {policy.hasLimit ? "Edit" : "Add"}
                  </span>
                </button>
              </div>

              <p className="mt-1 font-semibold">{policy.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Update Policy"
      >
        {activePolicy && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Is there a limit?
              </label>
              <select
                value={hasLimit}
                onChange={(e) => setHasLimit(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {hasLimit === "yes" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  {activePolicy.title}
                </label>
                <input
                  type="number"
                  min="1"
                  value={limitValue}
                  onChange={(e) => setLimitValue(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter positive value"
                />
              </div>
            )}

            <button
              onClick={handleUpdate}
              disabled={hasLimit === "yes" && (!limitValue || limitValue <= 0)}
              className="mt-4 px-4 py-2 rounded-md bg-green-600 text-white disabled:opacity-50"
            >
              Update
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PolicyCard;
