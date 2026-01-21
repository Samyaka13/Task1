import Tabs from "./Tabs";

const TitleBar = ({ title, tabs, activeTab, onTabChange }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      {tabs?.length > 0 && (
        <Tabs tabs={tabs} activeTab={activeTab} onChange={onTabChange} />
      )}
    </div>
  );
};

export default TitleBar;
