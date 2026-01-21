import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

import TeamApprovals from "../pages/approvals/TeamApprovals";
import MyApprovals from "../pages/approvals/MyApprovals";
import Transactions from "../pages/expenses/Transactions";
import FlightBooking from "../pages/booking/FlightBooking";
import Task from "../pages/Task4/Task";
import Rtk from "../pages/Redux/rtk";
import Policy from "../pages/policy/Policy";
import Modal from "../components/Modal/Modal";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Modal open={true}/>} />
        <Route path="/approvals/team" element={<TeamApprovals />} />
        <Route path="/approvals/my" element={<MyApprovals />} />
        <Route path="/expense/transactions" element={<Transactions />} />
        <Route path="/booking" element={<FlightBooking />} />
        <Route path="/task4" element={<Task />} />
        <Route path="/rtk" element={<Rtk/>} />
        <Route path="/policy" element={<Policy/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
