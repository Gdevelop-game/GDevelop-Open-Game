import React from "react";
import App from "../App";
import { BlockOutlined } from "@ant-design/icons";

export default class Hello extends App {
  name = "Map";

  getIcon() {
    return <BlockOutlined style={{ fontSize: 70 }} />;
  }

  getComponent() {
    return (
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.hyrlK9tYdJEp4KP-j1_zAAHaMX&pid=Api"
        alt=""
      ></img>
    );
  }
}
