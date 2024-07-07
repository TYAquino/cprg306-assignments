"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import {
  getItem,
  addItem,
  deleteItem,
} from "../_services/shopping-list-services";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("./week-10");
    }
  }, [user, router]);

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        try {
          const itemsList = await getItem(user.uid);
          setItems(itemsList);
        } catch (error) {
          console.error("Error loading items: ", error);
        }
      }
    };
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { id: newItemId, ...newItem }]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (user) {
      try {
        await deleteItem(user.uid, itemId);
        setItems(items.filter((item) => item.id !== itemId));
      } catch (error) {
        console.error("Error deleting this item: ", error);
      }
    }
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
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
            onDeleteItem={handleDeleteItem}
          />
        </div>
        <div className="w-1/2 p-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
