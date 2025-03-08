import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { AddCart } from "../ContextAddCart";
import { FaCartArrowDown } from "react-icons/fa";

function NavBar(){
    let {current} = useContext(AddCart)
    let navigate = useNavigate();
    let x = useLocation();
    let [state,setState] = useState(false);
    let [user,setUser] = useState({})
    useEffect(() => {AOS.init();}, []);
        let token = sessionStorage.getItem("access_token")
       useEffect(()=>{ 
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                console.log(response.data);
                setUser(response.data);
                
            })
            .catch(error => {
              console.error('Error fetching profile:', error);
            });
        },[])
    

    if(x.pathname=="/address" || x.pathname=="/updateaddress"||x.pathname=="/addnewaddress" || x.pathname === "/ordered" || x.pathname === "/login"){
        return ""
    }else{
        return (
            <>
            <header data-aos="flip-up" className="flex justify-around text-white h-[80px] bg-orange-400 items-center text-xl">
                <div className="w-[15%]">
                    <NavLink to={"/"} className="text-4xl">Logo</NavLink>
                </div>
                <div className="w-[55%]">
                    <ul className="flex justify-around items-start">
                        <li><NavLink to={"/men"} className={({isActive})=>(isActive?"text-blue-900":"text-white")}>Men</NavLink></li>
                        <li><NavLink to={"/women"} className={({isActive})=>(isActive?"text-blue-900":"text-white")}>Women</NavLink></li>
                        <li><NavLink to={"/groceries"} className={({isActive})=>(isActive?"text-blue-900":"text-white")}>Groceries</NavLink></li>
                        <li><NavLink to={"/jewellery"} className={({isActive})=>(isActive?"text-blue-900":"text-white")}>Jewellery</NavLink></li>
                    </ul>
                </div>
                <div>
                    {token==null?
                    <>
                    <span className="text-3xl flex justify-around w-[120px] cursor-pointer items-center" onClick={()=>{navigate("/login");}} >
                    <CgProfile  /> Login</span>
                    </>
                     :
                    <span className="flex justify-around w-[200px] cursor-pointer">
                    <span><img src={user.avatar}  onPointerOver={()=>{setState(true)
                    }} className="rounded-full
                    h-[50px]" alt="" /></span>
                    <span><IoLogOutOutline className="text-4xl" onClick={()=>{sessionStorage.removeItem("access_token")
                    setUser({});toast.success("logout successfully")
                    ; window.location.reload()}}/></span>
                    </span> }
                </div>
                
            </header>
            {
                state && <div onPointerOut={()=>{setState(true)}}
                onPointerLeave={()=>{setState(false)}}
                className="w-[250px] h-[150px] bg-orange-300 z-[1] absolute ml-[80%] flex flex-col justify-center items-center rounded-b-lg text-xl text-white cursor-pointer">
                    <ol>
                        <li>
                        <p><b>Name : </b><span>{user.name}</span></p>
                        </li>
                        <li>
                        <p><b>Role : </b><span>{user.role}</span></p>
                        </li>
                        <li>
                        <p><b>Email : </b><span>{user.email}</span></p>
                        </li>
                    </ol>
                    
                </div>
                
            }
            <button className="fixed z-10 text-orange-500 border-5 rounded border-orange-500 w-[80px] h-[60px] flex justify-between items-center text-center text-4xl left-[93%] top-[50%]" onClick={()=>{navigate("/address",{state:current})}}><FaCartArrowDown /><span className="text-white bg-red-500 p-[2px] rounded    text-2xl">{current.length>0?current.length:"0"}</span>
            </button>
         </>   
        )
    }
    

}
export default NavBar;