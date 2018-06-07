import * as React from "react";
import { StoreContext } from "./StoreContext";

export const TodoList = () => (
  <div>
    <StoreContext.Consumer>
      {({ todos }) =>
        todos.map(todo => (
          <div
            key={todo.name}
            style={{
              padding: "2em",
              boxShadow: "0 3px 20px rgba(0, 0, 0, .1)"
            }}
          >
            {todo.name}
          </div>
        ))
      }
    </StoreContext.Consumer>
  </div>
);
