import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Products from './Components/Products';
import Cart from './Components/Cart';
import ReadMore from './Components/ReadMore';

const Wrapper = () => {
    const [cart, setCart] = useState([])
    
    // let ispresent=false
    const additems=(item)=>{
        let ispresent=false
      cart.forEach((product)=>{
        if (product.id==item.id){
          ispresent=true
        }
      })
  
      if (!ispresent){
        setCart([...cart,item])
      }
      else{
        alert("Already added")
      }
      
    
    }
  
    const handleqty=(item,value)=>{
      let ind=-1
  
      cart.forEach((prd,index)=>{
         if(prd.id==item.id){
          ind=index
         }
      })
  
  
      cart[ind].qty+=value
      if(cart[ind].qty==0) {
        cart[ind].qty=1
      }
      setCart([...cart])
  
  
  
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element:<App cartsize={cart.length} />,
            children: [
                {
                    path: "",
                    element: <Products addCartbtn={additems} />
                },
                {
                    path: "cart",
                    element: <Cart CartItems={cart} handleqty={handleqty} setCart={setCart} />
                },
                {
                  path:'readmore/:id',
                  element:<ReadMore/>
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Wrapper;
