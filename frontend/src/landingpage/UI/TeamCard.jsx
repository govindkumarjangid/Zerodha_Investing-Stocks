import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const TeamCard = ({ member }) => {
    const [showBio, setShowBio] = useState(false);

    return (
        <div className="flex flex-col items-center">
            {/* Profile Image */}
            <img
                src={member.image}
                alt={member.name}
                className="w-52 h-52 sm:w-56 sm:h-56 rounded-full object-cover grayscale mb-5 shadow-sm"
            />

            {/* Name and Role */}
            <h3 className="text-[19px] font-medium text-gray-800">{member.name}</h3>
            <p className="text-[15px] text-gray-500 mb-2">{member.role}</p>

            {/* Bio Toggle Button */}
            <button
                onClick={() => setShowBio(!showBio)}
                className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors duration-200"
            >
                Bio{" "}
                <FiChevronDown
                    className={`ml-1 mt-0.5 transition-transform duration-300 ${showBio ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            {/* Bio Section */}
            {showBio && (
                <div className="mt-4 text-[14px] text-gray-600 leading-relaxed text-center px-2 animate-fadeIn max-w-60">
                    {member.bio}
                </div>
            )}
        </div>
    );
};

export default TeamCard;