import React from 'react';
import App from '../App';
import {PlayCircleOutlined} from '@ant-design/icons';

export default class Hello extends App {
    name = "Hello World";

    getIcon() {
        return (
            <PlayCircleOutlined
                style={{fontSize: 70}}
            />
        );
    };

    getComponent() {
        return <p>Hello World!</p>;
    };
}
