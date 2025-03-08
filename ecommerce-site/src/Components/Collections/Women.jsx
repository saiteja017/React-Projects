import { AddCart } from "../ContextAddCart";
import Product from "../pages/Product";
import ProductPlaceHolder from "../pages/ProductPlaceHolder";
import axios from "axios";
import { useState,useEffect,useRef, useContext } from "react";
function Women(){
    let [state,setState] = useState([]);
    function getAPI(){
        axios.get("https://fakestoreapi.com/products/").then((res)=>{
            setState(res.data);
                console.log(res.data);
                
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
        let {title,description,price,image} = item;
    return <Product removecart={removecart} addcart={addcart} key={index} images= {image} title={'title'} description={"description"} price={"price"}></Product>})}
    </div>
    </div>

        </>
    )
}

export default Women;