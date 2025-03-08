import { Link, useLocation } from "react-router-dom";

function Ordered(){
    let loc = useLocation()
    console.log(loc.state);
    let {address,product} = loc.state
    let products = product
    let {username,pincode,area,mobile} = address;
    return (
        <>
     
        <div className="h-[80px] bg-orange-500 flex justify-around items-center">
            <Link to={"/"}>
                 <h1 className="text-2xl text-white">Logo</h1>
            </Link>
            
            <h1 className="text-4xl text-white font-bold w-[20%]">Ordered</h1>
        </div>
        <div className="flex justify-around items-center">
        <table className="table table-hover w-[70%]">
            <thead>
             <tr>
                <th>
                    Product Image
                </th>
                <th>
                    Title
                </th>
                <th>
                    Description
                </th>
                <th>
                    Price
                </th>
                <th>
                    Deliver
                </th>
                </tr>
            </thead>
            <tbody>
               {
                product.length == 0? <h1 className="text-4xl">No Product Seleted</h1> :products.map(({images,title,price,description},index)=>{
                    return <>
                        <tr key={index}>
                         <td>   <img className="h-[200px]" src={images} alt="" /></td>
          <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{new Date().toDateString()}</td>
                        </tr>
                        
                    </>
                })
               }
            </tbody>
            <tfoot>
                <tr>
                    <th>Total Number Of Products</th>
                    <th>{product.length}</th>
                    <th>Total Amount</th>
                    <th>{product.reduce((acc, x) => acc + x.price, 0)}</th>
                </tr>
            </tfoot>
            </table>
            <table className="table w-[10%]">
                <thead>
                    <tr><th colSpan={2}>Deliver Address</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <th>UserName</th>
                        <th>Mobile</th>
                    </tr>
                    <tr>
                        <td>{username}</td>
                        <td>{mobile}</td>
                    </tr>
                    <tr> 
                        <th> Area </th>
                        <th>Pincode</th>
                    </tr>
                    <tr>
                        <td>{area}</td>
                        <td>{pincode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Ordered;