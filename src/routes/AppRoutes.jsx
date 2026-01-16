import { Routes, Route } from "react-router-dom";
import TeamApprovals from "../pages/approvals/TeamApprovals";
import MyApprovals from "../pages/approvals/MyApprovals";
import Transactions from "../pages/expenses/Transactions";
import FlightBooking from "../pages/booking/FlightBooking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/approvals/team" element={<TeamApprovals />} />
      <Route path="/approvals/my" element={<MyApprovals />} />
      <Route
        path="/expense/transactions"
        element={<Transactions/>}
      />
      <Route path="/booking" element={<FlightBooking />} />
    </Routes>
  );
};

export default AppRoutes;
