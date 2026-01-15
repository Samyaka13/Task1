import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const SidebarItem = ({ item, level = 0 }) => {
  const location = useLocation();

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const isAnyChildActive = hasChildren
    ? item.children.some((child) => location.pathname.startsWith(child.path))
    : false;
  const [isOpen, setIsOpen] = useState(isAnyChildActive);

  useEffect(() => {
    if (isAnyChildActive) setIsOpen(true);
  }, [isAnyChildActive]);

  const Icon = item.icon;

  const baseClasses = `
    group flex items-center justify-between w-[90%] px-1 py-2.5 rounded-lg text-sm transition-all duration-200 ease-in-out
    ${level > 0 ? "mt-2" : "mt-1"} 
  `;

  const getLinkClasses = ({ isActive }) => {
    return [
      baseClasses,
      isActive
        ? "bg-indigo-50 text-indigo-700 font-semibold shadow-sm ring-1 ring-indigo-200"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium",
    ]
      .filter(Boolean)
      .join(" ");
  };
  const parentClasses = `
    ${baseClasses}
    ${isOpen || isAnyChildActive
      ? "text-slate-900 font-semibold"
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }
  `;
  if (!hasChildren) {
    return (
      <NavLink to={item.path} end className={getLinkClasses}>
        <div className="flex items-center gap-3">
          {Icon && level === 0 ? (
            
            <Icon size={20} className="shrink-0" />
          ) : (
            level > 0 && Icon ?  <Icon size={20} className="shrink-0 " /> : (  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity" />)
          )}
          <span>{item.label}</span>
        </div>
      </NavLink>
    );
  }
  return (
    <div className="w-full ">
      <button onClick={() => setIsOpen((prev) => !prev)} className={parentClasses}>
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className={`shrink-0 ${isOpen ? 'text-indigo-600' : ''}`} />}
          <span>{item.label}</span>
        </div>
        <FiChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400"
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="relative ml-4 pl-3 border-l-2 border-slate-200 my-1">
          {item.children.map((child) => (
            <SidebarItem key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;