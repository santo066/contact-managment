import { FaEnvelope, FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Screenshot 2023-12-20 104907 4.png"

export default function ContentManagment() {
    return (
        <div className="md:flex">
            <div className="md:w-72 w-full bg-[#E6E6E6] md:min-h-screen">
                <div className="md:w-[253px] w-full md:m-2  bg-white md:h-[48px]">
                    <img src={logo} className="md:w-[122px] mx-auto md:h-[40px]" alt="" />
                </div>
                <ul className="menu p-3">

                    <li><NavLink to={'/contacts'}><FaEnvelope></FaEnvelope> <span className="text-[#3366CC]  md:text-lg font-bold">Contact Management</span> </NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}