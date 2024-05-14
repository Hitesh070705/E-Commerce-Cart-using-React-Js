import React, { useEffect, useState } from 'react'

const Cart = (props) => {
    const {CartItems,handleqty,setCart}=props

    const [total,setTotal]=useState(0)
    // const [individual_amnt,setIndividual_amnt]=useState(0)
    
    // useEffect(()=>{
    //   handleamount(item)
    //  },[handleqty])

    // const handleamount=(item)=>{
    // let sum=0;
    // sum+=item.qty*item.price 
    // setIndividual_amnt(sum)
    // }



    const handleIndividualAmount = (item) => {
        return item.qty * item.price;
    };

    
    const itemRemove=(product)=>{
      let updatedCartItems=CartItems.filter((item)=> product.id!=item.id)
      setCart(updatedCartItems)
    }


     
     useEffect(()=>{
       handleTotalamnt();
     })

    const handleTotalamnt=()=>{
      
     let sum=0;

     if (CartItems.length == 0){
      setTotal(0)
     }
     else{
      CartItems.forEach(item => {
        sum+=item.qty*item.price 
        setTotal(sum)
    })
     }
  
    }

  return (
    <>
    <div className="container " style={{marginTop:"90px"}} >
        <h1>MY CART</h1>
    {
      CartItems.map((item,index)=>{
        const individualAmount = handleIndividualAmount(item);
        // const handleamount=(item)=>{
        //   let sum=0;
        //   sum+=item.qty*item.price 
        //   setIndividual_amnt(sum)
        //   } 
        //Smile,It is also working.Pehle kuch glti huyi hogi
        return (
        <div className="d-flex justify-content-around" key={index}>


        <div className="prd-img">
        <img src={item.image} alt="" style={{width:"80px"}} />
        </div>
         
        <div className="prd-details">
        <div><h2>{item.title}</h2></div>
        <div><h3>{item.price}</h3></div>
        </div>
          
          <div className="qty">
          <nav aria-label="Page navigation example">
  <ul className="pagination">
    <button className="page-item"><a className="page-link" onClick={()=>handleqty(item,-1)}>-</a></button>
    <li className="page-item"><a className="page-link" href="#">{item.qty}</a></li>
    <button className="page-item"><a className="page-link" onClick={()=>handleqty(item,+1)}>+</a></button>
  </ul>
</nav>
          </div>

          

          <div className="individual-prd-price">
           <h3>${individualAmount}</h3>
          </div>

          <div>
            <button className='btn btn-danger' onClick={()=>itemRemove(item)}>Remove</button>
          </div>

          <hr />
          <br />


        </div>
        
        )
      })
      

    }
    <hr />
    <div className="container d-flex justify-content-end">
      <h3>Total Amount: ${total}</h3>
    </div>
    </div>
    </>
  )
}

export default Cart
