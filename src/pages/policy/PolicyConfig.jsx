import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RULE_LABELS } from "./ruleLabel";
import initialCategories from "../policy/categories.json"
const UpdateRuleModal = ({
  isOpen,
  onClose,
  ruleKey,
  ruleLabel,
  currentValue,
  onUpdate,
}) => {
  const [value, setValue] = useState(String(currentValue ?? ""));
  const [isNeg, setIsNeg] = useState(false);

  useEffect(() => {
    setValue(String(currentValue ?? ""));
    setIsNeg(false);
  }, [currentValue]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    const num = Number(val);
    setIsNeg(!Number.isNaN(num) && num < 0);
  };

  const handleUpdate = () => {
    const num = Number(value);

    if (Number.isNaN(num) || num < 0) return;

    onUpdate(ruleKey, num);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-lg p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Update Limit</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="text-sm text-gray-500">Update {ruleLabel}</p>

        <input
          type="number"
          value={value}
          onChange={handleChange}
          className={`border rounded px-3 py-2 ${
            isNeg ? "border-red-500" : "border-gray-300"
          }`}
        />

        {isNeg && (
          <span className="text-sm text-red-500">
            Value cannot be negative
          </span>
        )}

        <button
          onClick={handleUpdate}
          disabled={isNeg}
          className={`py-2 rounded text-white ${
            isNeg
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:cursor-pointer"
          }`}
        >
          Update
        </button>
      </div>
    </div>
  );
};


const RuleCard = ({ rule, onEdit }) => {
  const ruleKey = Object.keys(rule)[0];
  const value = Object.values(rule)[0];

  const ruleLabel = RULE_LABELS[ruleKey] ?? ruleKey;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col text-[12px] font-medium gap-1.5">
        <span className="text-gray-500">{ruleLabel}</span>

        {value === 0 ? (
          <span>No {ruleLabel}</span>
        ) : (
          <span>
            {ruleLabel} is {value}
          </span>
        )}
      </div>
      <button
        onClick={() => onEdit(ruleKey, value)}
        className={`px-3 py-1 text-xs rounded hover:cursor-pointer ${
          value === 0
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {value === 0 ? "Add" : "Edit"}
      </button>
    </div>
  );
};

const ServiceCard = ({ service, onEditRule }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getPolicyCount = (rules = []) => {
    return rules.filter((rule) => Object.values(rule)[0] > 0).length;
  };

  const policyCount = getPolicyCount(service.rules);

  return (
    <div className="w-full border border-gray-300 rounded-md p-8 flex flex-col gap-8">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex justify-between hover:cursor-pointer"
      >
        <div>
          <h1 className="text-2xl font-medium">{service.label}</h1>
          <span className="text-xs">Policy of category appears below.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {policyCount} Policy
          </span>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {!isExpanded ? (
          <p className="text-sm font-medium">Expand to view & edit policies.</p>
        ) : (
          service.rules.map((rule) => {
            const ruleKey = Object.keys(rule)[0];
            return (
              <RuleCard
                key={ruleKey}
                rule={rule}
                onEdit={(rk, val) => onEditRule(service.label, rk, val)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

const PolicyConfig = () => {
  const STORAGE_KEY = "policies";

  const [categories, setCategories] = useState(initialCategories.categories);
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategories.categories[0]
  );

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setCategories(parsed);
      setSelectedCategory(parsed[0]);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  }, [categories]);

  const [modalData, setModalData] = useState(null);

  const handleRuleUpdate = (serviceLabel, ruleKey, newValue) => {
    const updated = categories.map((cat) => {
      if (cat.label !== selectedCategory.label) return cat;

      return {
        ...cat,
        services: cat.services.map((service) =>
          service.label !== serviceLabel
            ? service
            : {
                ...service,
                rules: service.rules.map((rule) =>
                  rule[ruleKey] !== undefined ? { [ruleKey]: newValue } : rule
                ),
              }
        ),
      };
    });

    setCategories(updated);
    setSelectedCategory(
      updated.find((c) => c.label === selectedCategory.label)
    );
  };

  const handleSelection = (e) => {
    const selectedLabel = e.target.value;
    const categoryObject = categories.find(
      (cat) => cat.label === selectedLabel
    );
    setSelectedCategory(categoryObject);
  };

  return (
    <div className="flex flex-col gap-6">
      {modalData && (
        <UpdateRuleModal
          isOpen
          ruleKey={modalData.ruleKey}
          ruleLabel={modalData.ruleLabel}
          currentValue={modalData.value}
          onClose={() => setModalData(null)}
          onUpdate={(rk, val) =>
            handleRuleUpdate(modalData.serviceLabel, rk, val)
          }
        />
      )}
      <div className="relative w-full">
        <select
          name="categories"
          id="cat"
          className="w-full text-sm bg-[#E5DEFF] px-4 py-4 border border-gray-500 rounded appearance-none hover:cursor-pointer"
          onChange={handleSelection}
          value={selectedCategory.label}
        >
          {categories.map((category) => (
            <option key={category.label} value={category.label}>
              {category.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700">
          <ChevronDown />
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-medium">
            {selectedCategory.label} Configuration
          </h1>
          <span className="text-xs">
            Policies of this category and service appears below.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {selectedCategory.services?.map((service) => (
            <ServiceCard
              key={service.label}
              service={service}
              onEditRule={(serviceLabel, ruleKey, value) =>
                setModalData({
                  serviceLabel,
                  ruleKey,
                  value,
                  ruleLabel: RULE_LABELS[ruleKey] ?? ruleKey,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyConfig;