import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
  const {cartsize,display}=props
  return (
    <>

<div className="container-fluid bg-primary fixed-top" >
        <div className="row">
          <div className="col-10">
            <NavLink to="/" className='text-white logo'>Logo</NavLink>
          </div>
          <div className="col-2">

<NavLink to="cart" type="button" className="btn btn-primary position-relative my-2">
          <FaCartShopping size={"30px"} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartsize}
    <span className="visually-hidden">unread messages</span>
  </span>
</NavLink>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

  {/* <div className="container-fluid bg-primary fixed-top" >
        <div className="row">
          <div className="col-10">
            <h1 onClick={()=>display(false)}className='text-white'>Logo</h1>
          </div>
          <div className="col-2"> */}
          
          {/* <button onClick={()=>display(true)} type="button" className="btn btn-primary position-relative my-2">
          <FaCartShopping size={"30px"} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartsize}
    <span className="visually-hidden">unread messages</span>
  </span>
</button> */}
