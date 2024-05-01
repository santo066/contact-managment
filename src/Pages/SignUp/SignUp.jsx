import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Screenshot 2023-12-20 104907 4.png"
import "../Login/login.css"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"


export default function SignUp() {
    const { createUser, updateuserprofile } = useContext(AuthContext)
    const navigate = useNavigate()
    const hendelSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log(user)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                updateuserprofile(name)
                    .then(() => {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "SignUp Success Fully ",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/contacts')
                    })
                    .catch(error => { console.log(error) })
            })

    }
    return (
        <div className="grad md:flex md:flex-col place-content-center items-center mt-40 max-w-[320px] md:max-w-[703px] h-[397px] mx-auto shadow-lg bg-base-100">
            <div className="">
                <img src={logo} className="mx-auto w-[116px] h-[38px] mt-[30px]" alt="" />
            </div>
            <div className="card ">
                <form onSubmit={hendelSignup} className="card-body ">
                    <div className="mx-auto">
                        <input type="text" name="name" placeholder="Full  Name" className=" md:w-[351px] pl-3 mb-[22px] shadoww md:h-[46px] rounded-xl border" required />
                    </div>
                    <div className="mx-auto">
                        <input type="email" name="email" placeholder="Email address" className=" md:w-[351px] pl-3 mb-[22px] shadoww md:h-[46px] rounded-xl border" required />
                    </div>
                    <div className="mx-auto">

                        <input type="password" name="password" placeholder="Password" className=" md:w-[351px] pl-3 shadoww mb-[22px] md:h-[46px] rounded-xl border" required />

                    </div>

                    <div className="mx-auto ">
                        <input type="submit" className="btn rounded hover:bg-[#3366cc78] text-white bg-[#3366CC] md:w-[351px] md:h-[36px]" value="Signup" />
                    </div>
                    <p className="text-sm font-bold text-center text-blue-400"><Link to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}