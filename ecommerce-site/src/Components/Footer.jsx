import { useLocation } from "react-router-dom";

function Footer(){
    let {pathname} = useLocation()
    if(pathname == "/updateaddress"||pathname == "/addnewaddress" || pathname === "/login"){
        return ""
    }else{
    return (
        <footer className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center text-white">
            <div >
            <p>Ⓒ Copyright <span >2025</span>. Knight Bite Foods Pvt. Ltd. All Rights Reserved</p>
        </div>

        </footer>
    )
    }
}

export default Footer;