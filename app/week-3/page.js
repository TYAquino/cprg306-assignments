import React from "react";
import ItemList from "./item-list";

export default function Page({ shoppingList }) {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-5 text-center">Shopping List :D</h1>
      <ItemList item={shoppingList} />
    </main>
  );
}
