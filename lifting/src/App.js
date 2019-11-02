import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import uuid from "uuid/v1"; //hvad gør denne?

/**
 * Dette er den grå boks der omslutter den grønne og orange
 * Alle state manipulerende metoder er placeret i denne fil
 */

function App() {
  //overkomponentet
  const initialData = [
    //startdata
    { id: uuid(), todoText: "Wake up" },
    { id: uuid(), todoText: "Make Coffee" },
    { id: uuid(), todoText: "Drink Coffee" }
  ];
  const [todos, setTodos] = useState(initialData); //manipulering af initialData, todos indeholder todos
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" }); //tomt objekt
  //console.log(todos);

  const addTodo = todo => {
    //todo er den todo der blev skrevet i input
    //addTodo gives som prop til NewTodo.js i JSX nedenunder
    if (todo.id === "") {
      //hvis ikke har id, ny todo
      // id=-1 Indicates a new object
      todo.id = uuid(); //gives den et id?
      todos.push(todo); //putter todo i array todos, nedenunder bruges setTodos
    } else {
      //hvis den allerede eksisterer
      //if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id); //find todo ud fra id i todos array, lav ny todo
      //todoToEdit: gammel, todo: ny
      todoToEdit.todoText = todo.todoText; //sæt todoToEdit tekst lig med teksten fra den nye todo
    }
    setTodos([...todos]); //gem nye todo i todos
    setNewTodo({ id: "", todoText: "" });
  };

  //denne kan også laves med index
  const editTodo = todo => {
    addTodo(todo); //kald addTodo, else, husk at dette kalder JSX og dermed NewTodo.js
    setNewTodo(todo);
  };

  const deleteTodo = index => {
    const deleted = todos.filter(todo => todo.id !== index);

    setTodos([...deleted]);
    setNewTodo({ id: "", todoText: "" });
  };

  //const editTodo = index => {};

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            addTodo={addTodo} //addTodo gives som prop til NewTodo.js
            nextTodo={newTodo}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
