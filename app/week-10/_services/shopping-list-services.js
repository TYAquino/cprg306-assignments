import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItem(userId) {
  const items = [];

  try {
    const itemsCollectionRef = collection(db, `user/${userId}/items`);
    const querySnapshot = await getDocs(itemsCollectionRef);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.error("Error fetching items: ", error);
  } finally {
    console.log("Finished fetching items");
  }

  return items;
}

async function addItem(userId, item) {
  const userDocRef = doc(db, "users", userId);
  const itemsCollectionRef = collection(userDocRef, "items");

  try {
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
}

async function deleteItem(userId, itemId) {
  const itemDocRef = doc(db, "users", userId, "items", itemId);
  try {
    await deleteDoc(itemDocRef);
  } catch (error) {
    console.error("Error deleting item: ", error);
  }
}

export { getItem, addItem, deleteItem };

// async function addItem(userId, item) {
//   try {
//     const docRef = await addDoc(collection(db, "users", userId, "items"), item);
//     console.log("Item created with ID: ", docRef.id);
//     return docRef.id;
//   } catch (error) {
//     console.error("Error adding item: ", error);
//     return null;
//   }
// }

// async function getItem(userId, itemId) {
//   const items = [];

//   const docRef = doc(db, "users", userId, "items", itemId);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Item data:", docSnap.data());
//     return docSnap.data();
//   } else {
//     console.log("No such item!");
//     return null;
//   }
// }

// async function deleteItem(userId, itemId) {
//   const docRef = doc(db, "users", userId, "items", itemId);
//   try {
//     await deleteDoc(docRef);
//     console.log("Item deleted");
//   } catch (error) {
//     console.error("Error deleting item: ", error);
//   }
// }

// export { getItem, addItem, deleteItem };
