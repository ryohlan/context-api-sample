import * as React from "react";
import { StoreContext } from "./StoreContext";

export const TodoList = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <StoreContext.Consumer>
      {({ todos }) =>
        todos.map(todo => (
          <div
            key={todo.name}
            style={{
              padding: "2em",
              width: 200,
              marginBottom: "1em",
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
