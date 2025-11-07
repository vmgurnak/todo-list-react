import { useState, useEffect } from 'react';

import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import Todoinfo from './Todoinfo';
import TodoList from './TodoList';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

const Todo = () => {
  const defauiltInitialTasks: Task[] = [
    { id: 'task-1', title: 'Task 1', isDone: false },
    { id: 'task-2', title: 'Task 2', isDone: true },
  ];

  const savedTasks = localStorage.getItem('tasks');

  const initialTasks = savedTasks
    ? JSON.parse(savedTasks).length > 0
      ? JSON.parse(savedTasks)
      : defauiltInitialTasks
    : defauiltInitialTasks;

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const deleteAllTasks = () => {
    const isConfirmed: boolean = window.confirm(
      'Are you sure you want to delete all tasks?'
    );

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId: string, isDone: boolean) => {
    setTasks(
      tasks.map((task: Task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      })
    );
  };

  const addTask = (): void => {
    if (newTaskTitle.trim().length > 0) {
      const newTask: Task = {
        id: crypto.randomUUID() || Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setSearchQuery('');
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLowerCase();

  const filteredTasks: Task[] | null =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery)
        )
      : null;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Todoinfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        filterdTasks={filteredTasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
