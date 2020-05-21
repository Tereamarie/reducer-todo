import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "app state");

  return (
    <div className="App">
      <div className="App-header">
        <h1> My Todo List App</h1>
        <TodoForm dispatch={dispatch} todos={state}/>
      </div>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
