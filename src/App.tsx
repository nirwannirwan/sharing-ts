import React, { useState } from "react";
import { Space } from "antd";
import "./App.css";
import { Halo } from "./components";

function App() {
  const data = [
    {
      label: "Nama",
      value: "Nirwansyah"
    },
    {
      label: "Alamat",
      value: "Bandung"
    }
  ];

  return (
    <div className="App">
      <Space direction="vertical">
        <Halo
          nama="Typescript"
          tanggal={25}
          benar={true}
          data={data}
          onClick={() => alert("Function Props")}
        />
      </Space>
    </div>
  );
}

export default App;
