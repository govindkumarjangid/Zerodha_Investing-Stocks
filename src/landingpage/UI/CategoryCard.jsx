import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, icon: Icon, links }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-sm mb-6 bg-white shadow-sm">
            <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <Icon className="text-gray-700 text-xl" />
                    <h2 className="text-[17px] font-medium text-gray-800">{title}</h2>
                </div>
                {isOpen ? <FiChevronUp className="text-gray-500 text-lg" /> : <FiChevronDown className="text-gray-500 text-lg" />}
            </div>

            {isOpen && (
                <div className="p-4 pt-2 border-t border-gray-100">
                    <ul className="list-disc pl-8 space-y-3 marker:text-gray-400">
                        {links.map((link, index) => (
                            <li key={index} className="pl-2">
                                <Link href="#" className="text-[14px] text-primary hover:text-gray-800 hover:underline transition-colors">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CategoryCard;