import React from 'react';
import { withRouter } from 'react-router-dom';
import "./finish.css";

class Finish extends React.Component {

    render() {
        return(
            <div id="finish-container">
                you finished!
            </div>
        )
    }
}

export default withRouter(Finish);