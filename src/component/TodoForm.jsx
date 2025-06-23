import React, { useState } from 'react'

const TodoForm = ({ Addlist }) => {
    const [formdata, setFormdat] = useState({
        fullname: '',
        email: '',
        college: '',
    })

    const Handlechanges = (e) => {
        const { name, value } = e.target
        setFormdat((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        Addlist(formdata)

        setFormdat({
            fullname: '',
            email: '',
            college: ''
        })
    }
    return (
        <div>
            <form onSubmit={HandleSubmit} className="space-y-4">
                <input
                    onChange={Handlechanges}
                    required
                    value={formdata.fullname}
                    type="text"
                    name="fullname"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    onChange={Handlechanges}
                    required
                    value={formdata.email}
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    onChange={Handlechanges}
                    required
                    value={formdata.college}
                    type="text"
                    name="college"
                    placeholder="Enter your College name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default TodoForm