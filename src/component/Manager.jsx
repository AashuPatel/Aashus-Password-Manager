import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Manager = () => {

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {

        let passwords = localStorage.getItem("passwords");


        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
            console.log(JSON.parse(passwords)[0])
        }

    }, [])

    const handleSubmit = () => {
        console.log(form)
        if(form.site =="" || form.username == "" || form.password == "")  {
            alert('all the fields are required!')   
            return;
        }
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" });


    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })


    }

    // Delete function for removing an item by index
    const handleDelete = (idx) => {
        const updatedArray = passwordArray.filter((_, i) => i !== idx);
        setpasswordArray(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
    };

    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-blue-50"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

            <div className="container mx-auto max-w-4xl">

                <h1 className='text-4xl text font-bold text-center text-blue-400'>Aashus<span className='text-[rgba(173,109,244,0.5)]'>Pass</span> </h1>
                <div className='font-bold pl-2 text-center'>My own secure password manager</div>

                <div className='flex flex-col p-4'  >
                    <input value={form.site} onChange={handleChange} placeholder='Enter your URL' className='rounded-full border border-blue-500 p-4 py-1' type="text" name='site' id='' />
                    <div className="flex gap-4 mt-4 w-full">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-blue-500 p-4 py-1 w-full' type="text" name='username' id='' />

                        <div className="relative w-full">

                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-blue-500 p-4 py-1 w-full' type="text" name='password' id='' />
                            <span className="absolute right-0 mr-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#121331,secondary:#4030e8">
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="flex w-fit justify-center items-center  border border-blue-500 rounded-3xl px-3 py-1 bg-blue-200 mx-auto my-3 gap-3">
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#121331,secondary:#4030e8">
                        </lord-icon>
                        Add Pass
                    </button>

                    <div className="records">
                        <div className=" bg-slate-400" style={{ height: "1px" }}></div>
                    </div>



                    
                    <div className="mt-8  max-w-4xl">
                        <h2 className="text-2xl font-bold text-center mb-4">Stored Passwords</h2>
                        <table className="min-w-full border border-gray-200 max-w-4xl">
                            <thead className='bg-blue-300'>
                                <tr>
                                    <th className="border px-4 py-2" style={{ wordBreak: "break-word" }}>S.no</th>
                                    <th className="border px-4 py-2" style={{ wordBreak: "break-word" }}>Site</th>
                                    <th className="border px-4 py-2" style={{ wordBreak: "break-word" }}>Username</th>
                                    <th className="border px-4 py-2" style={{ wordBreak: "break-word" }} colSpan="3">Password</th>

                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.length > 0 ? (
                                    passwordArray.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2 " style={{ wordBreak: "break-word" }}>{index + 1}</td>
                                            <td className="border px-4 py-2 " style={{ wordBreak: "break-word" }}><span>{item.site}</span></td>
                                            <td className="border px-4 py-2" style={{ wordBreak: "break-word" }}>{item.username}</td>
                                            <td className="border px-4 py-2 relative" style={{ wordBreak: "break-word" }}>{item.password}</td>
                                            <td className="border px-4 py-2 relative" style={{ wordBreak: "break-word" }}>
                                                <span > <button onClick={() => { handleDelete(index) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:#4030e8"
                                                        style={{ width: "20px", height: "20px" }}>

                                                    </lord-icon>
                                                </button></span>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="border px-4 py-2 text-center">No passwords saved.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Manager
