import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const ReadMore = () => {
    let {id}=useParams()
    
    const [data,setData]=useState()

     useEffect(()=>{
        getData()
     },[])

    const getData=async()=>{
        const result=await fetch('https://fakestoreapi.com/products/'+id)
        const response=await result.json()
        setData(response)
    }
  return (
    <>
{data && <table className="table table-dark table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{data.id}</th>
      <td><img src={data.image} alt="" style={{width: "100px"}} /></td>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.category}</td>
      <td>{data.price}</td>
    </tr>
    
    
  </tbody>
</table>}
    </>
  )
}

export default ReadMore
