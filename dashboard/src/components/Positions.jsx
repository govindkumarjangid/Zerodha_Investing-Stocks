import axiosInstance from '../../configs/axios.js';
// import { positions } from '../data/data'
import { useState, useEffect } from 'react';
import ListSkeleton from '../ui/ListSkeleton.jsx';


const Positions = () => {

  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchPositions = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get('/position/get-positions');
      setPositions(data.positions);
      console.log(data)
    } catch (error) {
      toast.error(error?.message || "cannot find positions");
      console.log("Position Error :", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <>
      <h3 className="text-[1.3rem] font-light text-gray-600 mb-5">
        {
          loading ? <div className="animate-pulse h-7 w-30 rounded-md bg-gray-300"></div> : <> Positions ({positions.length})</>
        }
      </h3>

      <div className="w-full">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border border-gray-300">
              {["Product", "Instrument", "Qty.", "Avg.", "LTP", "P&L", "Chg."].map((heading, i) => (
                <th
                  key={i}
                  className={`py-3.75 px-2.5 text-gray-400 font-light text-sm ${i === 0 ? "text-left" : "text-right"
                    } ${i === 0 || i === 3 ? "border-r border-gray-300" : ""}`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {
              loading ? <>
                {Array.from({ length: 2 }).map((_, i) => (
                  <ListSkeleton key={i} />
                ))}
              </> : <>
                {positions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "text-green-500" : "text-red-500";
                  const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

                  return (
                    <tr key={index} className="border border-gray-300">
                      <td className="py-2.5 px-2.5  font-normal text-center text-sm text-red-700 bg-red-200 border-r border-gray-300">
                        {stock.product}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700">{stock.name}</td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700">{stock.qty}</td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700 border-r border-gray-300">
                        {stock.avg.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700">{stock.price.toFixed(2)}</td>
                      <td className={`py-2.5 px-2.5 text-right font-normal text-sm ${profClass}`}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={`py-2.5 px-2.5 text-right font-normal text-sm ${dayClass}`}>{stock.day}</td>
                    </tr>
                  );
                })}
              </>
            }
          </tbody>

        </table>
      </div>
    </>
  )
}

export default Positions;