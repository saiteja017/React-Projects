import { useState } from "react"
import { instance } from "../instances";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { IoMdCloseCircleOutline } from "react-icons/io";

function AddNewAddress(){
    let nav = useNavigate()
    let [details,setDetails] = useState({username:"",id:"",area:"",pincode:"",mobile:""});
    function handleChange(e){
        let {name,value} = e.target;
        setDetails({...details,[name]:value})            
    }
    function updateAddress(e){
            e.preventDefault()
            if(details.username != "" && details.pincode != "" && details.area != ""   ){            
            instance.post(`/address`,details);
            alert("Address Add")
            nav("/address")
            }else{
                toast("Enter Details")
            }
    
      
    }
    return (
        <>  
            <span onClick={()=>{nav("/address")}} className="absolute text-4xl left-[73%] top-[17%] cursor-pointer text-white
"><IoMdCloseCircleOutline />
            </span>
            <div className="flex justify-center items-center flex-col  p-[0] m-[0] h-[100vh] bg-[url(./src/images/backgroung.jpeg)] bg-cover bg-center ">
                <h1 className="text-8xl text-white" >Add New Address</h1>
                <ToastContainer />
        
            <div className="border-8 border-white 	 rounded-4	h-[80%] w-[45%]	flex justify-center	 item-center flex-row " style={{boxShadow:"0px 0px 20px pink"}}>
                <form action="" style={{display:"flex",justifyContent:"space-around",alignContent:"center",flexDirection:"column"}}>

                <label htmlFor="id" className="text-2xl text-white" >ID : 
                <input type="text"  name="id" id="id" value={details.id} className="border-1 h-[40px] text-black w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}} />

                </label>
                <br />
                <label htmlFor="username" className="text-2xl text-white ">Name :
                    <input type="text" required  name="username" id="username" 
                    value={details.username} className="border-1 h-[40px] text-black w-[300px] rounded m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label className="text-2xl text-white " htmlFor="area">Area : 
                    <input type="text" value={details.area} name="area" id="area" className="border-1 h-[40px] w-[300px] rounded text-black m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label htmlFor="pincode" className="text-2xl text-white " > PinCode : 
                    <input type="text" value={details.pincode} name="pincode" id="pincode" className="border-1 h-[40px] w-[300px] text-black rounded m-[5px]" onChange={(e)=>{handleChange(e)}}/>
                </label>
                <br />

                <label htmlFor="mobile"  className="text-2xl text-white ">Mobile No. :
                    <input type="text" value={details.mobile} name="mobile" id="mobile" className="border-1 h-[30px] w-[300px] text-black rounded m-[5px]" onChange={(e)=>{handleChange(e)}} />
                </label>
                <br />
                <button className="btn btn-success m-[10px]" onClick={(e)=>{updateAddress(e)}} >Save</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default AddNewAddress;