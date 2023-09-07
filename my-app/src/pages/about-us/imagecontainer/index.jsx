import React from "react";
import "./style.css"  
import imageone from "../../../assets/images/about01.jpg";
import imagetwo from "../../../assets/images/about02.jpg";
import imagethree from "../../../assets/images/about03.jpg";
import imagefour from "../../../assets/images/about04.jpg";
import logofacebook from "../../../assets/images/facebook.png"
import logotwitter from  "../../../assets/images/twitter.png"
import logoinsta from "../../../assets/images/instagram.png"  

class Images extends React.Component{
    render(){
        return <div className="user">
        <div className="user-info">
            <div className="userinfo">
              <img src={this.props.src} alt="" />
            </div>
            <div className="userstext">
              <h4>{this.props.name}</h4>
              <h5>{this.props.text}</h5>
              <p>{this.props.info}</p>
              <div className="logo">
               <img src={logofacebook} alt="" />
               <img src={logotwitter} alt="" />
               <img src={logoinsta} alt="" />
              </div>
            </div>
        </div>
    </div>
    }
}

class Imagecontent extends React.Component{
    state = {
        list:[
            {src: imageone,
             name: "Jennifer Soft",
             text: "Founder and CEO",
             info:"Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
            },
            {src: imagetwo,
             name: "Daisy Walker",
             text: "Executive Chef",
             info:"Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
             
            },
            {src: imagethree,
             name: "Florence Nelson",
             text: "Kitchen Manager",
             info:"Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
             
            },
            {src: imagefour,
             name: "Valentina Martin",
             text: "Culinary Director",
             info:"Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
            },
        ]
    }
    render(){
        return <div className="users">
            {this.state.list.map((item, index) => {
                 return <Images key={index}  src={item.src} name={item.name} text={item.text} info={item.info}/>;
                })
                }
        </div>
    }
}

export default Imagecontent