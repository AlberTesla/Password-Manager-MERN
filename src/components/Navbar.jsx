import React from "react";

function Navbar(){
    return (
        <>
            <nav className="bg-slate-800 text-white">
                <div className="mycontainer flex overflow-hidden justify-between px-4 py-3 items-center">
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
                    <ul>
                        <li className="md:flex hidden gap-4">
                            <a className="hover:font-bold" href="/">Home</a>
                            <a className="hover:font-bold" href="/">About</a>
                            <a className="hover:font-bold" href="/">Contact</a>
                        </li>
                    </ul>
                    <button className="flex flex-row md:overflow-hidden justify-center items-center bg-green-600 rounded-full pr-3 hover:bg-green-900">
                        <img className="invert-[1]" width="60px" src="/images/github.svg" alt=""/>
                        <span className="font-bold text-xl">GitHub</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
