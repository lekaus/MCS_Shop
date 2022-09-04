import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="list-none m-2.5 p-0">
      {props.items.map((item) => (
        <li key={item.id} className="mb-20 m-2.5 list-item">
          <Item info={item} />
          <button
            className="bg-white text-black border border-solid border-light-gray rounded-[3px] text-[16px] py-1.25 px-2.5 min-w-12.5 shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px hover:opacity-80 disabled:opacity-40 disabled:cursor-disabled transition-opacity duration-200 ease-out m-5"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

