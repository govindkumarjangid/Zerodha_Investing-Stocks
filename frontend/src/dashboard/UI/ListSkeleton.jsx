
const ListSkeleton = () => {
  return (
    <tr className="animate-pulse border border-gray-300">
      {/* Product */}
      <td className="border-r border-gray-300 w-34">
        <div className="h-11 w-full bg-gray-200" />
      </td>
      {/* Instrument */}
      <td className="py-2.5 px-2.5">
        <div className="h-5 w-24 bg-gray-200 rounded float-right" />
      </td>
      {/* Qty */}
      <td className="py-2.5 px-2.5">
        <div className="h-5 w-8 bg-gray-200 rounded float-right" />
      </td>
      {/* Avg */}
      <td className="py-2.5 px-2.5 border-r border-gray-300">
        <div className="h-5 w-16 bg-gray-200 rounded float-right" />
      </td>
      {/* LTP */}
      <td className="py-2.5 px-2.5">
        <div className="h-5 w-16 bg-gray-200 rounded float-right" />
      </td>
      {/* P&L */}
      <td className="py-2.5 px-2.5">
        <div className="h-5 w-14 bg-gray-200 rounded float-right" />
      </td>
      {/* Chg */}
      <td className="py-2.5 px-2.5">
        <div className="h-5 w-12 bg-gray-200 rounded float-right" />
      </td>
    </tr>
  );
};


export default ListSkeleton;