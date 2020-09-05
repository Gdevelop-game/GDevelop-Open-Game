import React from "react";
import App from "../App";

import { Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default class Hello extends App {
  name = "Say Hi";

  getIcon() {
    return <SmileOutlined style={{ fontSize: 70 }} />;
  }

  getComponent(props) {
    return (
      <div
        style={{
          alignText: "center",
        }}
      >
        <Button onClick={() => props.connection.send({ type: "SayHi" })}>
          Say Hello
        </Button>
      </div>
    );
  }
}
