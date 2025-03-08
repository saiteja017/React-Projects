import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import Product from "../pages/Product";
import ProductPlaceHolder from "../pages/ProductPlaceHolder";
import { AddCart } from "../ContextAddCart";
function Men(){
    let [state,setState] = useState([]);
    function getAPI(){
        axios.get("https://api.escuelajs.co/api/v1/products").then((res)=>{
            setState(res.data);
        })
    }
    // let {current} = useRef([]);
    let {current,setCurrent} = useContext(AddCart)

    
    function addcart({images,title,description,price}){
        setCurrent([{images,title,description,price},...current])
    }
    function removecart({images,title,description,price}){
            let obj1 = {images,title,description,price}
            let index = current.findIndex(obj=>obj.images==obj1.images);
            current.splice(index,1)
            setCurrent([...current])
            toast.error(`Product Deleted Successfull From Cart Product Name : ${title} Price : ${price}`)
    }
    useEffect(getAPI,[]);
    return <>
         <div >
        <div>
            <h1 className='text-6xl text-center p-[20px]'>Products</h1>
        </div>
    <div className='flex justify-around flex-wrap gap-[20px]'>
    {(state.length == 0)?<ProductPlaceHolder></ProductPlaceHolder>:state.map((item,index)=>{
        let {title,description,price,images} = item;
    return <Product removecart={removecart} addcart={addcart} key={index} images= {images[0]} title={title} description={description.substr(0,20)} price={price}></Product>})}
    </div>
    </div>
    </>
}

export default Men;