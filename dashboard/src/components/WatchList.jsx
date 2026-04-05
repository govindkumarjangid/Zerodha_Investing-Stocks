import { watchlist } from "../data/data";
import  DoughnoutChart  from "./DoughnoutChart";
import WatchListItem from "../ui/WatchListItem";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
     <div className="h-full shadow-md overflow-y-auto relative">

      {/* Search Bar */}
      <div className="flex items-center relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full pl-3 pr-15 py-3 text-md text-gray-400 border-b border-gray-300 transition-all duration-300 focus:outline-none mt-4 focus:border-b-2 focus:border-red-400"
        />
        <span className="absolute right-5 text-sm font-normal text-gray-400 mt-4">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Stock List */}
      <ul className="list-none pb-15">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnoutChart data={data} />

    </div>
  )
}

export default WatchList