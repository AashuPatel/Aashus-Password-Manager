import React from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const consoleref = ()=>{
        alert(ref1.current.src)
    }
    const consoleref2 = ()=>{
        alert(ref2.current.src)
    }

    return (
        <>
            <div class="absolute top-0 -z-10 h-full w-full bg-blue-50"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

            <div className="container mx-auto max-w-4xl ">

                <h1 className='text-4xl text font-bold text-center text-blue-400'>Aashus<span className='text-[rgba(173,109,244,0.5)]'>Pass</span> </h1>
                <div className='font-bold pl-2 text-center'>Your own secure password manager</div>

                <div className='text-blue flex flex-col p-4'  >
                    <input placeholder='Enter your URL' className='rounded-full border border-blue-500 p-4 py-1' type="text" name='' id='' />
                    <div className="flex gap-4 mt-4 w-full">
                        <input placeholder='Enter Username' className='rounded-full border border-blue-500 p-4 py-1 w-full' type="text" name='' id='' />

                        <div className="relative w-full">

                            <input placeholder='Enter Password' className='rounded-full border border-blue-500 p-4 py-1 w-full' type="text" name='' id='' />
                            <span onClick={consoleref2} className="absolute right-0 mr-2">
                                <lord-icon ref = {ref2}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#121331,secondary:#4030e8">
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                    <button onClick={consoleref} className="flex w-fit justify-center items-center  border border-blue-500 rounded-3xl px-3 py-1 bg-blue-200 mx-auto my-3 gap-3">
                        <lord-icon ref = {ref1}
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                        ></lord-icon>
                        Add Pass
                    </button>

                </div>
            </div>


        </>
    )
}

export default Manager
