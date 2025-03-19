import React, { useEffect, useState } from "react";
import InputSave from "./InputSave";
import ShowTable from "./ShowTable";

const MainPage1 = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userList")) || [];
    setList(storedData);
  }, []);

  // 데이터 추가
  const handleAdd = (newItem) => {
    const newList = [...list, { ...newItem, key: list.length }];
    setList(newList);
    localStorage.setItem("userList", JSON.stringify(newList));
  };

  // 데이터 삭제
  const handleDelete = (key) => {
    const updatedList = list.filter((item) => item.key !== key);
    setList(updatedList);
    localStorage.setItem("userList", JSON.stringify(updatedList));
  };

  return (
    <>
      <InputSave onAdd={handleAdd} />
      <ShowTable data={list} onDelete={handleDelete} />
    </>
  );
};

export default MainPage1;
