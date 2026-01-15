import SidebarItem from "./SidebarItem";
import { sidebarConfig } from "../../configs/sidebar.config";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r px-3 py-4">
      <a
        href="/"
        className="block mb-6 px-2"
      >
        <img
          src="https://static.eka.io/v2/ANTPZ/receipts/2022/12/77e1bc13-de5d-445a-bec2-dffa58269d68.png"
          alt="Logo"
          className="h-10 object-contain"
        />
      </a>
      <nav className="space-y-2">
        {sidebarConfig.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
