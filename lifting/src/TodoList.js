import React from "react";
import PropTypes from "prop-types";

/**
 * Dette er den orange boks til venstre
 *
 * Skriver alle todos ud
 */

//onClick={(e => e.preventDefault(), deleteTodo(todo.id))}

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  console.log("todolisten");
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todoText}
            <a
              href="#/"
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              {" "}
              (delete{" "}
            </a>
            <a href="#/" onClick={e => editTodo(todo)}>
              , edit){" "}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
};
