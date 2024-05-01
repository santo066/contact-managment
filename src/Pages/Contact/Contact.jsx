import { FaUser, FaVoicemail } from "react-icons/fa"
import image from "../../assets/contact_svg.svg"
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Contact() {

    const hendelcontact = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const contacts = { name, email, message }
        console.log(contacts)

        axios.post('http://localhost:5000/contact', contacts)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your contact message has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div>
            <div className="bg-[#3366CC] flex justify-between h-[76px]  items-center">
                <h2 className="md:text-4xl font-semibold ml-6 text-white">DEMO LOGO</h2>
                <input type="text" name="search" className="md:h-[43.61px] md:p-3 mr-6 md:w-[457px] rounded" placeholder="Search" id="" />
            </div>
            <div className="md:flex md:flex-row-reverse  items-center">
                <div className="w-1/2 mx-auto">
                    <img src={image} className=" w-full   bg-cover" alt="" />
                </div>
                <div className="w-1/2 mx-auto ml-10">
                    <h1 className="md:text-5xl text-2xl mb-10">Contact Page</h1>

                    <form onSubmit={hendelcontact}>
                        <div className="flex gap-4 mb-7">
                            <FaUser className="absolute opacity-50 mt-[20px] ml-5 "></FaUser>
                            <input type="text" className="h-[60px] pl-10 mr-6 w-[457px] rounded-full bg-slate-300" name="name" placeholder='Name' />
                        </div>
                        <div className="flex gap-4">
                            <MdEmail className="absolute opacity-50 mt-[22px] ml-5 "></MdEmail >
                            <input type="text" className="h-[60px] pl-10 mr-6 md:w-[457px] rounded-full bg-slate-300" name="email" placeholder='Email' />
                        </div>
                        <textarea name="message" placeholder="Message" className="pl-6 mt-7 md:w-[457px] w-[220px] pt-3 md:h-[120px] bg-slate-300 rounded-3xl" id="" cols="30" rows="10"></textarea>
                        <br />
                        <button className="btn md:w-[440px] w-[220px] bg-[#3366CC] rounded-full md:text-xl text-white mt-7 md:h-[70px]">Send Message</button>
                        <p className="text-sm font-bold text-center md:w-[430px] mt-4 text-blue-400"><Link className="mr-4" to={'/login'}>Login</Link><Link to={'/dashboard/contactManagment'}>Dashboard</Link><Link className="ml-4" to={'/logout'}>Logout</Link></p>
                    </form>
                </div>

            </div>
        </div>
    )
}