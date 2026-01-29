export interface ShoppingItem {
  id: number | string;
  text: string;
  completed: boolean;
}

export interface ShoppingList {
  id: string;
  name: string;
  icon: string;
  items: ShoppingItem[];
}

export interface AppState {
  lists: ShoppingList[];
  currentListIndex: number;
}
