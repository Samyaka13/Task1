import { useState } from "react";
import TitleBar from "../../components/titleBar/TitleBar";

const Transactions = () => {
    const [activeTab, setActiveTab] = useState("pending");

    const TABS = [
        { key: "pendingTransactions", label: "Pending Transactions" },
        { key: "completedTransactions", label: "Completed Transactions" },
        { key: "allTransactions", label: "All Transactions" },
    ];
    return (
        <>
            <TitleBar
                title="Transactions"
                tabs={TABS}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </>
    );
};

export default Transactions;
