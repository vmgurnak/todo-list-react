import TodoItem from './TodoItem';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoListProps {
  tasks: Task[];
  filterdTasks: Task[] | null;
  onDeleteTaskButtonClick: (taskId: string) => void;
  onTaskCompleteChange: (taskId: string, isDone: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const {
    tasks = [],
    filterdTasks,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;

  const hasTasks: boolean = tasks.length > 0;
  const isEmptyFilteredTasks: boolean = filterdTasks?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>;
  }

  return (
    <ul className="todo__list">
      {(filterdTasks ?? tasks).map((task) => (
        // <TodoItem
        //   className="todo__item"
        //   id={task.id}
        //   title={task.title}
        //   isDone={task.isDone}
        // />
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
