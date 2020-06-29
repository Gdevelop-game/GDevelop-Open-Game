import React, { Component } from 'react';
import { Spin } from 'antd';
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
                    <div>
                        <h2>Press "C" on your game to initiate the pairing process</h2>
                        <h4>Then, enter this code on the game: <b>{this.state.peerID}</b></h4>
                    </div>
                :
                    <p>Connecting with the server...</p>
                }
                <Spin tip="Waiting for connection..." style={{marginTop: 40}}/>
            </div>
        )
    }
}