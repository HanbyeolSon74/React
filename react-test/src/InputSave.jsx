import React from "react";
import { Button, Input, notification } from "antd";
import { useFormik } from "formik";
import "./InputSave.css";

const InputSave = ({ onAdd }) => {
  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },

    onSubmit: (values, {}) => {
      onAdd(values);
      notification.success({ message: "저장되었습니다" });
    },
  });

  return (
    <form onSubmit={userFormik.handleSubmit}>
      <Input
        name="name"
        placeholder="이름을 입력해 주세요."
        value={userFormik.values.name}
        onChange={userFormik.handleChange}
      />
      <Input
        name="age"
        placeholder="나이를 입력해 주세요."
        value={userFormik.values.age}
        onChange={userFormik.handleChange}
      />
      <Input
        name="nickName"
        placeholder="별명을 입력해 주세요."
        value={userFormik.values.nickName}
        onChange={userFormik.handleChange}
      />
      <Input
        name="hobby"
        placeholder="취미를 입력해 주세요."
        value={userFormik.values.hobby}
        onChange={userFormik.handleChange}
      />
      <Button htmlType="submit" type="primary">
        저장
      </Button>
    </form>
  );
};

export default InputSave;
