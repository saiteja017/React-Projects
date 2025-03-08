import { useNavigate } from "react-router-dom"


function Table({product,setDeliver,deliver,nav,username,area,pincode,mobile,id,deleteData}){

    let x  = useNavigate();

    return (
        <>
             <tr>          
                            <td><input type="radio" name="address" id="" onChange={()=>{setDeliver(id)}} /></td>
                            <td>{username}</td>
                            <td>{area}</td>
                            <td>{pincode}</td>
                            <td>{mobile}</td>
                            <td><button className="btn btn-warning" onClick={()=>{nav("/updateaddress",{state:{username,area,pincode,mobile,id}})}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{deleteData(id)}} >Delete</button></td>
                            <td>
                            {deliver == id?<button onClick={()=>{x("/ordered",{state:{product,address:{username,area,pincode,mobile,id}}})}}  className="btn btn-warning" >Deliver Now</button>:""}          
                            </td>
                        </tr>  
        </>
    )

}

export default Table