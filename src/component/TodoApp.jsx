import React, { useState } from 'react'
import TodoForm from './TodoForm'
import List from './List';

const TodoApp = () => {
    const [Listdata, setlistdata] = useState([])
    console.log(Listdata);

    const Addlist = (text) => {
        setlistdata([...Listdata, text])
    }

    const deletList = (key) => {
        const newList = [...Listdata]
        newList.splice(key, 1)
        setlistdata(newList)
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">Todo App</h1>

                <TodoForm Addlist={Addlist} />

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Your Tasks</h2>
                <div className="space-y-3">
                    {Listdata.length === 0 ? (
                        <p className="text-gray-300 text-center">No tasks yet. Add one!</p>
                    ) : (
                        Listdata.map((item, idx) => (
                            <List item={item} key={idx} index={idx} deletList={deletList} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default TodoApp