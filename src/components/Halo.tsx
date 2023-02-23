import React from "react";

interface dataArray {
  label: string;
  value: string;
}

interface HaloProps {
  nama: string;
  tanggal: number;
  benar: boolean;
  onClick?: () => void;
  data?: dataArray[];
}

const Halo = ({ nama, tanggal, benar, data, onClick }: HaloProps) => {
  return (
    <div onClick={onClick}>
      <h1>{`Halo, ${nama}`}</h1>
      <p>{`Tanggal: ${tanggal}`}</p>
      <p>{`Benar: ${benar}`}</p>
      {data?.map((item, index) => (
        <p key={index}>{`${item.label}: ${item.value}`}</p>
      ))}
    </div>
  );
};

export default Halo;
