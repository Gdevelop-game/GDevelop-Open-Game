import React from 'react';
import {StopOutlined} from '@ant-design/icons';

/**
 * Base Interface defining an App.
 * @interface
 */
class App {
    /**
     * The name of the App
     * @type {string}
     */
    name = "None";

    /**
     * Returns the app as a component.
     */
    getComponent() {
        return <p>No Interface</p>;
    };

    /**
     * Returns the Icon of the App as a component.
     */
    getIcon() {
        return <StopOutlined
            style={{fontSize: 70}}
        />;
    };
}

export default App;
