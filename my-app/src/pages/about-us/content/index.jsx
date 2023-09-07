import React from "react";
import "./style.css"
import iconOne from "../../../assets/images/icon1.png"
import iconTwo from "../../../assets/images/icon2.png"
import iconThree from "../../../assets/images/icon3.png"

class Content extends React.Component{
    render(){
        return <>
            <div className="content-data">
                <div className="imgdiv">
                    <img src={this.props.src} alt="image" />
                </div>
                <span>{this.props.text}</span>
                <div className="buttondiv">
                    <button>Read More</button>
                </div>
            </div>
        </>
    }
}

class Contentcontainer extends React.Component{
    state = {
        contentlist:[
            {src: iconOne, text:"Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante."},
            {src: iconTwo, text:"Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget."},
            {src: iconThree, text:"Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit."}
        
        ]
    }

    render(){
        return <div className="content">
            {this.state.contentlist.map((item, index) => {
                return <Content key={index} src={item.src} text={item.text}/>
            })}
        </div>
    }
}

export default Contentcontainer