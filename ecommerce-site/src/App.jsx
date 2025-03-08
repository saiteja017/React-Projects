import './App.css'
import NavBar from './Components/pages/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cheif from './Components/Chief'
import Men from './Components/Collections/Men'
import Women from './Components/Collections/Women'
import Jewellery from './Components/Collections/Jewellery'
import Groceries from './Components/Collections/Groceries'
import Footer from './Components/Footer'
import Address from './Components/CURD/Address'
import UpdateAddress from './Components/CURD/UpdateAddress'
import AddNewAddress from './Components/CURD/AddNewAddress'
import Ordered from './Components/CURD/Ordered'
import "aos/dist/aos.css";
import Login from './Components/CURD/Login'
import { ToastContainer } from 'react-toastify'
import { AddCart } from './Components/ContextAddCart'
import { useRef, useState } from 'react'
function App() {
  let [current,setCurrent] = useState([])
  // console.log(addcart);
  
  return (
    <>
    <AddCart.Provider value={{current,setCurrent}}>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Cheif></Cheif>}></Route>
          <Route path='/men' element={<Men></Men>}></Route>
          <Route path='/women' element={<Women></Women>}></Route>
          <Route path='/jewellery' element={<Jewellery></Jewellery>}></Route>
          <Route path='/groceries' element={<Groceries></Groceries>}></Route>
          <Route path='/address' element={<Address></Address>}></Route>

          <Route path='/updateaddress' element={<UpdateAddress></UpdateAddress>}></Route>
          <Route path='/addnewaddress' element={<AddNewAddress></AddNewAddress>}></Route>
          <Route path='/ordered' element={<Ordered></Ordered>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>


        </Routes>
        <Footer></Footer>

      </BrowserRouter>
      <ToastContainer position="top-center"></ToastContainer>
      </AddCart.Provider>
    </>
  )
}

export default App
