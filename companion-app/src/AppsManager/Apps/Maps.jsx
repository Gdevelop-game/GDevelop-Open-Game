import React from 'react';
import App from '../App';
import {BlockOutlined} from '@ant-design/icons';

export default class Hello extends App {
    getIcon() {
        return (
            <BlockOutlined 
                style={{fontSize: 70}}
            />
        );
    }
}
