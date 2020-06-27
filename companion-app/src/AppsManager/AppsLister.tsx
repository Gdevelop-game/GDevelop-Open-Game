import React, {Component} from 'react';
import {Row, Col} from 'antd';
import type App from './App';

type Props = {
    appManager: Array<App>,
    setApp: Function,
}

export default class AppsLister extends Component<Props> {
    render() {
        let appManager = this.props.appManager;
        let appList = [];
        let count = 0;
        while(count < appManager.length) {
            let rowContent = [];
            for(let i = 0; i<4; i++) {
                let c = count; // Bypass Error by redefining inside the loop (https://eslint.org/docs/rules/no-loop-func)
                if(appManager[count] !== undefined)
                    rowContent.push(
                        <Col 
                            className="gutter-row" 
                            span={6}
                            key={count}
                            onClick={() => this.props.setApp(c)}
                        >
                            <div style={{textAlign: "center"}}>
                                {appManager[count].getIcon()}
                                <p>{appManager[count++].name}</p>
                            </div>
                        </Col>
                    );
            }
            appList.push(
                <Row>
                    {rowContent}
                </Row>
            );
        }
        
        return appList;
    }
}