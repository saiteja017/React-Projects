import axios from "axios";
import Product from "../pages/Product";
import ProductPlaceHolder from "../pages/ProductPlaceHolder";
import { useContext, useEffect, useRef, useState } from "react";
import { AddCart } from "../ContextAddCart";
function Jewellery(){
    let [state,setState] = useState([]);
    function getAPI(){
        axios.get("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
            setState(res.data);
                
        })
    }
    let {current,setCurrent} = useContext(AddCart)
    
        
        function addcart({images,title,description,price}){
            setCurrent([{images,title,description,price},...current])
            console.log(current);    
        }
        function removecart({images,title,description,price}){
            let obj1 = {images,title,description,price}
            let index = current.findIndex(obj=>obj.images==obj1.images);
            current.splice(index,1)
            setCurrent([...current])
            toast.error(`Product Deleted Successfull From Cart Product Name : ${title} Price : ${price}`)
        }

    useEffect(getAPI,[])
    return (
        <>
             <div >
        <div>
            <h1 className='text-6xl text-center p-[20px]'>Products</h1>
        </div>
    <div className='flex justify-around flex-wrap gap-[20px]'>
    {(state.length == 0)?<ProductPlaceHolder></ProductPlaceHolder>:state.map((item,index)=>{
        console.log(item);
        let {description,image,price,title} = item
        // let {title,description,price,images} = item;
    return <Product removecart={removecart} addcart={addcart} key={index} images= {image} title={title.substr(0,10)} description={description.substr(0,20)} price={price}></Product>})}
    </div>
    </div>

        </>
    )
}

export default Jewellery;