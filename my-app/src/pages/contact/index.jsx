import React from "react";
import "./style.css"
import logoone from "../../assets/images/phonelogo.png"
import logosec from "../../assets/images/maillogo.png"
import logofacebook from "../../assets/images/facebook.png"
import logotwitter from  "../../assets/images/twitter.png"
import logoinsta from "../../assets/images/instagram.png"
import AccordionComponent from "./accordion";

class Contact extends React.Component {
    
    render() {
        
        return (
            
            <div className="contactcontainer">
                <div className="contact-text">
                    <h3>Contact Page</h3>
                    <p>You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.</p>
                </div>
                <div className="info">
                    <div className="forms">
                        <label>
                            <input type="text" placeholder="Name"/>
                        </label>
                        <label>
                            <input type="text" placeholder="Email"/>
                        </label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button>Send</button>
                    </div>
                    <div className="address">
                        <h4>Our Address</h4>
                        <span>180 Orci varius natoque penatibus et magnis dis parturient montes, <br/>nascetur ridiculus mus 10550</span>
                        <div className="phone">
                            <img src={logoone} alt="" />
                            <p>080-090-0110</p>
                        </div>
                        <div className="mail">
                            <img src={logosec} alt="" />
                            <p>info@company.co</p>
                        </div>
                        <div className="logo">
                            <img src={logofacebook} alt="" />
                            <img src={logotwitter} alt="" />
                            <img src={logoinsta} alt="" />
                        </div>
                    </div>
                 </div>
                 <img className="map" src="https://joomly.net/frontend/web/images/googlemap/map.png" alt="image"/>
                 <div className="footertext">
                    <h3>FAQs</h3>
                    <p>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
                </div>
                <AccordionComponent/>
                </div>
        )
    }
}

export default Contact