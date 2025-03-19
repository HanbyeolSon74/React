import React, { useEffect, useState } from "react";
import LeftSection from "./Left";
import RightSection from "./Right";
import { Button, Input, Modal, notification, Table } from "antd";
import { useFormik } from "formik";

const MainPage1 = () => {
  const data = [
    { name: "qwe", age: "12", nickName: "gfdg", hobby: "434" },
    { name: "asd", age: "23", nickName: "rte", hobby: "543" },
    { name: "wer", age: "34", nickName: "df", hobby: "5465" },
    { name: "retr", age: "45", nickName: "vf", hobby: "5765" },
  ];

  const list = data.map((x, i) => {
    return {
      key: i,
      name: x.name,
      age: x.age,
      nickName: x.nickName,
      hobby: x.hobby,
    };
  });

  // useEffect(() => {
  //   userFormik.setFieldValue("name", data.name);
  //   userFormik.setFieldValue("age", data.age);
  //   userFormik.setFieldValue("nickName", data.nickName);
  //   userFormik.setFieldValue("hobby", data.hobby);
  // }, []);

  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },

    onSubmit: (values) => {
      notification.warning({
        message: "wer",
      });
    },
  });

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "별명",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "취미",
      dataIndex: "hobby",
      key: "hobby",
    },
    {
      title: "관리",
      render: (data) => {
        console.log(data, "asd");
        return <Button onClick={() => {}}>삭제</Button>;
      },
    },
  ];

  return (
    <>
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
        <Button htmlType="submit">저장</Button>
      </form>
      <Table columns={columns} dataSource={list} />
    </>
  );
};

export default MainPage1;
