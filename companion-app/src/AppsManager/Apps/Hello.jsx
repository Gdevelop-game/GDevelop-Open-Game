import React from 'react';
import App from '../App';
import {PlayCircleOutlined} from '@ant-design/icons';

export default class Hello extends App {
    getIcon() {
        return (
            <PlayCircleOutlined
                style={{fontSize: 70}}
            />
        );
    }
}
