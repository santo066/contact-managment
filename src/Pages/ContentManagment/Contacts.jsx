import { FaList, FaTrash } from "react-icons/fa";
import search from "../../assets/Google Web Search.png"
import { MdOutgoingMail } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";


export default function Contacts() {
    const loadedcontacts = useLoaderData()
    const [contacts, setcontact] = useState(loadedcontacts)
    console.log(contacts)
    const hendeldelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/contact/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const reamainingcontacts = contacts.filter(contact => contact._id !== id)
                            setcontact(reamainingcontacts)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle">
                            <FaList ></FaList>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/contacts'}><a>Contact</a></Link></li>
                            <li><Link to={'/login'}><a>Login</a></Link></li>
                            <li><Link to={'/'}><a>SignUp</a></Link></li>
                            <li><Link to={'/logout'}><a>Logout</a></Link></li>

                        </ul>
                    </div>
                    <Link to={'/contacts'}><a className="text-[#3366CC]  md:text-3xl font-bold">Contact Management</a></Link>

                </div>

                <div className="navbar-end">
                    <input type="text" className="pl-2 border border-sky-500 rounded md:w-[428px] w-auto relative h-auto md:h-[49px]" placeholder="Search" />
                    <img className="md:w-10 w-5 absolute" src={search} alt="" />
                </div>
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#3366CC] text-white">Name</th>
                            <th className="bg-[#3366CC] text-white">Phone Number</th>
                            <th className="bg-[#3366CC] text-white">Email Address</th>
                            <th className="bg-[#3366CC] text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contacts.map(contact => <tr key={contact._id}>
                                <th>{contact.name}</th>
                                <td>{contact.message}</td>
                                <td>{contact.email}</td>
                                <td className="flex gap-3">
                                    <div className="w-10 h-10 border-slate-950 rounded-full place-content-center grid justify-items-center items-center  border">
                                        <Link to={'/contacts'}><button className="text-green-500 text-2xl"><MdOutgoingMail></MdOutgoingMail></button></Link>
                                    </div>
                                    <div className="w-10 h-10 border-slate-950 rounded-full place-content-center grid justify-items-center items-center  border">
                                        <button onClick={() => hendeldelete(contact._id)} className="text-red-600"> <FaTrash></FaTrash></button>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}