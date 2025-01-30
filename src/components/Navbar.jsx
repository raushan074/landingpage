import React from 'react'
import pixie from "../images/pixie.png"
import cart from "../images/cart.png"
import shopping from "../images/shopping.png"
import magnifier from "../images/magnifier.png"
import header from "../images/header.png"
import head from "../images/head.png"

const Navbar = () => {
  return (
    <div style={{marginTop:"10px"}}>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <img height={"40px"} width={"200rem"} src={`${pixie}`} alt='logo' />
            </div>
            <div style={{border:"1px solid black", borderRadius:"5px"}}>
                <img height={"24px"} src={`${magnifier}`} alt='search' />
                <input style={{width:"60rem", height:"90%", border:"none"}} type='text' placeholder='Search for products...' />
            </div>

            <div style={{display:"flex"}}>
                <div style={{display:"flex", marginTop:"15px"}}>
                    <img height={"24px"} src={`${cart}`} alt='cart' />
                    <div style={{height:"14px", width:"14px", borderRadius:"50%", textAlign:"center", color:"white", backgroundColor:"#E35656", marginLeft:"-5px"}}>0</div>
                </div>
                <button style={{height:"48px", width:"90px", borderRadius:"10px", backgroundColor:"#A8794D", color:"white", border:"none", marginLeft:"20px"}}>Login</button>
            </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-around", margin:"30px 150px"}}>
            <div>
                <p style={{fontWeight:"700", fontSize:"14px", color:"#A98C71"}}>HOME</p>
            </div>
            <div>
                <p style={{fontWeight:"400", fontSize:"14px", color:"#757575"}}>NEW & TRENDING</p>
            </div>
            <div>
                <p style={{fontWeight:"400", fontSize:"14px", color:"#757575"}}>ALL CATEGORIES</p>
            </div>
            <div>
                <p style={{fontWeight:"400", fontSize:"14px", color:"#757575"}}>MY ORDERS</p>
            </div>
            <div>
                <p style={{fontWeight:"400", fontSize:"14px", color:"#757575"}}>ABOUT US</p>
            </div>
            <div>
                <p style={{fontWeight:"400", fontSize:"14px", color:"#757575"}}>CUSTOMER SUPPORT</p>
            </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-between", height:"327px", backgroundColor:"#ECE9E4", alignItems:"center"}}>
            <div style={{width:"215", height:"148"}}>
                <p style={{fontWeight:"400", fontSize:"56px", color:"#815B34", marginLeft:"30px"}}>Up to 30 % Off</p>
            </div>
            <div>
                <p style={{fontWeight:"700", fontSize:"24px", color:"#876C51"}}>On all autumn fashion Wear</p>
                <button style={{height:"60px", width:"240px", backgroundColor:"#C5A880", color:"white", borderRadius:"66px", border:"2px solid white"}}>Shop now</button>
            </div>
            <div>
                <img height={"327"} src={`${head}`} alt='header' />
            </div>
        </div>
            
    </div>
  )
}

export default Navbar