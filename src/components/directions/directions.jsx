import React from "react";
import "./directions.css";

class Directions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show: false}
        
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        if (this.state.show) {
            this.setState({show:false})
        } else {
            this.setState({show:true})
        }
    }

    render() {
        if (this.state.show) {
            return(
                <div id="directions-container">
                    <button type="button" className="close-directions" onClick={this.toggleShow}>Close</button>
                    <h3>Directions</h3>
                    <p>Welcome to Nick Draper's super simplified Secret Santa App!</p>
                    <p>Below, please input all the people who will be involved in the secret santa gift event, make sure to provide a descriptive name and their correct cell phone number in the given format.</p>
                    <p>The way the app works is it randomizes pairings of gift givers and gift recievers, and sends texts to the gift givers notifying them who their gift receiver is.</p>
                    <p>On the next page you can review the information, and even see a summary of who is giving gifts to who if you so choose. However, you can choose not to view it to keep everything confidential as well.</p>
                    <button type="button" className="close-directions" onClick={this.toggleShow}>Close</button>
                </div>
            )
        } else {
            return(
                <button type="button" id="show-directions-btn" onClick={this.toggleShow}>Show Directions</button>
            )
        }
    }
}

export default Directions;