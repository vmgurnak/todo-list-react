import { useState, useEffect, useRef } from 'react';

import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import Todoinfo from './Todoinfo';
import TodoList from './TodoList';
import Button from './Button';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

//Example controlled component with useState

const Todo = () => {
  const defaultInitialTasks: Task[] = [
    { id: 'task-1', title: 'Task 1', isDone: false },
    { id: 'task-2', title: 'Task 2', isDone: true },
  ];

  const savedTasksString = localStorage.getItem('tasks');
  let initialTasks: Task[] = defaultInitialTasks;

  if (savedTasksString) {
    try {
      const parsed = JSON.parse(savedTasksString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        initialTasks = parsed;
      }
    } catch {
      console.warn('Invalid JSON in localStorage');
    }
  }

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const newTaskInputRef = useRef<HTMLInputElement>(null);
  const firsrIncomleteTaskRef = useRef<HTMLLIElement | null>(null);
  const firstIncomleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

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
      // setTasks([...tasks, newTask]);
      setTasks((prev) => [...prev, newTask]);
      setNewTaskTitle('');
      setSearchQuery('');
      newTaskInputRef.current?.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Auto focus input with useRef
  useEffect(() => {
    // if (newTaskInputRef.current) {
    //   newTaskInputRef.current.focus();
    // }
    newTaskInputRef.current?.focus();
  }, []);

  // Count render component with useRef without additional render
  const renderCount = useRef(0);
  useEffect(() => {
    // renderCount.current += 1;
    renderCount.current++;
    console.log('Component Todo render ${renderCoint.current} times');
  });

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
        newTaskInputRef={newTaskInputRef}
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
      <Button
        onClick={() =>
          firsrIncomleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filterdTasks={filteredTasks}
        firsrIncomleteTaskRef={firsrIncomleteTaskRef}
        firstIncomleteTaskId={firstIncomleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;

// // Example uncontrolled component with useRef

// const Todo = () => {
//   const defaultInitialTasks: Task[] = [
//     { id: 'task-1', title: 'Task 1', isDone: false },
//     { id: 'task-2', title: 'Task 2', isDone: true },
//   ];

//   const savedTasksString = localStorage.getItem('tasks');
//   let initialTasks: Task[] = defaultInitialTasks;

//   if (savedTasksString) {
//     try {
//       const parsed = JSON.parse(savedTasksString);
//       if (Array.isArray(parsed) && parsed.length > 0) {
//         initialTasks = parsed;
//       }
//     } catch {
//       console.warn('Invalid JSON in localStorage');
//     }
//   }

//   const [tasks, setTasks] = useState<Task[]>(initialTasks);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const newTaskInputRef = useRef<HTMLInputElement>(null);

//   const deleteAllTasks = () => {
//     const isConfirmed: boolean = window.confirm(
//       'Are you sure you want to delete all tasks?'
//     );

//     if (isConfirmed) {
//       setTasks([]);
//     }
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const toggleTaskComplete = (taskId: string, isDone: boolean) => {
//     setTasks(
//       tasks.map((task: Task) => {
//         if (task.id === taskId) {
//           return { ...task, isDone };
//         }
//         return task;
//       })
//     );
//   };

//   const addTask = (): void => {
//     const raw = newTaskInputRef.current?.value;
//     const newTaskTitle = raw?.trim();

//     if (!newTaskTitle) return;

//     const newTask: Task = {
//       id: crypto.randomUUID() || Date.now().toString(),
//       title: newTaskTitle,
//       isDone: false,
//     };
//     setTasks((prev) => [...prev, newTask]);

//     if (newTaskInputRef.current) newTaskInputRef.current.value = '';
//     // newTaskInputRef.current?.value = '';
//     setSearchQuery('');
//   };

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const clearSearchQuery = searchQuery.trim().toLowerCase();

//   const filteredTasks: Task[] | null =
//     clearSearchQuery.length > 0
//       ? tasks.filter(({ title }) =>
//           title.toLowerCase().includes(clearSearchQuery)
//         )
//       : null;

//   return (
//     <div className="todo">
//       <h1 className="todo__title">To Do List</h1>
//       <AddTaskForm addTask={addTask} newTaskInputRef={newTaskInputRef} />
//       <SearchTaskForm
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//       />
//       <Todoinfo
//         total={tasks.length}
//         done={tasks.filter((task) => task.isDone).length}
//         onDeleteAllButtonClick={deleteAllTasks}
//       />
//       <TodoList
//         tasks={tasks}
//         filterdTasks={filteredTasks}
//         onDeleteTaskButtonClick={deleteTask}
//         onTaskCompleteChange={toggleTaskComplete}
//       />
//     </div>
//   );
// };

// export default Todo;
