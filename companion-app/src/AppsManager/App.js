/**
 * Base Interface defining an App.
 */
class App {
    /**
     * The name of the App
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
