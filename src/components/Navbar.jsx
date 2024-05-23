import React from "react";

function Navbar(){
    return (
        <>
            <nav className="bg-slate-800 text-white h-14">
                <div className="mycontainer flex justify-between px-4 py-5 items-center">
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
                        <li className="flex gap-4">
                            <a className="hover:font-bold" href="/">Home</a>
                            <a className="hover:font-bold" href="/">About</a>
                            <a className="hover:font-bold" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
