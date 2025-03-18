import React from "react";
import { Input } from "antd";

const TextInput = ({ text, setText }) => {
  return (
    <div>
      내용:
      <Input style={{ width: 400 }} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default TextInput;
