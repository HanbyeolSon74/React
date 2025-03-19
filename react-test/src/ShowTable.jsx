import React, { useState } from "react";
import { Button, Table } from "antd";
import "./TableCss.css";

const ShowTable = ({ data, onDelete }) => {
  const [titleColor, setTitleColor] = useState("");

  const changeTitleColor = (color) => {
    setTitleColor(color);
  };

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
      className: "custom-th",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
      className: "custom-th",
    },
    {
      title: "별명",
      dataIndex: "nickName",
      key: "nickName",
      className: "custom-th",
    },
    {
      title: "취미",
      dataIndex: "hobby",
      key: "hobby",
      className: "custom-th",
    },
    {
      title: "관리",
      render: (record) => (
        <Button onClick={() => onDelete(record.key)} danger>
          삭제
        </Button>
      ),
      className: "custom-th",
    },
  ];

  return (
    <>
      <div className="button-container">
        <Button onClick={() => changeTitleColor("#ffcccc")}>빨간색</Button>
        <Button onClick={() => changeTitleColor("#ccffcc")}>초록색</Button>
        <Button onClick={() => changeTitleColor("#ccccff")}>파란색</Button>
      </div>

      <Table columns={columns} dataSource={data} className="custom-table" />

      <style>
        {`
          .ant-table-thead > tr > th {
            background-color: ${titleColor} !important;
          }
        `}
      </style>
    </>
  );
};

export default ShowTable;
