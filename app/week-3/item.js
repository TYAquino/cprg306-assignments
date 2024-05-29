import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li class="border border-sky-500 w-full max-w-xs m-4 p-2 flex items-center list-inside list-disc">
      <div class="w-full">
        <p class="text-black-600 font-semibold">{name}</p>
        <p class="text-sm text-black-600">Quantity: {quantity}</p>
        <p class="text-sm text-black-600">Category: {category}</p>
      </div>
    </li>
  );
}
