import React from "react";
import "./style.css"
import imageone from "../../assets/images/about01.jpg";
import imagetwo from "../../assets/images/about02.jpg";
import imagethree from "../../assets/images/about03.jpg";
import imagefour from "../../assets/images/about04.jpg";
import logofacebook from "../../assets/images/facebook.png"
import logotwitter from  "../../assets/images/twitter.png"
import logoinsta from "../../assets/images/instagram.png"
import parallax from "../../assets/images/about05.jpg"
import iconOne from "../../assets/images/icon1.png"
import iconTwo from "../../assets/images/icon2.png"
import iconThree from "../../assets/images/icon3.png"
import img from "../../assets/images/about06.jpg"

class AboutUs extends React.Component {
    render(){
        return <div className="aboutuscontainer">
            <div className="aboutus-text">
                <h3>About Simple House</h3>
                <p>This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
            </div>
            <div className="user">
            <div className="user-info">
                <div className="usersinfo">
                    <img src={imageone} alt="" />
                </div>
                <div className="userstext">
                    <h4>Jennifer Soft</h4>
                    <h5>Founder and CEO</h5>
                    <p>Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.</p>
                  <div className="logo">
                    <img src={logofacebook} alt="" />
                    <img src={logotwitter} alt="" />
                    <img src={logoinsta} alt="" />
                  </div>
                </div>
            </div>
            <div className="user-info">
                <div className="usersinfo">
                    <img src={imagetwo} alt="" />
                </div>
                <div className="userstext">
                    <h4>Daisy Walker</h4>
                    <h5>Executive Chef</h5>
                    <p>Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.</p>
                  <div className="logo">
                    <img src={logofacebook} alt="" />
                    <img src={logotwitter} alt="" />
                    <img src={logoinsta} alt="" />
                  </div>
                </div>
            </div>
            <div className="user-info">
                <div className="usersinfo">
                    <img src={imagethree} alt="" />
                </div>
                <div className="userstext">
                    <h4>Florence Nelson</h4>
                    <h5>Kitchen Manager</h5>
                    <p>Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.</p>
                  <div className="logo">
                    <img src={logofacebook} alt="" />
                    <img src={logotwitter} alt="" />
                    <img src={logoinsta} alt="" />
                  </div>
                </div>
            </div>
            <div className="user-info">
                <div className="usersinfo">
                    <img src={imagefour} alt="" />
                </div>
                <div className="userstext">
                    <h4>Valentina Martin</h4>
                    <h5>Culinary Director</h5>
                    <p>Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.</p>
                  <div className="logo">
                    <img src={logofacebook} alt="" />
                    <img src={logotwitter} alt="" />
                    <img src={logoinsta} alt="" />
                  </div>
                </div>
            </div>
            </div>
            <div className="parallax-container">
                <img className="parallax-image" src={parallax} alt="" />
            </div>
            <div className="content">
            <div className="content-data">
                <img src={iconOne} alt="" />
                <span>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</span>
                <button>Read More</button>
            </div>
            <div className="content-data">
                <img src={iconTwo} alt="" />
                <span>Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</span>
                <button>Read More</button>
            </div>
            <div className="content-data">
                <img src={iconThree} alt="" />
                <span>Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</span>
                <button>Read More</button>
            </div>
        </div>
        <div className="footer">
                <img src={img} alt="" />
                <div className="footer-text">
                    <h6>History of our restaurant</h6>
                    <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                    <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                </div>
        </div>
        </div>
    }
}

export default AboutUs