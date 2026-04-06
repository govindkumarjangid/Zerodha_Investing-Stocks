
const SkeletonOrdersRow = () => {
    return (
        <tr className="animate-pulse border border-gray-300">
            {/* Name */}
            <td className="py-2.5 px-2.5 flex items-center justify-center border-r border-gray-300">
                <div className="h-5 w-32 bg-gray-200 rounded" />
            </td>

            {/* Quantity */}
            <td className="py-2.5 px-2.5 text-right border-r border-gray-300">
                <div className="h-5 w-12 ml-auto bg-gray-200 rounded" />
            </td>

            {/* Price */}
            <td className="py-2.5 px-2.5 text-right border-r border-gray-300">
                <div className="h-5 w-20 ml-auto bg-gray-200 rounded" />
            </td>

            {/* Mode */}
            <td className="py-2.5 px-2.5 text-right">
                <div className="h-5 w-16 ml-auto bg-gray-200 rounded" />
            </td>
        </tr>
    )
}

export default SkeletonOrdersRow;