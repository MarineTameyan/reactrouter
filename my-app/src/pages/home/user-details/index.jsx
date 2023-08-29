import React from "react";
import imageone from "../../assets/images/nkar2.jpg"
import imagetwo from "../../assets/images/nkar3.jpg"
import imagethree from "../../assets/images/nkar5.jpg"
import imagefour from "../../assets/images/nkar6.jpg"
import "./style.css"

class UserDetails extends React.Component {
    
    render() {
        return <div className="dataonedetails">
            <div className="data-one">
                <img src={imageone} alt="" />
                <div className="dataone-text">
                    <h6>Aliquam sagittis</h6>
                    <p>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span>$65</span>
                </div>
            </div>
            <div className="data-one">
                <img src={imagetwo} alt="" />
                <div className="dataone-text">
                    <h6>Sed varius turpis</h6>
                    <p>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span>$30.50</span>
                </div>
            </div>
            <div className="data-one">
                <img src={imagethree} alt="" />
                <div className="dataone-text">
                    <h6>Maecenas eget justo</h6>
                    <p>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span>$80.25</span>
                </div>
            </div>
            <div className="data-one">
                <img src={imagefour} alt="" />
                <div className="dataone-text">
                    <h6>Aliquam sagittis</h6>
                    <p>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
                    <span>$40</span>
                </div>
            </div>
        </div>
    }
}

export default UserDetails