import { useContext } from 'react'
import GeneralContext from '../components/GeneralContext'
import { Tooltip } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

const WatchListActions = ({ uid }) => {

    const { openBuyWindow, setMode } = useContext(GeneralContext);


    const handleBuyClick = (mode) => {
        setMode(mode);
        console.log(mode)
        openBuyWindow(uid);
    };

    return (
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-end">
            <span className="flex items-center">
                <Tooltip title="Buy (B)" placement="top">
                    <button
                        onClick={() => handleBuyClick("Buy")}
                        className="w-10 h-7.5 rounded bg-blue-400 text-white text-sm border border-blue-400 mr-2 cursor-pointer active:scale-95 transition-transform duration-200"
                    >
                        Buy
                    </button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top">
                    <button
                        onClick={() => handleBuyClick("Sell")}
                        className="w-10 h-7.5 rounded bg-red-400 text-white text-sm border border-red-400 mr-2 cursor-pointer active:scale-95 transition-transform duration-200">
                        Sell
                    </button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top" >
                    <button className="w-10 h-7.5 rounded bg-white border border-gray-300 mr-2 cursor-pointer hover:bg-gray-200 active:scale-95 transition-transform duration-200">
                        <BarChartOutlined style={{ transform: "scale(0.7)", color: "rgb(65,65,65)" }} />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top">
                    <button className="w-10 h-7.5 rounded bg-white border border-gray-300 mr-2 cursor-pointer hover:bg-gray-200 active:scale-95 transition-transform duration-200">
                        <MoreHoriz style={{ transform: "scale(0.7)", color: "rgb(65,65,65)" }} />
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}

export default WatchListActions