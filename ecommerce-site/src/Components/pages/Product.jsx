import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function Product(props) {
  let { images, title, description, price, addcart, removecart } = props;
  let [state, setState] = useState(false)

  useEffect(() => { AOS.init(); }, []);
  return (
    <Card data-aos="flip-right" style={{ width: '18rem' }} className="border-8	border-gray-500 flex flex-col justify-center items-center h-[400px] bg-orange-100 rounded-xl	bg-cyan-300 shadow-lg shadow-cyan-500/50 gap-[20px] box-border	overflow-hidden			" >
      <Card.Img data-aos="zoom-out" variant="top" src={images} className='h-[200px] w-[262px] rounded-2 ' />
      <Card.Body className='flex justify-center items-center flex-col'>
        <Card.Title className='text-center text-xl'>{title}</Card.Title>
        <Card.Text className='text-center'>
          {description}
        </Card.Text>
        <p className='text-center font-bold'> $<CountUp end={price} />
        </p>
        {/* <Link to={sessionStorage.getItem("access_token")&&'/address'} state={{images,title,description,price}}>*/}
        {sessionStorage.getItem("access_token") ? <>
          {state ? <span className='flex justify-around w-[210px]'>
            <button onClick={() => {
              toast.error(`Already Added To Cart Product Name :${title}  Product Price : ${price}`)
              setState(true)
            }} className='text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl p-[10px] w-[80px] flex justify-center items-center'>
              <BsFillCartCheckFill />
            </button> <button onClick={() => {
              removecart({ images, title, description, price }); setState(false)
            }} className='text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 text-2xl p-[10px] w-[80px] flex justify-center items-center'><IoMdRemoveCircleOutline />
            </button> </span>
            : <button onClick={() => {
              addcart({ images, title, description, price });
              toast.success(`Product Added Successfull  To Cart         Product Name :${title}  Product Price : ${price}`)
              setState(true)
            }} className='text-2xl text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 p-[10px] w-[200px] flex justify-center items-center'>
              Add Cart </button>}</> : <button onClick={() => {
                toast.error(`Login First`)
              }} className='text-2xl text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 p-[10px] w-[200px] flex justify-center items-center'>
          Add Cart </button>}

        {/*  </Link> */}

      </Card.Body>
    </Card>
  );
}

export default Product;