import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {Outlet} from 'react-router-dom'


function App(props) {
 
  return (
    <>
     {/* <Navbar cartsize={cart.length}  display={setShow}/> */}
     {/* {show?<Cart CartItems={cart} handleqty={handleqty} setCart={setCart} />: <Products addCartbtn={additems} />
     } */}
      <Navbar cartsize={props.cartsize} />
      <Outlet/>
    

    </>
  )
}

export default App



// const handleqty=(item,value)=>{
//   let ind=-1

//   cart.forEach((prd,index)=>{
//      if(prd.id==item.id){
//       ind=index
//      }
//   })

// //Let's suppose index is 1

//   cart[ind].qty+=value
//   if(cart[ind].qty==0) {
//     cart[ind].qty=1
//   }
//   setCart([...cart])


//   // let x=item.qty
//   // x+=value
//   // if(x==0) x==1
//   // setCart([...cart])

// // Here, I am not doing anything on cart so nothing will get updated in the cart, 
// // because i am directly doing manipulations on "item.qty"
 

// }



// It seems like you're trying to update the quantity of an item in a shopping cart using the handleamount function. 
// However, the issue you're facing might be because you're directly updating the quantity (item.qty) 
// without updating the state of your cart.

// const handleamount = (item, value) => {
//   const updatedCart = cart.map(prd => {
//       if (prd.id === item.id) {
//           return { ...prd, qty: prd.qty + value };
//       }
//       return prd;
//   });
//   setCart(updatedCart);
// }