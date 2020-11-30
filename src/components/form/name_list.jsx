import React from 'react';
import "./name_list.css";

class NameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: [{name:'', number:''}]
        }

        this.deleteParticipant = this.deleteParticipant.bind(this);
        this.addParticipant = this.addParticipant.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    addParticipant() {
        let participants = [...this.state.participants];
        participants.push({name:'',number:''});
        this.setState({ participants })
    }

    deleteParticipant(idx) {
        return () => {
            let participants = [...this.state.participants];
            participants = participants.slice(0,idx).concat(participants.slice(idx+1));
            this.setState({ participants })
        }
    }

    handleInput(field, idx) {
        return (e) => {
            let participants = [...this.state.participants];
            participants[idx][field] = e.target.value;
            this.setState({participants: participants})
        }
    }

    
    render() {
        let { participants } = this.state;
        let count = participants.length === 1 ? "There is one participant." : `There are ${participants.length} participants.`
        debugger
        return(
            <div id="name-list-container">
                <div id="form-container">
                    {count}
                    <form>
                        { participants.map((participant, idx) => {
                            let {name, number} = participant;
                            return(
                                <div key={idx} className="participant-container">
                                    <h3>Participant #{idx+1}</h3>
                                    <div id="input-container">
                                        <div id="first-input">
                                            <input type="text" required value={name} onChange={this.handleInput('name', idx)}/>
                                            <label>Participant Name</label>
                                        </div>
                                        <div>
                                            <input type="tel" pattern="[0-9]{10}" value={number} required onChange={this.handleInput('number', idx)}/>
                                            <label className="selected">Participant Cell-phone Number</label>
                                            <span>Format: 6171111111</span>
                                        </div>
                                    </div>
                                    <button type="button" onClick={this.deleteParticipant(idx)}>Delete Participant</button>
                                </div>
                            )
                        })}
                    </form>
                </div>
                <button className="add-participant-btn" type="button" onClick={this.addParticipant}>Add Participant</button>
                <button className="add-participant-btn proceed-to-review" type="button" onClick={this.addParticipant}>Proceed To Review</button>
            </div>
        )
    }
}

export default NameList;