import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-center text-white flex flex-col justify-center items-center'>
            <div className="logo font-bold text-2xl">
                <span className="text-green-700">
                    &lt;
                </span>
                <span className="">
                    Pass
                </span>
                <span className="text-green-700">
                    OP/&gt;
                </span>
            </div>
            <div className='flex flex-row justify-center items-center gap-1'>
                <span>Created with </span>
                <img width="25px" src="images/heart.svg" alt="" />
                <span>by AlberTesla</span>
            </div>
        </div>
    )
}

export default Footer
