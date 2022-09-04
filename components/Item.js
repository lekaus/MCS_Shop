import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="ml-2.5">
        <h2 className="text-3xl font-bold m-[25px]">{info.name}</h2>
        <p className="item-desc m-[16px]">{info.desc}</p>
      </div>
      <div className="flex items-center mb-12.5">
        <button
          className="bg-white text-black border border-solid border-light-gray rounded-[3px] text-[16px] py-[5px] px-[20px] min-[50px] shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80 disabled:opacity-40 disabled:cursor-disabled transition-opacity duration-200 ease-out mx-2.5"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 m-0 p-0 className="text-[16px]">{total ? total : ""}</h3>
        <button className="bg-white text-black border border-solid border-light-gray rounded-[3px] text-[16px] py-[5px] px-[20px] min-[50px] shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80 disabled:opacity-40 disabled:cursor-disabled transition-opacity duration-200 ease-out mx-2.5" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
