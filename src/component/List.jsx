import React from 'react'

const List = ({ item, deletList, index }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-1 shadow">
            <h3 className="text-lg font-semibold text-white">{item.fullname}</h3>
            <h3 className="text-gray-300">{item.email}</h3>
            <h3 className="text-gray-400">{item.college}</h3>
            <button
                onClick={() => deletList(index)}
                className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition self-end"
            >
                Delete
            </button>
        </div>
    )
}

export default List