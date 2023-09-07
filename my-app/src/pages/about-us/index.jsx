import React from "react";
import "./style.css"
import parallax from "../../assets/images/about05.jpg"
import img from "../../assets/images/about06.jpg"
import Imagecontent from "./imagecontainer";
import Contentcontainer from "./content";
import Globalcomponent from "../../components/globalcomponent";
import globalData from "../../components/globalcomponent/global";

class AboutUs extends React.Component {
    render(){
        const aboutData = globalData[1]
        return <div className="aboutuscontainer">
            <div className="aboutus-text">
                <Globalcomponent gname={aboutData.gname} gtext={aboutData.gtext}/>
            </div>
            <Imagecontent/>
            <div className="parallax-container">
                <img className="parallax-image" src={parallax} alt="" />
            </div>
            <Contentcontainer/>
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
