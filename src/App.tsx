import * as React from "react";
import "./App.css";
import { StoreContext } from "./StoreContext";
import { TodoList } from "./TodoList";
import { InputForm } from "./InputForm";

class App extends React.Component<
  any,
  { todos: Todo[]; currentFormText: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      currentFormText: ""
    };
  }
  udpateCurentFormText = (currentFormText: string) =>
    this.setState({ currentFormText });

  add = () => {
    this.setState({
      todos: [...this.state.todos, { name: this.state.currentFormText }],
      currentFormText: ""
    });
  };

  public render() {
    return (
      <StoreContext.Provider
        value={{
          ...this.state,
          add: this.add,
          udpateCurentFormText: this.udpateCurentFormText
        }}
      >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Todo List</h1>
          </header>
          <InputForm />
          <TodoList />
        </div>
      </StoreContext.Provider>
    );
  }
}

export default App;
