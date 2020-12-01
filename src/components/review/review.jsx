import React from 'react';
import { withRouter } from 'react-router-dom';
import { shuffleArray, makeAssignments } from "../../util/array_utility";
import { sendMessage } from "../../util/twilio_util";
import "./review.css";

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            assignments: []
        }

        this.handleRevealAssignments = this.handleRevealAssignments.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }

    componentDidMount() {
        // randomize the participants array and then create assignments
        let shuffled = [...this.props.participants];
        shuffleArray(shuffled);
        let assignments = makeAssignments(shuffled);
        this.setState({ assignments })
    }

    handleFinish() {
        // this.state.assignments.forEach(assignment => {
        //     sendMessage(assignment[0].name, assignment[1].name, assignment[0].number)
        // })
        this.props.history.push('/complete');
    }

    handleEdit() {
        this.props.navigateToNameList();
    }

    handleRevealAssignments() {
        if (document.getElementById("assignments").classList.contains("hidden")) {
            document.getElementById("reveal-btn").innerHTML = 'HIDE';
        } else {
            document.getElementById("reveal-btn").innerHTML = 'REVEAL';
        }
        document.getElementById("assignments").classList.toggle("hidden")
    }

    render() {
        return(
            <div id="review-container">
                <div id="review-info">
                    <h2>Review Info</h2>
                    <p>Here is the info of all the participants you have entered. If any of the information is incorrect or you would like to edit anything about the list, please hit the <strong>EDIT</strong> button. If you are happy with the information, please click the <strong>FINISH</strong> button to send anonymous SMS assignments.</p>
                    <div id="review-btns">
                        <button type="button" onClick={this.handleEdit}>EDIT</button>
                        <button type="button" onClick={this.handleFinish}>FINISH</button>
                    </div>
                    <div id="participants-review">
                        {this.props.participants.map((participant,idx) => {
                        let {name, number} = participant;
                        number = number.slice(0,3) + "-" + number.slice(3,6) + "-" + number.slice(6);
                        return(
                            <div key={idx}>
                                <strong>Participant #{idx+1}</strong>
                                <span>{name}</span>
                                <span>{number}</span>
                            </div>
                        )
                    })}
                    </div>
                    
                </div>
                <div id="assignment-info">
                    <h2>Assignments</h2>
                    <p>Clicking the <strong>REAVEAL</strong> button will show all the assignments. If you, the creator, are involved in the Secret Santa viewing this data is not reccomended.</p>
                    <button type="button" id="reveal-btn" onClick={this.handleRevealAssignments}>REVEAL</button>
                    <div id="assignments" className="hidden">
                        {this.state.assignments.map((assignment,idx) => {
                        let giftGiver = assignment[0].name;
                        let giftReciever = assignment[1].name;
                        return(
                            <div key={idx}>
                                <strong>{giftGiver}</strong> is purchasing a gift for <strong>{giftReciever}</strong>
                            </div>
                        )
                    })}
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default withRouter(Review);