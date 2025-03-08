import { useContext, useEffect, useState } from "react";
import { instance } from "../instances";
import { Link, useLocation } from "react-router-dom";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { toast } from "react-toastify";
function Address(){
    let nav = useNavigate()
    let x = useLocation()
    let product = x.state;
    
    useEffect(() => {AOS.init();}, []);
    let [deliver,setDeliver] = useState();
    let [state,setState] = useState([])
    function getApi(){
        try{
            instance.get("/address").then((res)=>{
                setState(res.data);
                
            })
        }catch(err){
            console.log(err);
            
        }
        
    }
    function deleteData(id){
        try{
        instance.delete(`address/${id}`)
        setState(prev=>prev.filter(obj=>obj.id != id))
        }catch(err){
            console.error(err);
            
        }

    }
    useEffect(getApi,[])
    return (
        <>
            <div className="bg-orange-400 flex justify-around h-[50px] text-white items-center text-[30px] text-bolder ">
                <div>
                    <Link to={"/"}>Logo</Link>
                </div>
                <div>
                    Address
                </div>
            </div>
            {
                sessionStorage.getItem("access_token")?<button className="btn btn-success m-[10px] flex justify-center items-center w-[80%] ml-[10%]" onClick={()=>{nav("/addnewaddress")}}>Add New Address</button>:<button className="btn btn-success m-[10px] flex justify-center items-center w-[80%] ml-[10%]" onClick={()=>{toast.error("Login First")}}>Add New Address</button>
            }
            {sessionStorage.getItem("access_token") && <div className="h-[80vh] flex justify-center items-center ">
            
            <table data-aos="zoom-y-out" className="table table-hover">
            <thead>
            <tr>
                <th>SNO</th>
                <th>Name</th>
                <th>Area</th>
                <th>Pincode</th>
                <th>Phone No</th>
            </tr>
            </thead>
            <tbody>
                {
                    state.map(({id,username,area,pincode,mobile},index)=>{                        
                    return  <Table product={product} setDeliver={setDeliver} deliver={deliver} nav={nav} key={index} id={id} username={username} area={area} pincode={pincode} mobile={mobile} deleteData={deleteData}></Table>    
                    })
                }
                </tbody>
            </table>
            </div>
}
                </>
    )
}

export default Address;