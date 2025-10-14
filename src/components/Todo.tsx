import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import Todoinfo from './Todoinfo';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <Todoinfo />
      <TodoList />
    </div>
  );
};

export default Todo;
