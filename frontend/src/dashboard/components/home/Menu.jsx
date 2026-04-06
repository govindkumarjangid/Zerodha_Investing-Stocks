import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // User Info Helper
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.username || "User";
  const userEmail = user?.email || "";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () =>
    setIsProfileDropdownOpen((prev) => !prev);

  const navigate = useNavigate();

  const menuClass =
    "text-sm text-gray-500 font-light hover:text-red-400 transition-colors duration-300";
  const activeMenuClass = "text-sm text-red-400 ";

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", index: 0 },
    { label: "Orders", path: "/dashboard/orders", index: 1 },
    { label: "Holdings", path: "/dashboard/holdings", index: 2 },
    { label: "Positions", path: "/dashboard/positions", index: 3 },
    { label: "Funds", path: "/dashboard/funds", index: 4 },
    { label: "Apps", path: "/dashboard/apps", index: 6 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsProfileDropdownOpen(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="h-full flex-[0_0_68%] px-3 py-2.5 box-border flex items-center justify-between z-9">
      <img src="/images/kite-icon.png" style={{ width: "50px" }} alt="logo" />

      <div className="flex items-center justify-between">
        <ul className="list-none flex items-center">
          {menuItems.map(({ label, path, index }) => (
            <li key={index} className="inline-block mr-8">
              <Link
                style={{ textDecoration: "none" }}
                to={path}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="border-l-2 border-gray-200 h-8 mx-0" />

        <div className="relative">
          <div
            className="flex items-center justify-evenly ml-5 cursor-pointer group bg-gray-100 p-2 rounded-md active:scale-95 transition-all duration-300"
            onClick={handleProfileClick}
          >
            <div className="w-8 h-8 text-[0.7rem] text-red-400 rounded-full flex items-center justify-center bg-[#f1f1f1] mr-2 font-bold border border-gray-300 uppercase">
              {userInitial}
            </div>
            <p className="text-xs font-semibold group-hover:text-red-400 transition-colors uppercase">
              {userName}
            </p>
          </div>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-3 w-60 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100 top-full">
              <div className="flex items-center px-4 py-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-gray-500">
                  <FiUser className="text-xl" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-gray-800 truncate capitalize">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                </div>
              </div>

              <button
                className="w-full text-left flex items-center px-4 py-3 mt-1 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 active:scale-95 cursor-pointer"
                onClick={handleLogout}
              >
                <FiLogOut className="mr-2 text-lg" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
