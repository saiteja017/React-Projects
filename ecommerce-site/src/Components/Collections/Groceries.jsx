import { AddCart } from "../ContextAddCart";
import Product from "../pages/Product";
import ProductPlaceHolder from "../pages/ProductPlaceHolder";
import axios from "axios";
import { useState,useEffect, useRef, useContext } from "react";
function Groceries(){
    let [state,setState] = useState([]);
    function getAPI(){
        axios.get("https://dummyjson.com/products").then((res)=>{
            let groceries = [res.data.products[15],res.data.products[16],res.data.products[17],res.data.products[18],res.data.products[19],res.data.products[20],res.data.products[21],res.data.products[22],res.data.products[23],res.data.products[24],res.data.products[25],res.data.products[26],res.data.products[27],res.data.products[28]]
            setState(groceries);
            console.log(res.data.products);
            
                
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
        let {title,description,price,images} = item;
    return <Product removecart={removecart} addcart={addcart} key={index} images= {images[0]} title={title} description={description.substr(0,20)} price={price}></Product>})}
    </div>
    </div>
    </>);
}

export default Groceries;