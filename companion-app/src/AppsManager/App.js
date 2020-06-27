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
     * @returns {React.Component}
     */
    getComponent() {};

    /**
     * Returns the Icon of the App as a component.
     * @returns {React.Component}
     */
    getIcon() {};
}

export default App;
