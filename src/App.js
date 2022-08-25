import "./App.css";
import styled, { createGlobalStyle, css } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoItem from "./components/TodoItem";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
body{
  background: gray;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
