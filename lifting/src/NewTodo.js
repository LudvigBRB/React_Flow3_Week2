import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Dette er den grønne boks til højre
 *
 * Gemmer (eller editer) nye todos
 * Har addTodo og newTodo som props fra App.js
 */

function NewTodo(props) {
  //fik addTodo og newTodo som props i App.js

  //laver en tom todo
  const [todo, setTodo] = useState(props.nextTodo); //nexTodo er newTodo

  useEffect(() => {
    setTodo(props.nextTodo);
  }, [props.nextTodo]); //useEffect kører kun når [props.nextTodo] opfyldes ???

  const saveTodo = evt => {
    //bruger addTodo fra App.js til at gemme todo
    //kører ved klik på Save knappen
    if (todo.todoText === "") {
      return;
    }
    props.addTodo(todo); //addTodo fra App.js
    evt.preventDefault();
  };

  //setTodo manipulerer nextTodo
  //putter nextTodo ind i noget?
  useEffect(() => setTodo({ ...props.nextTodo }), []);

  //udføres ved indtastning af todos
  //evt, event?
  //val, value?
  const onChange = evt => {
    const val = evt.target.value;
    todo.todoText = val;
    setTodo({ ...todo });
  };
  const title = todo.id === "" ? "Create new Todo" : "Edit Todo"; //hvis todo.id er tom laves ny todo, ellers editing
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={todo.todoText} onChange={onChange} />
        <br />
        <br />
        <button onClick={saveTodo} className="btn btn-info">
          Save
        </button>
      </form>
      {todo.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}
export default NewTodo;

NewTodo.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
};
