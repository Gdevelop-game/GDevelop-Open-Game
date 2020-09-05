import React from "react";
import App from "../App";

import { Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default class Hello extends App {
  name = "Hello World";

  getIcon() {
    return <PlayCircleOutlined style={{ fontSize: 70 }} />;
  }

  getComponent() {
    return (
      <div
        style={{
          alignText: "center",
        }}
      >
        <Title level={2}>Hello World!</Title>
      </div>
    );
  }
}
