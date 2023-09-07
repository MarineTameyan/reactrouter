import React from "react";
import "./style.css"
import homeimg from "../../assets/images/home.jpg"
import UserDetails from "./user-details";
import Globalcomponent from "../../components/globalcomponent";
import globalData from "../../components/globalcomponent/global";

class Home extends React.Component {
    
    render() {
        const homeData = globalData[0]

        return <div className="homecontainer">
            <div className="home-text">
                <Globalcomponent gname={homeData.gname} gtext={homeData.gtext} />
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