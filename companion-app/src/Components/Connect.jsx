import React, { Component } from 'react';
import { Spin } from 'antd';
import PeerJS from 'peerjs';

export default class Login extends Component {
    state = {
        peerID: false,
        peer: new PeerJS(),
    }

    componentDidMount() {
        this.state.peer.on("open", (id) => this.setState({peerID: id}));
        this.state.peer.on('connection', (connection) => {
            this.props.onConnectionEstablished(connection);
            connection.on("close", this.props.onConnectionLost);
            connection.on("error", (error) => {
                console.error(error);
                this.props.onConnectionLost(error);
            });
        });
        this.state.peer.on("close", this.props.onConnectionLost);
        this.state.peer.on("error", (error) => {
            console.error(error);
            this.props.onConnectionLost(error);
        });
    }
    
    render() {
        if(typeof RTCPeerConnection === 'undefined') 
            return <h1>Sorry, your device/browser is not compatible.</h1>;
        
        return (
            <div style={{textAlign: "center"}}>
                <h1>Connection To Game</h1>
                {this.state.peerID &&
                    <div>
                        <h2>Press "C" on your game to initiate the pairing process</h2>
                        <h4>Then, enter this code on the game: <b>{this.state.peerID}</b></h4>
                    </div>
                }
                <Spin tip={this.state.peerID ? "Waiting for connection..." : "Connecting to server..."} style={{marginTop: 40}}/>
            </div>
        )
    }
}