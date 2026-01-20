import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

import TeamApprovals from "../pages/approvals/TeamApprovals";
import MyApprovals from "../pages/approvals/MyApprovals";
import Transactions from "../pages/expenses/Transactions";
import FlightBooking from "../pages/booking/FlightBooking";
import Task from "../pages/Task4/Task";
import Rtk from "../pages/Redux/rtk";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/approvals/team" element={<TeamApprovals />} />
        <Route path="/approvals/my" element={<MyApprovals />} />
        <Route path="/expense/transactions" element={<Transactions />} />
        <Route path="/booking" element={<FlightBooking />} />
        <Route path="/task4" element={<Task />} />
        <Route path="/rtk" element={<Rtk/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
