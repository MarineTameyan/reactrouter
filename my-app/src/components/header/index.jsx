import React from "react";
import {NavLink} from "react-router-dom";
import {routerNames} from "../../router/router";
import imageHeader from  "../../assets/images/header.jpg"
import "./style.css"
class Header extends React.Component {

    render() {
        return (
            <div className="container">
              <div className="headerdetails">
                <div className="link">
                <ul>
                    <li>
                        <NavLink exact activeClassName={'P-active-class'} to={routerNames.HOME}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName={'P-active-class'}  to={routerNames.ABOUT_US}> About us</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName={'P-active-class'}  to={routerNames.CONTACT}> Contact</NavLink>
                    </li>
                </ul>
                </div>
                <div className="items">
                <div className="square">
                    <div className="first"></div>
                    <div className="second"></div>
                </div>
                <div className="texts">
                    <p>Simple House</p>
                    <span>new restaurant template</span>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Header