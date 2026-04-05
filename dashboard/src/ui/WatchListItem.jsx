import { useState } from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import WatchListActions from './WatchListActions';

const WatchListItem = ({stock }) => {

    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    return (
        <li
            className="border-b border-gray-300 px-3 py-3 pl-3.5 relative hover:cursor-move hover:bg-gray-100 group"
            onMouseEnter={() => setShowWatchlistActions(true)}
            onMouseLeave={() => setShowWatchlistActions(false)}
        >
            <div className="flex items-center justify-between font-light text-sm relative">
                <p className={stock.isDown ? "text-red-400" : "text-green-400"}>
                    {stock.name}
                </p>
                <div className="flex justify-evenly items-center">
                    <span className="text-gray-400 mr-2">{stock.percent}</span>
                    {stock.isDown ? (
                        <FiArrowDown className="text-red-400 mr-2" />
                    ) : (
                        <FiArrowUp className="text-green-400 mr-2" />
                    )}
                    <span className={stock.isDown ? "text-red-400" : "text-green-400"} >{stock.price}</span>
                </div>
            </div>

            {showWatchlistActions && <WatchListActions uid={stock.name} />}
            
        </li>
    )
}

export default WatchListItem