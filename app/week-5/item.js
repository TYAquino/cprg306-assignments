import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li class="border rounded border-sky-500 mx-auto w-full max-w-xs m-4 p-2 list-none hover:scale-110 transition duration-300 ease-in-out">
      <div>
        <p class="text-black-600 font-semibold text-center">{name}</p>
        <p class="text-sm text-black-600 text-center">Buy in {quantity}</p>
      </div>
    </li>
  );
}
