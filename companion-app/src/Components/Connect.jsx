import React, { Component } from 'react';
import PeerJS from 'peerjs';

export default class Login extends Component {
    state = {
        peerID: 0,
        peer: new PeerJS(),
    }

    componentDidMount() {
        this.state.peer.on("open", (id) => this.setState({peerID: id}));
        this.state.peer.on('connection', (connection) => {
            this.props.onConnectionEstablished(connection);
            connection.on("close", this.props.onConnectionLost);
        });
        this.state.peer.on("close", this.props.onConnectionLost);
    }
    
    render(){
        return (
            <div style={{textAlign: "center"}}>
                <h1>Connection To Game</h1>
                {this.state.peerID ?
                    <p>Enter this code on the game: <b>{this.state.peerID}</b></p>
                :
                    <p>Connecting with the server...</p>
                }
            </div>
        )
    }
}