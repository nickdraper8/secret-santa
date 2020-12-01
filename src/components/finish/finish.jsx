import React from 'react';
import snoopy from '../../assets/tenor.gif';
import { withRouter } from 'react-router-dom';

class Finish extends React.Component {

    render() {
        return(
            <div id="directions-container">
                <h2>CONGRATULATIONS!!!</h2>
                <p>You've done it! All the participants you included should be receiving a text message shortly indicating who they will be getting gifts for.</p>
                <p>Please feel free to share my app with your friends and family for their own secret santa plans. Use this link: https://nick-draper-secret-santa.herokuapp.com/</p>
                <p>My work here is done, you wont be getting any promotion emails from me, no extra texts, that's it, all done! Have a Merry Christmas!</p>
                <img src={snoopy} alt="snoopy-gif"/>
            </div>
        )
    }
}

export default withRouter(Finish);