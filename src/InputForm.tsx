import * as React from "react";
import { StoreContext } from "./StoreContext";

export const InputForm = () => (
  <StoreContext.Consumer>
    {({ add, udpateCurentFormText, currentFormText }) => (
      <form style={{ margin: "3em" }}>
        <label>
          Todo
          <input
            type="text"
            name="name"
            style={{ borderColor: "#444", padding: "0.5em", margin: "1em" }}
            value={currentFormText}
            onChange={({ target: { value } }) => udpateCurentFormText(value)}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={event => {
            event.preventDefault();
            add();
          }}
        />
      </form>
    )}
  </StoreContext.Consumer>
);
