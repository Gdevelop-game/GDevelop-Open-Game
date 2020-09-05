import React, { useState } from "react";

import Connect from "../Components/Connect";
import MenuButton from "../Components/MenuButton";
import AppList from "../PhoneApps/AppsLister.tsx";
import AppManager from "../PhoneApps/AppsManager";

import { message } from "antd";

export function Main() {
  const [currentApp, setApp] = useState(-1);
  const [connected, setConnected] = useState(false);
  const [connection, setConnection] = useState(null);

  const app =
    currentApp < 0 ? (
      <AppList appManager={AppManager} setApp={setApp} />
    ) : (
      AppManager[currentApp].getComponent({ connection: connection })
    );

  return (
    <div>
      {connected && (
        <div>
          <div>{app}</div>
          <MenuButton onClick={() => setApp(-1)} />
        </div>
      )}
      {!connected && (
        <Connect
          onConnectionEstablished={(connection) => {
            setConnection(connection);
            setConnected(true);
          }}
          onConnectionLost={(error) => {
            setConnected(false);
            message.error(
              error
                ? "Disconnected from Game. Reason: " + error
                : "Disconnected from Game."
            );
          }}
        />
      )}
    </div>
  );
}
