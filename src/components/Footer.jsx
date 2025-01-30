import React from 'react'
import teddy from "../images/teddy.png"
import pixie from "../images/pixie.png"
import telegram from "../images/telegram.png"
import whatsapp from "../images/whatsapp.png"
import heart from "../images/heart.png"

const Footer = () => {

  return (
    <div style={{marginTop:"40px"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#EDD3B9"}}>
            <div>
                <img style={{marginLeft:"100px"}} height={"97"} src={`${heart}`} alt='teddy' />
                <img style={{marginLeft:"-100px"}} height={"97"} src={`${teddy}`} alt='teddy' />
            </div>
            <div>
                <p style={{color:"#815B34", fontWeight:"400", fontSize:"28px", marginLeft:"20px"}}>MADE WITH LOVE</p>
            </div>
        </div>

        <div style={{backgroundColor:"#F2E0CF", paddingTop:"40px", paddingBottom:"40px"}}>
            <div style={{width:"731", height:"78", textAlign:"center"}}>
                <p style={{fontWeight:"400", fontSize:"28px", color:"#815B34"}}>Subscribe for Exclusive Sales & News</p>
            </div>
            <div style={{width:"731", height:"78", textAlign:"center"}}>
                <p style={{fontWeight:"500", fontSize:"16px", color:"#3D2E1B"}}>We will provide detailed information about our services, types of work, and top projects.</p>
            </div>
            <div style={{width:"731", height:"78", textAlign:"center"}}>
                <input type='text' placeholder="+91" style={{borderRadius:"10px", paddingLeft:"15px", height:"48px", width:"731px", border:"0.5px solid black", backgroundColor:"transparent"}} />
                <button style={{backgroundColor:"#815B34", color:"white", borderRadius:"10px", height:"48px", width:"10rem"}}>SEND REQUEST</button>
            </div>
            <div style={{width:"731", height:"78", textAlign:"center"}}>
                <p style={{fontWeight:"400", fontSize:"16px"}}>Copyrights 2024.  | All Rights Reserved. | Privacy | Terms | Infringement</p>
            </div>
        </div>

        <div style={{backgroundColor:"#F2E0CF", padding:"40px"}}>
            <div style={{display:"flex", flexDirection:"column", padding:"40px", marginLeft:"40px", marginRight:"40px", backgroundColor:"#FBF1E8", borderRadius:"10px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{flex:"1"}}><p style={{fontWeight:"700", fontSize:"12", color:"#815B34", marginBottom:"40px"}}>FASHION</p></div>
                    <div style={{flex:"1"}}></div>
                    <div style={{flex:"1"}}><p style={{fontWeight:"700", fontSize:"12", color:"#815B34", marginBottom:"40px"}}>SUPPORT AND HELP</p></div>
                    <div style={{flex:"1"}}><p style={{fontWeight:"700", fontSize:"12", color:"#815B34", marginBottom:"40px"}}>QUICK LINKS</p></div>
                    <div style={{flex:"1"}}><img style={{marginBottom:"20px", marginTop:"20px"}} src={`${pixie}`} alt='logo' height={"40"} /></div>
                    <div style={{flex:"1"}}>
                        <button style={{borderRadius:"12px", backgroundColor:"transparent", color:"#815B34", border:"1px solid #815B34", width:"110px", height:"40px", marginTop:"20px"}}>CALL BACK</button>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{marginTop:"20px", flex:"1"}}>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                    </div>
                    <div style={{marginTop:"20px", flex:"1"}}>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Fashion</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electronics</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Electrical</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                        <div><p>Appliances</p></div>
                    </div>
                <div style={{marginTop:"20px", flex:"1"}}>
                    <div><p>Chat with customer service</p></div>
                    <div><p>Contact us</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p style={{fontWeight:"700", fontSize:"12", color:"#815B34", marginBottom:"40px", marginTop:"40px"}}>QUICK LINKS</p></div>
                    <div><p>Chat with customer service</p></div>
                    <div><p>Contact us</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                    <div><p>Send feedback</p></div>
                </div>
                <div style={{marginTop:"20px", flex:"1"}}>
                    <div><p>Chat with customer service</p></div>
                    <div><p>Contact us</p></div>
                    <div><p>Send feedback</p></div>
                </div>
                <div style={{marginTop:"40px", flex:"1"}}>
                    {/* <div>
                        <img style={{marginBottom:"20px"}} src={`${pixie}`} alt='logo' height={"40"} />
                    </div> */}
                    <div><p style={{fontWeight:"400", fontSize:"14px"}}>+1 891 989-11-91</p></div>
                    <div><p style={{fontWeight:"400", fontSize:"14px"}}>info@logoipsum.com</p></div>
                </div>
                <div style={{marginTop:"40px", flex:"1"}}>
                    <div style={{display:"flex", gap:"10px"}}>
                        <div>
                            <img height={"48"} src={`${telegram}`} alt='telegram' />
                        </div>
                        <div>
                            <img height={"48"} src={`${whatsapp}`} alt='whatsapp' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer