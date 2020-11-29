import React from 'react';
import "./name_list.css";

function NameList() {

    let people = [];

    let inputs = [<div className="participant-container">
                    <h3>Participant #1</h3>
                    <label>Participant Name</label>
                    <input type="text" placeholder="Enter Participant Name"/>
                    <label>Participant Cell-phone Number</label>
                    <input type="tel" pattern="[0-9]{10}"/>
                    <span>Format: 6171111111</span>
                </div>]

    return(
        <div id="form-container">
            <form>
                {inputs}
            </form>
        </div>
    )
}

export default NameList;