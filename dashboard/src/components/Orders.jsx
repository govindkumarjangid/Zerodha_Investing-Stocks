import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from 'react-router-dom'
import axiosInstance from "../../configs/axiosInstance.js";
import { useState,useEffect } from "react";
import toast from "react-hot-toast";
import SkeletonOrdersRow from "../ui/SkeletonOrdersRow";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get('/order/get-orders');
      setOrders(data.orders);

    } catch (error) {
      toast.error(error?.message || "cannot find orders");
      console.log("Order Error :", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full h-[90vh]">

      <h3 className="text-[1.3rem] font-light text-gray-600 mb-5">
        {
          loading ? <div className="animate-pulse h-7 w-30 rounded-md bg-gray-300"></div> : <> Orders ({orders?.length || 0})</>
        }
      </h3>

      <div className="w-full">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border border-gray-300">
              {["Name", "Quantity", "Price", "Mode"].map((heading, i) => (
                <th
                  key={i}
                  className={`py-3.75 px-2.5 text-gray-400 font-light text-sm ${i === 0 ? "text-left" : "text-right"
                    } ${i === 0 || i === 1 || i === 2 ? "border-r border-gray-300" : ""}`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>


          <tbody>
            {
              loading ? <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonOrdersRow key={i} />
                ))}
              </> : <>
                {orders.map((order, index) => {
                  return (
                    <tr key={index} className="border border-gray-300">
                      <td className="py-2.5 px-2.5  font-normal text-center text-sm border-r border-gray-300">
                        {order.name}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700 border-r border-gray-300">{order.qty}</td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700 border-r border-gray-300">{order.price.toFixed(2)}</td>
                      <td className="py-2.5 px-2.5 text-right font-normal text-sm text-gray-700 border-r border-gray-300">
                        {order.mode}
                      </td>
                    </tr>
                  );
                })}
              </>
            }
          </tbody>

        </table>
      </div>


      {
        !orders && <div className="flex flex-col items-center justify-center">
          <MdOutlineMenuBook className="text-gray-400 text-8xl mt-5" />
          <p className="mt-5 text-gray-400 text-base font-light">
            You haven't placed any orders today
          </p>
          <Link
            to={"#"}
            className="no-underline bg-blue-400 px-5 py-2.5 rounded-sm text-white mt-5 hover:bg-blue-500 transition-all duration-300 active:scale-95"
          >
            Get started
          </Link>
        </div>

      }

    </div>
  )
}

export default Orders