import React, { useState } from 'react'

const Brokerage = () => {

  const [activeTab, setActiveTab] = useState("Equity");
  const tabs = ["Equity", "Currency", "Commodity"];

  const equityData = [
    {
      charge: "Brokerage",
      delivery: "Zero Brokerage",
      intraday: "0.03% or Rs. 20/executed order whichever is lower",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "Flat Rs. 20 per executed order",
    },
    {
      charge: "STT/CTT",
      delivery: "0.1% on buy & sell",
      intraday: "0.025% on the sell side",
      futures: "0.05% on the sell side",
      options: (
        <ul className="list-disc pl-5 space-y-1">
          <li>0.15% of the intrinsic value on options that are bought and exercised</li>
          <li>0.15% on sell side (on premium)</li>
        </ul>
      ),
    },
    {
      charge: "Transaction charges",
      delivery: (
        <>
          NSE: 0.00307% <br /> BSE: 0.00375%
        </>
      ),
      intraday: (
        <>
          NSE: 0.00307% <br /> BSE: 0.00375%
        </>
      ),
      futures: (
        <>
          NSE: 0.00183% <br /> BSE: 0
        </>
      ),
      options: (
        <>
          NSE: 0.03553% (on premium) <br /> BSE: 0.0325% (on premium)
        </>
      ),
    },
    {
      charge: "GST",
      delivery: "18% on (brokerage + SEBI charges + transaction charges)",
      intraday: "18% on (brokerage + SEBI charges + transaction charges)",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      delivery: "₹10 / crore",
      intraday: "₹10 / crore",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      delivery: "0.015% or ₹1500 / crore on buy side",
      intraday: "0.003% or ₹300 / crore on buy side",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];
  const currencyData = [
    {
      charge: "Brokerage",
      futures: "0.03% or ₹ 20/executed order whichever is lower",
      options: "₹ 20/executed order",
    },
    {
      charge: "STT/CTT",
      futures: "No STT",
      options: "No STT",
    },
    {
      charge: "Transaction charges",
      futures: (
        <>
          NSE: 0.00035% <br /> BSE: 0.00045%
        </>
      ),
      options: (
        <>
          NSE: 0.0311% <br /> BSE: 0.001%
        </>
      ),
    },
    {
      charge: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      futures: "₹10 / crore",
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      futures: "0.0001% or ₹10 / crore on buy side",
      options: "0.0001% or ₹10 / crore on buy side",
    },
  ];
  const commodityData = [
    {
      charge: "Brokerage",
      futures: "0.03% or Rs. 20/executed order whichever is lower",
      options: "₹ 20/executed order",
    },
    {
      charge: "STT/CTT",
      futures: "0.01% on sell side (Non-Agri)",
      options: "0.05% on sell side",
    },
    {
      charge: "Transaction charges",
      futures: (
        <>
          MCX: 0.0021% <br /> NSE: 0.0001%
        </>
      ),
      options: (
        <>
          MCX: 0.0418% <br /> NSE: 0.001%
        </>
      ),
    },
    {
      charge: "GST",
      futures: "18% on (brokerage + SEBI charges + transaction charges)",
      options: "18% on (brokerage + SEBI charges + transaction charges)",
    },
    {
      charge: "SEBI charges",
      futures: (
        <>
          Agri: <br /> ₹1 / crore <br /> Non-agri: <br /> ₹10 / crore
        </>
      ),
      options: "₹10 / crore",
    },
    {
      charge: "Stamp charges",
      futures: "0.002% or ₹200 / crore on buy side",
      options: "0.003% or ₹300 / crore on buy side",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">

      {/* --- Tabs Header --- */}
      <div className="flex gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-xl font-medium transition-colors duration-200 cursor-pointer ${activeTab === tab
              ? "text-gray-800 border-b-2 border-[#387ed1]"
              : "text-[#387ed1] hover:text-gray-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Tab Content Area --- */}
      <div className="mt-8">
        {/* Equity Table Section */}
        {activeTab === "Equity" && (
          <div className="animate-fadeIn">
            {/* Table wrapper for mobile scrolling */}
            <div className="overflow-x-auto border border-gray-200 rounded-sm">
              <table className="w-full text-left min-w-255">
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-gray-200 bg-white">
                    <th className="p-4 font-medium text-gray-500 w-1/5"></th>
                    <th className="p-4 font-medium text-gray-600 w-1/5">Equity delivery</th>
                    <th className="p-4 font-medium text-gray-600 w-1/5">Equity intraday</th>
                    <th className="p-4 font-medium text-gray-600 w-1/5">F&O - Futures</th>
                    <th className="p-4 font-medium text-gray-600 w-1/5">F&O - Options</th>
                  </tr>
                </thead>

                {/* Table Body mapped from array */}
                <tbody>
                  {equityData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-5 text-gray-500 font-medium align-top">
                        {row.charge}
                      </td>
                      <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">
                        {row.delivery}
                      </td>
                      <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">
                        {row.intraday}
                      </td>
                      <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">
                        {row.futures}
                      </td>
                      <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">
                        {row.options}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* currency table section  */}
        {
          activeTab === "Currency" && (
            <div className="animate-fadeIn">
              <div className="overflow-x-auto border border-gray-200 rounded-sm">
                <table className="w-full text-left min-w-175">
                  <thead>
                    <tr className="border-b border-gray-200 bg-white">
                      <th className="p-4 font-medium text-gray-500 w-1/3"></th>
                      <th className="p-4 font-medium text-gray-600 w-1/3">Currency futures</th>
                      <th className="p-4 font-medium text-gray-600 w-1/3">Currency options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencyData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-gray-500 font-medium align-top">{row.charge}</td>
                        <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">{row.futures}</td>
                        <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">{row.options}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}


        {/* Commodity table section  */}
        {
          activeTab === "Commodity" && (
            <div className="animate-fadeIn">
              <div className="overflow-x-auto border border-gray-200 rounded-sm">
                <table className="w-full text-left min-w-175">
                  <thead>
                    <tr className="border-b border-gray-200 bg-white">
                      <th className="p-4 font-medium text-gray-500 w-1/3"></th>
                      <th className="p-4 font-medium text-gray-600 w-1/3">Commodity futures</th>
                      <th className="p-4 font-medium text-gray-600 w-1/3">Commodity options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commodityData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-gray-500 font-medium align-top">{row.charge}</td>
                        <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">{row.futures}</td>
                        <td className="p-5 text-[14px] text-gray-600 align-top leading-relaxed">{row.options}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}



      </div>

      {/* --- Bottom Text/Link --- */}
      <div className="text-center mt-10">
        <p className="text-[17px] text-gray-800">
          <a
            href="#"
            className="text-[#387ed1] hover:text-gray-800 transition-colors font-medium"
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
      </div>

    </div>
  )
}

export default Brokerage