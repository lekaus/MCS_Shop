import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название товара:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="border border-solid border-gray-400 rounded-[3px] py-3 px-2.5 text-[16px] m-2.5"
          // className="textfield"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание товара:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="border border-solid border-gray-400 rounded-[3px] py-3 px-2.5 text-[16px] m-2.5"
          // className="textfield"
        />
      </div>
      <div className="block">
        <div className="block">{props.valid}</div>
        <input
          type="submit"
          className="border-none bg-[#0000ff] text-white text-[16px] rounded-[3px] py-[15px] px-[20px] min-w-[150px] cursor-pointer transition-opacity duration-200 ease-out shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] hover:opacity-80 disabled:opacity-40 active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px m-2.5"
          value="Добавить"
        />
      </div>
    </form>
  );
}
