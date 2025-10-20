import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import Todoinfo from './Todoinfo';
import TodoList from './TodoList';

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'Task 1', isDone: false },
    { id: 'task-2', title: 'Task 2', isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log('delete tasks');
  };

  const deleteTask = (taskId: string) => {
    console.log(`delete task ${taskId}`);
  };

  const toggleTaskComplete = (taskId: string, isDone: boolean) => {
    console.log(`Task ${taskId} ${isDone ? 'complete' : 'incomplete'}`);
  };

  const filterTask = (query: string) => {
    console.log(`filter tasks by ${query}`);
  };

  const addTask = (): void => {
    console.log('Add task');
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTask} />
      <Todoinfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
