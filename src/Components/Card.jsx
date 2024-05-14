import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  const {title,desc,price,img,addcart,item}=props
  return (
    <>
    <div className="card " style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." style={{width: "100px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,30)}</h5>
    <p className="card-text">{desc.slice(0,100)}</p>
    <h2>{price}</h2>
    <div className='d-flex justify-content-around'>
    <button className="btn btn-success"> <NavLink to={`readmore/${item.id}`} className="text-white text-decoration-none" >Read More</NavLink> </button>
 
    <button className="btn btn-primary" onClick={()=>addcart(item)}>Add Cart</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
