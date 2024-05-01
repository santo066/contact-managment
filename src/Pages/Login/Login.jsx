import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/Screenshot 2023-12-20 104907 4.png"
import "./login.css"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"

export default function Login() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const fromm = location.state?.from?.pathname || "/contacts";


    const hendelLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    title: "User Login SuccessFull",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(fromm, { replace: true });
            })

    }
    return (
        <div className="grad md:flex md:flex-col place-content-center items-center mt-40 max-w-[320px] md:max-w-[703px] h-[397px] mx-auto shadow-lg bg-base-100">
            <div className="">
                <img src={logo} className="mx-auto w-[116px] h-[38px]" alt="" />
            </div>
            <div className="card ">
                <form onSubmit={hendelLogin} className="card-body ">
                    <div className="mx-auto">
                        <input type="email" name="email" placeholder="Email address" className=" md:w-[351px] pl-3 mb-[22px] shadoww md:h-[46px] rounded-xl border" required />
                    </div>
                    <div className="mx-auto">

                        <input type="password" name="password" placeholder="Password" className=" md:w-[351px] pl-3 shadoww mb-[22px] md:h-[46px] rounded-xl border" required />

                    </div>

                    <div className="mx-auto ">
                        <input type="submit" className="btn rounded hover:bg-[#3366cc78] text-white bg-[#3366CC] md:w-[351px] md:h-[36px]" value="Login" />
                    </div>
                    <p className="text-sm font-bold text-center text-blue-400"><Link to={'/'}>SignUp</Link></p>
                </form>

            </div>
        </div>
    )
}