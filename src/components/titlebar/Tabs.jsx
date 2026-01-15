const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex gap-6 border-b mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`pb-2 text-sm font-medium ${
            activeTab === tab.key
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
