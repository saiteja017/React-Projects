import { useState } from "react"
import { instance } from "../../../Database/instances"
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

function Login(){
    let [toggle,setToggle] = useState(false)
    let navigate = useNavigate()
    let [state,setState] = useState({
        email: "",
        password: ""
      })
    
    function handleChange(e){
        let {name,value}   = e.target;
        setState({...state,[name]:value})
    }
    function handleSubmit(e){
            e.preventDefault()
            console.log(sessionStorage.getItem("access_token"));

            let x  = instance.post('/login',state)
            x.then((res)=>{
            sessionStorage.setItem("access_token",res.data.access_token);
            
                navigate("/")
                window.location.reload();
    }).catch((err)=>{
        toast.error("wrong email or password")
        
    })
   

    }
    return <>
    <div className="flex justify-center items-center flex-col  p-[0] m-[0] h-[100vh] bg-[url(./src/images/backgroung.jpeg)] bg-cover bg-center">
    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>

        <div className="w-[500px] h-[500px] border m-[auto] mt-[5%] flex flex-col justify-around items-center rounded " style={{boxShadow:"0px 0px 20px pink"}}>
            <h1 className="text-6xl text-white " style={{boxShadow:"0px 0px 10px pink"}}>Login</h1>
           
            <input className="border rounded w-[300px] h-[40px]" type="text" name="email" onChange={(e)=>{handleChange(e)}} placeholder="Enter Email" value={state.email} style={{boxShadow:"0px 0px 20px pink"}}/>
            <input onChange={(e)=>{handleChange(e)}} type={toggle?"password":"text"} name="password" id="" placeholder="Enter Password"  className="border rounded w-[300px] h-[40px]" value={state.password} style={{boxShadow:"0px 0px 20px pink"}}/>
            <span onClick={()=>{setToggle(!toggle)}} className="absolute mt-[120px] ml-[235px] text-xl">{toggle?<FaEyeSlash />:<IoEyeSharp />}</span>
            <button className="border-none bg-blue-600  p-[10px] w-[150px] rounded" style={{boxShadow:"0px 0px 10px pink"}}>Login</button>
        </div>
        </form>
        </div>
    </>
}

export default Login