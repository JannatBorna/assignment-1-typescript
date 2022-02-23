import React, { useState, ChangeEvent, FormEvent } from 'react'

interface TodoFormProps{
    addTodo: AddTodo;
}


export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form className="todo_form">
      <input type="text" value={newTodo} className="todo_input" placeholder="Add a Name" onChange={handleChange}/>
        <button type="submit"  onClick={handleSubmit}className="todo_button">
         Add
        </button>
    </form>
  )
}

 