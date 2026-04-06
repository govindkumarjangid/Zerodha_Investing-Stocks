import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CategoryCard = ({ title, icon: Icon, links }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-sm mb-6 bg-white shadow-sm">
            <div
                className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${isOpen ? 'bg-blue-50/50' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <Icon className={`text-xl ${isOpen ? 'text-primary' : 'text-gray-700'} transition-colors duration-300`} />
                    <h2 className={`text-[17px] font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-800'}`}>{title}</h2>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FiChevronDown className={`text-lg ${isOpen ? 'text-primary' : 'text-gray-500'}`} />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-2 border-t border-gray-100">
                            <ul className="list-disc pl-8 space-y-3 marker:text-gray-400">
                                {links.map((link, index) => (
                                    <li key={index} className="pl-2">
                                        <Link to="#" className="text-[14px] text-primary hover:text-gray-800 hover:underline transition-colors block transform hover:translate-x-1 duration-200">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CategoryCard;