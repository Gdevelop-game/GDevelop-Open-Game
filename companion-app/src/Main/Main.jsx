import React, {useState} from 'react';
import { Button } from 'antd';
import {HomeFilled} from '@ant-design/icons';
import AppList from '../PhoneApps/AppsLister.tsx';
import appManager from '../PhoneApps/AppsManager';

export function Main() {
    const [currentApp, setApp] = useState(-1);

    return (
        <div>
            <div>
                {currentApp === -1 && <AppList appManager={appManager} setApp={setApp}/>}
                {currentApp !== -1 && appManager[currentApp].getComponent()}
            </div>
            <Button onClick={() => setApp(-1)} style={{"bottom": "0px", position: "fixed"}} block>
                <HomeFilled />
            </Button>
        </div>
    );
}
