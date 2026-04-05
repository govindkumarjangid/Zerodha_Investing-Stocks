import React from 'react'

const SkeletonRow = () => {
    return (
        <tr className="animate-pulse border border-gray-300">
            {Array.from({ length: 8 }).map((_, i) => (
                <td key={i} className="py-2.5 px-2.5 border-r border-gray-300">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                </td>
            ))}
        </tr>
    )
}

export default SkeletonRow;