import { Link } from "react-router-dom"
import logo from "../../assets/Screenshot 2023-12-20 104907 4.png"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

export default function LogOut() {
    const { user, logOut } = useContext(AuthContext)
    const hendelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    return (
        <div className="border-2 rounded-2xl border-[#3399ff49]  md:flex md:flex-col place-content-center items-center mt-40 max-w-[320px] md:max-w-[530px] h-[405px] mx-auto  bg-base-100">
            <div className="">
                <img src={logo} className="mx-auto w-[218px] h-[72px]" alt="" />
            </div>
            <div className="card ">

                <p className="text-center my-9">The password has been send to your registered email <br /> address. Kindly check your email inbox and spam <br /> folder.</p>

                <div className="mx-auto ">
                    {
                        user ?
                            <button onClick={hendelLogout} className="btn rounded text-2xl hover:bg-[#3366cc78] text-white bg-[#3366CC] md:w-[351px] md:h-[36px]">Logout </button>
                            :
                            <Link to={'/login'}><button className="btn rounded text-2xl hover:bg-[#3366cc78] text-white bg-[#3366CC] md:w-[351px] md:h-[36px]">Login Page</button></Link>

                    }
                </div>


            </div>
        </div>
    )
}