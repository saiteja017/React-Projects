import axios from 'axios';
import Product from './Product';
import ProductPlaceHolder from './ProductPlaceHolder';
import { useContext, useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { AddCart } from '../ContextAddCart'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Products(){
    let [state,setState] = useState([]);
    let navigate = useNavigate()
    let api = axios.get("https://dummyjson.com/products");
    function getAPI(){
        api.then((product)=>{
        setState(product.data.products);  
        });
    }
        
    // useEffect(()=>{  let x = useContext(AddCart)
    //     console.log(x);
        
    //   },[])
    // let addcart = useContext(AddCart)
    // console.log(addcart.setCart("asim"));
    // let {current} = useRef([]);
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
  

    useEffect(getAPI,[]);
    return (
    <>
    
    <div >
        <div>
            <h1 className='text-6xl text-center p-[20px]'>Products</h1>
        </div>
    <div className='flex justify-around flex-wrap gap-[20px]'>
    {(state.length == 0)?<ProductPlaceHolder></ProductPlaceHolder>:state.map((item,index)=>{
        let {title,description,price,images} = item;
        // console.log(item);
        
    return <Product removecart={removecart} addcart={addcart} key={index} images= {images[0]} title={title} description={description.substr(0,20)} price={price}></Product>})}
    </div>
    </div>
    </>)
}

export default Products;