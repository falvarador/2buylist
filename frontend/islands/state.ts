import { computed, signal } from "@preact/signals";

export interface ShoppingItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface ShoppingList {
  id: string;
  name: string;
  icon: string;
  items: ShoppingItem[];
}

export const darkMode = signal(false);
export const showModal = signal(false);
export const currentListIndex = signal(0);
export const shoppingLists = signal<ShoppingList[]>([
  {
    id: "1",
    name: "Groceries",
    icon: "fa-shopping-cart",
    items: [{
      id: 1,
      text: "Milk",
      completed: false,
    }, {
      id: 2,
      text: "Bread",
      completed: true,
    }],
  },
]);

export const pendingCount = computed(() => {
  const currentList = shoppingLists.value[currentListIndex.value];
  return currentList
    ? currentList.items.filter((item) => !item.completed).length
    : 0;
});

export const addItem = (text: string) => {
  if (!text.trim()) return;

  const newLists = [...shoppingLists.value];
  newLists[currentListIndex.value].items.unshift({
    id: Date.now(),
    text,
    completed: false,
  });
  shoppingLists.value = newLists;
};

export const toggleItem = (itemId: number) => {
  const newLists = [...shoppingLists.value];
  const item = newLists[currentListIndex.value].items.find((i) =>
    i.id === itemId
  );

  if (item) {
    item.completed = !item.completed;
  }

  shoppingLists.value = newLists;
};
