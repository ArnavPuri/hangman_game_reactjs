import React from "react";
import './MainComponent.css';

class MainComponent extends React.Component {
    colors = ['red', 'green', 'blue', 'indigo', 'yellow', 'orange', 'purple', 'pink'];

    constructor(props) {
        super(props);
        this.state = {
            color: this.colors[3]
        };
        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * this.colors.length);
            console.log(randomIndex);
            this.setState({
                color: this.colors[randomIndex]
            })
        }, 2000);
    }

    render() {
        return (
            <div className={`bg-${this.state.color}-200 h-screen flex flex-col p-8`}>
                <h3 className="text-3xl">This is main component</h3>

            </div>
        );
    }

}

export default MainComponent;