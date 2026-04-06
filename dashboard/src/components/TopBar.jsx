import Menu from './Menu';

const Topbar = () => {
  return (
      <div className="flex items-center w-full h-[10vh] shadow-md box-border z-9">

        <div className="w-104 h-full py-2.5 border-r border-gray-300 flex items-center justify-start">

          <div className="flex-[0_0_40%] flex items-center justify-evenly font-semibold">
            <p className="text-xs uppercase text-gray-400 whitespace-nowrap mr-2">
              NIFTY 50
            </p>
            <p className="text-xs  text-red-400  mr-2">
              00.0
            </p>
            <p className="text-xs text-gray-400">0</p>
          </div>

          <div className="flex-[0_0_40%] flex items-center justify-evenly font-semibold">
            <p className="text-xs uppercase text-gray-400 whitespace-nowrap mr-2">
              SENSEX
            </p>
            <p className="text-xs text-red-400 mr-2">
              00.0
            </p>
            <p className="text-xs text-gray-400">0</p>
          </div>


        </div>

      <Menu />

    </div>

  )
}

export default Topbar;