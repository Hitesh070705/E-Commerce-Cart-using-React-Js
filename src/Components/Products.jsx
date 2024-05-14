import React, { useEffect, useState } from 'react'
import Card from './Card'
const Products = (props) => {
   
    const [data,setData]=useState()

     useEffect(()=>{
        getData()
     },[])

    const getData=async()=>{
        const result=await fetch('https://fakestoreapi.com/products')
        const response=await result.json()
        setData(response)
    }
  return (
    <>
    <div className="container" style={{marginTop:"90px"}}>
      <div className="row">
        

        {
     data?.map((item,index)=>{
      item["qty"]=1
      return (
        <div className="col-3" key={index} >
        <Card title={item.title} price={item.price} img={item.image} desc={item.description} addcart={props.addCartbtn} item={item} />
        </div>
      )
     })
    }
      
      </div>
    </div>



   
    </>
  )
}

export default Products
