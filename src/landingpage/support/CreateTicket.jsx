import { FiUser, FiPieChart } from "react-icons/fi";
import { BsPlusCircle, BsGrid, BsAt } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import CategoryCard from "../UI/CategoryCard";

const CreateTicket = () => {

  const supportCategories = [
    {
      title: "Account Opening",
      icon: BsPlusCircle,
      links: ["Resident Individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"],
    },
    {
      title: "Your Zerodha Account",
      icon: FiUser,
      links: ["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"],
    },
    {
      title: "Kite",
      icon: BsAt,
      links: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"],
    },
    {
      title: "Funds",
      icon: BiRupee,
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: BsGrid,
      links: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
    },
    {
      title: "Coin",
      icon: FiPieChart,
      links: ["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"],
    },
  ];

  const quickLinks = [
    "1. Track account opening",
    "2. Track segment activation",
    "3. Intraday margins",
    "4. Kite user manual",
    "5. Learn how to create a ticket",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Left Column  */}
      <div className="lg:col-span-2">
        {supportCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            links={category.links}
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="lg:col-span-1 space-y-6">

        {/* Notice/Highlights Box */}
        <div className="border-l-2 border-[#ff5722] bg-[#fffbf5] p-5 text-[14px]">
          <ul className="list-disc pl-4 space-y-3 text-[#387ed1]">
            <li><a href="#" className="hover:underline">Trading holiday on account of Good Friday on April 03, 2026</a></li>
            <li><a href="#" className="hover:underline">Latest Intraday leverages and Square-off timings</a></li>
          </ul>
        </div>

        {/* Quick Links Card */}
        <div className="border border-gray-200 bg-white rounded-sm shadow-sm">
          <div className="p-4 border-b border-gray-200 bg-[#f8f9fa]">
            <h3 className="text-[15px] font-medium text-gray-800">Quick links</h3>
          </div>
          <ul className="flex flex-col text-[14px] text-[#387ed1]">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${index !== quickLinks.length - 1 ? "border-b border-gray-100" : ""
                  }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default CreateTicket;