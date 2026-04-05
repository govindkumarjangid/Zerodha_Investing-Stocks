import { useState, useEffect } from "react";
import  VerticalGraph  from "./VerticalGraph";
import {holdings} from '../data/data';

const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
      setAllHoldings(holdings);
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="text-[1.3rem] font-light text-gray-600 mb-5">
        Holdings ({allHoldings.length})
      </h3>

      <div className="w-full">
        <table className="w-full border border-collapse rounded-md">
          <thead>
            <tr className="border border-gray-300 ">
              {["Instrument", "Qty.", "Avg. cost", "LTP", "Cur. val", "P&L", "Net chg.", "Day chg."].map(
                (heading, i) => (
                  <th
                    key={i}
                    className={`py-3.75 px-2.5 text-gray-400 font-light text-sm
                      ${i === 0 ? "text-left" : "text-right"}
                      ${i === 0 || i === 3 ? "border border-gray-300" : ""}`}
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-400" : "text-red-400";
              const dayClass = stock.isLoss ? "text-red-400" : "text-green-400";

              return (
                <tr key={index} className="border-t border-b border-gray-300">
                  <td className="py-2.5 px-2.5 text-left text-sm text-gray-600 border-l border-r border-gray-300">
                    {stock.name}
                  </td>
                  <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-600">{stock.qty}</td>
                  <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-600">{stock.avg.toFixed(2)}</td>
                  <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-600 border-r border-gray-300">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-600">{curValue.toFixed(2)}</td>
                  <td className={`py-2.5 px-2.5 text-right font-normal text-sm ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`py-2.5 px-2.5 text-right font-normal text-sm ${profClass}`}>{stock.net}</td>
                  <td className={`py-2.5 px-2.5 text-right font-normal text-[0.6rem] border-r border-gray-300 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="flex items-center justify-center mt-15">

        <div className="flex-[0_0_33%]">
          <h5 className="text-2xl text-gray-600">
            29,875.<span className="font-light text-sm">55</span>
          </h5>
          <p className="text-sm text-gray-400 font-light mt-3">Total investment</p>
        </div>

        <div className="flex-[0_0_33%]">
          <h5 className="text-2xl text-gray-600">
            31,428.<span className="font-light text-sm">95</span>
          </h5>
          <p className="text-sm text-gray-400 font-light mt-3">Current value</p>
        </div>

        <div className="flex-[0_0_33%]">
          <h5 className="text-2xl text-gray-600">1,553.40 (+5.20%)</h5>
          <p className="text-sm text-gray-400 font-light mt-3">P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  )
}

export default Holdings;