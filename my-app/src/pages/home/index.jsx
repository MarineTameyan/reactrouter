import React from "react";
import "./style.css"
import UserDetails from "../user-details";
import homeimg from "../../assets/images/home.jpg"

class Home extends React.Component {
    
    render() {
        return <div className="homecontainer">
            <div className="home-text">
                <h3>Welcome to Simple House</h3>
                <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            </div>
            <div className="links">
                <button className="link-style">Pizza</button>
                <button className="link-style">Salad</button>
                <button className="link-style">Noodles</button>
            </div>
            <UserDetails/>
            <div className="home">
                <div className="homeimg">
                    <img src={homeimg} alt="" />
                </div>
                <div className="homefooter-text">
                    <h5>Maecenas nulla neque</h5>
                    <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    }
}

export default Home 