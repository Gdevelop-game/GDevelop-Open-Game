import React from 'react';
import { Button } from 'antd';
import {HomeFilled} from '@ant-design/icons';

export default function(props) {
    return (
        <Button onClick={props.onClick} style={{bottom: "0px", position: "fixed", width: "100%", height: "10%"}}>
            <HomeFilled  style={{fontSize: "40px"}}/>
        </Button>
    );
}