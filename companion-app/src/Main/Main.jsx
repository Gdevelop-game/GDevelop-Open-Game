import React from 'react';
import {Row, Col} from 'antd';
import appManager from '../AppsManager/AppsManager';

export function Main() {
    let appList = [];
    let count = 0;
    while(count < appManager.length) {
        let rowContent = [];
        for(let i = 0; i<4; i++) {
            if(appManager[count] !== undefined)
                rowContent.push(
                    <Col 
                      className="gutter-row" 
                      span={6}
                      key={count}
                    >
                        {appManager[count++].getIcon()}
                    </Col>
                );
        }
        appList.push(
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {rowContent}
            </Row>
        );
    }
    
    return appList;
}
