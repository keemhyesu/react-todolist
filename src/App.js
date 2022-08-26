import "./App.css";
import styled, { createGlobalStyle, css } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoItem from "./components/TodoItem";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoProvider";

const GlobalStyle = createGlobalStyle`
body{
  background: gray;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
