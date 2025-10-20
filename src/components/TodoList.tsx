import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { id: string; title: string; isDone: boolean }[];
  onDeleteTaskButtonClick: (taskId: string) => void;
  onTaskCompleteChange: (taskId: string, isDone: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props;

  const hasTasks: boolean = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
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
