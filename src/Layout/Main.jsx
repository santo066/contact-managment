import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Outlet></Outlet>
        </div>
    )
}