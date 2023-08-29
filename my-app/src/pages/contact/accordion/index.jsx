import React from 'react';
import "./style.css"

class AccordionItem extends React.Component {
    state = {
            display: 'none'
        };
    

    toggleText = () => {
        this.setState(prevState => ({
            display: prevState.display === 'none' ? 'block' : 'none'
        }));
    };

    render() {
        const { display } = this.state;
        const { title, content } = this.props;

        return (
            <div className="accordion">
                <button className="accordionbutton" onClick={this.toggleText}>
                    {title}
                </button>
                <div className="panel" style={{ display }}>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}

class AccordionComponent extends React.Component{
    render() {
        const accordionData = [
            { title: 'Section 1', content: '#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.' },
            { title: 'Section 2', content: 'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.' },
            { title: 'Section 3', content: 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.'},
            { title: 'Section 4', content: 'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.'} 
            
        ];

        return (
            <div>
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        );
    }
}

export default AccordionComponent;
