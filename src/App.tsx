import * as React from "react";
import "./App.css";
import { StoreContext, StoreContextType } from "./StoreContext";
import { TodoList } from "./TodoList";
import { InputForm } from "./InputForm";

class App extends React.Component<any, StoreContextType> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      currentFormText: "",
      add: this.add,
      delete: todo =>
        this.setState({
          todos: this.state.todos.filter(t => todo.name !== t.name)
        }),
      udpateCurentFormText: currentFormText =>
        this.setState({ currentFormText })
    };
  }

  add = () => {
    this.setState({
      todos: [...this.state.todos, { name: this.state.currentFormText }],
      currentFormText: ""
    });
  };

  public render() {
    return (
      <StoreContext.Provider value={this.state}>
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
