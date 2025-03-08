import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { instance } from "../instances";
import { IoMdCloseCircleOutline } from "react-icons/io";


function UpdateAddress(){
    let {state} = useLocation();
    let nav = useNavigate("/address");
    let {username,id,area,pincode,mobile} = state;
    let [details,setDetails] = useState({username,id,area,pincode,mobile});
    function updateAddress(e){
        e.preventDefault()
        instance.put(`/address/${id}`,details);
        alert("Address Update")
        nav("/address")

        
    }
    function handleChange(e){
            let {name,value} = e.target;
            setDetails({...details,[name]:value})
            
    }
    return (
        <>  
               <span onClick={()=>{nav("/address")}} className="absolute text-4xl left-[73%] top-[17%] cursor-pointer text-white
        "><IoMdCloseCircleOutline /></span>
            <div className="flex justify-center items-center flex-col  p-[0] m-[0] h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500">
                <h1 className="text-8xl text-white" >Update Address</h1>
            <div className="border-8 border-white	 rounded-4	h-[80%] w-[45%]	flex justify-center	 item-center flex-row " style={{boxShadow:"0px 0px 20px pink"}}>
                <form action="" style={{display:"flex",justifyContent:"space-around",alignContent:"center",flexDirection:"column"}}>

                <label htmlFor="id" className="text-2xl " >ID : 
                <input type="text"  name="id" id="id" value={details.id} className="border-1 h-[40px] w-[300px] rounded m-[5px]" readOnly onChange={(e)=>{handleChange(e)}} />


                </label>
                <br />
                <label htmlFor="username" className="text-2xl ">Name :
                    <input type="text"  name="username" id="username" 
                    value={details.username} className="border-1 h-[40px] w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label className="text-2xl " htmlFor="area">Area : 
                    <input type="text" value={details.area} name="area" id="area" className="border-1 h-[40px] w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label htmlFor="pincode" className="text-2xl " > PinCode : 
                    <input type="text" value={details.pincode} name="pincode" id="pincode" className="border-1 h-[40px] w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label htmlFor="mobile"  className="text-2xl ">Mobile No. :
                    <input type="text" value={details.mobile} name="mobile" id="mobile" className="border-1 h-[30px] w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}} />
                </label>
                <br />
                <button className="btn btn-success m-[10px]" onClick={(e)=>{updateAddress(e)}} >Save</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default UpdateAddress;