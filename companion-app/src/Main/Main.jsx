import React, {useState} from 'react';
import { Button } from 'antd';

import AppList from '../AppsManager/AppsLister.tsx';
import appManager from '../AppsManager/AppsManager';

export function Main() {
    const [currentApp, setApp] = useState(-1);

    return <div>
        {currentApp === -1 && <AppList appManager={appManager} setApp={setApp}/>}
        {currentApp !== -1 && appManager[currentApp].getComponent()}
        <Button onClick={() => setApp(-1)}>Menu</Button>
    </div>;
}
