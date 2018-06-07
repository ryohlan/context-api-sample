import * as React from "react";

export interface StoreContextType {
  todos: Todo[];
  currentFormText: string;
  udpateCurentFormText: (t: string) => void;
  add: () => void;
  delete: (todo: Todo) => void;
}

const initial: StoreContextType = {
  todos: [],
  currentFormText: "",
  add: () => undefined,
  delete: () => undefined,
  udpateCurentFormText: () => undefined
};

export const StoreContext = React.createContext<StoreContextType>(initial);
