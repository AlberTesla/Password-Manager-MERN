import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    });

    const [array, setArray] = useState([]);

    const ref = useRef()
    const ref1 = useRef();

    useEffect(function () {
        let storage = JSON.parse(localStorage.getItem("data"));
        if (storage) {
            setArray(storage);
        }
    }, []);

    function showHidePassword() {
        if (ref.current.src.includes("/images/show.svg")) {
            ref.current.src = "/images/hide.svg";
            ref1.current.type = "password"
        }
        else {
            ref.current.src = "/images/show.svg";
            ref1.current.type = "text"
        }
    }

    function handleChange(e) {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    function addData() {
        if (form.site === "" || form.username === "" || form.password === "") {
            console.log("one of the input fields is empty");
            return
        }
        setArray([...array, {...form, id : uuidv4()}]);
        localStorage.setItem("data", JSON.stringify([...array, {...form, id : uuidv4()}]));
        setform({site : "", username : "", password : ""})
    }

    function copyText(textData) {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        navigator.clipboard.writeText(textData);
    }

    function editData(data){
        setArray(array.filter(function(element){return (element.id !== data)}));
        localStorage.setItem("data", JSON.stringify(array.filter(function(element){return (element.id !== data)})));
        const item = array.filter(function(element){return (element.id === data)})[0];
        setform(item);
    }

    function deleteData(data){
        let conf = confirm("are you sure you want to delete the info")
        if (!conf) return
        setArray(array.filter(function(element){return (element.id !== data)}));
        localStorage.setItem("data", JSON.stringify(array.filter(function(element){return (element.id !== data)})));
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
                </div>
            </div>
            <div className="mycontainer">
                <h1 className='text-4xl font-bold flex justify-center'>
                    <span className="text-green-700">
                        &lt;
                    </span>
                    <span className="">
                        Pass
                    </span>
                    <span className="text-green-700">
                        OP/&gt;
                    </span>
                </h1>
                <p className="text-green-900 text-center text-lg">Your own password manager</p>
                <div className="text-white flex gap-8 flex-col items-center p-4">
                    <input value={form.site} onChange={handleChange} name="site" placeholder="Enter Website URL" className="rounded-full w-full border p-4 py-1 text-black border-green-500" type="text" />
                    <div className="flex gap-8 w-full">
                        <input value={form.username} onChange={handleChange} name="username" placeholder="Enter Username" className="rounded-full border p-4 py-1 w-full border-green-500 text-black" type="text" />
                        <div className="relative">
                            <input ref={ref1} value={form.password} onChange={handleChange} name="password" placeholder="Enter Password" className="rounded-full border p-4 py-1 w-full border-green-500 text-black" type="text" />
                            <img onClick={showHidePassword} ref={ref} className="absolute top-2 right-1" src="/images/show.svg" alt="" />
                        </div>
                    </div>
                    <div className='border border-green-900 hover:bg-green-700 flex flex-row justify-center items-center gap-3 bg-green-500 p-4 rounded-full w-fit'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <button onClick={addData}>Add Password</button>
                    </div>
                </div>

                <div className='tabulardata'>
                    <h2 className='font-bold text-3xl py-4'>Your Passwords</h2>
                    {array.length === 0 && <div>No data to show</div>}
                    {array.length != 0 &&
                        <table className="table-auto w-full rounded-xl overflow-hidden">
                            <thead className="bg-green-500 text-white">
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {array.map(function (element, index) {
                                    return <tr key={index}>
                                        <td className="text-center w-32 py-2 border border-white">
                                            <div className="cursor-pointer flex flex-row justify-center items-center gap-1">
                                                <a href={element.site} target="_blank">
                                                    {element.site}
                                                </a>
                                                <img onClick={function () { copyText(element.site) }} width="20px" className="hover:invert-[.5]" src="/images/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className="text-center w-32 py-2 border border-white">
                                            <div className="flex flex-row justify-center items-center gap-1">
                                                <span>
                                                    {element.username}
                                                </span>
                                                <img onClick={function () { copyText(element.username) }} width="20px" className="cursor-pointer hover:invert-[.5]" src="/images/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className="text-center w-32 py-2 border border-white">
                                            <div className="flex flex-row justify-center items-center gap-1">
                                                <span>
                                                    {element.password}
                                                </span>
                                                <img onClick={function () { copyText(element.password) }} width="20px" className="cursor-pointer hover:invert-[.5]" src="/images/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className="text-center w-32 py-2 border border-white">
                                            <div className="flex flex-row justify-center items-center gap-2">
                                                <img onClick={function(){editData(element.id)}} width="20px" className="cursor-pointer hover:invert-[.5]" src="/images/edit.svg" alt="" />
                                                <img onClick={function(){deleteData(element.id)}} width="20px" className="cursor-pointer hover:invert-[.5]" src="/images/delete.svg" alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager
