import React from "react";
import imageone from "../../../assets/images/nkar1.jpg"
import imagetwo from "../../../assets/images/nkar2.jpg"
import imagethree from "../../../assets/images/nkar3.jpg"
import imagefour from "../../../assets/images/nkar4.jpg"
import imagefive from "../../../assets/images/nkar5.jpg"
import imagesix from "../../../assets/images/nkar6.jpg"
import imageseven from "../../../assets/images/nkar7.jpg"
import imageeight from "../../../assets/images/nkar8.jpg"
import "./style.css"

class Details extends React.Component{
    render(){
        return <>
            <div className="data-one">
                <img src={this.props.src} alt="" />
                <div className="dataone-text">
                    <h6>{this.props.name}</h6>
                    <p>{this.props.text}</p>
                    <span>{this.props.price}</span>
                </div>
            </div>
        </>
    }
}

class UserDetails extends React.Component {
    state = {
        details: [
            {
             src: imageone,
             name: "Fusce dictum finibus",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "45$"
            },
            {
             src: imagetwo,
             name: "Aliquam sagittis",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "65$"
            },
            {
             src: imagethree,
             name: "Sed varius turpis",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "30$"
            },
            {
             src: imagefour,
             name: "Aliquam sagittis",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "25$"
            },
            {
             src: imagefive,
             name: "Maecenas eget justo",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "80$"
            },
            {
             src: imagesix,
             name: "Quisque et felis eros",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "40$"
            },
            {
             src: imageseven,
             name: "Sed ultricies dui",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "94$"
            },
            {
             src: imageeight,
             name: "Donec porta consequat",
             text: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
             price: "15$"
            },
        ]
    }
    render() {
        return <div className="dataonedetails">
            {this.state.details.map((item, index) => {
                return <Details key={index} src={item.src} name={item.name} text={item.text} price={item.price}  />
            })}
        </div>
    }
}

export default UserDetails