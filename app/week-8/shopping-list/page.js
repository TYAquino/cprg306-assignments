"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("./week-8");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems([...shoppingList, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E-\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanName);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="p-8 min-h-screen">
      <div className="flex">
        <div className="w-1/2 p-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2 p-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
