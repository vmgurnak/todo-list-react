import Button from './Button';
import Field from './Field';

interface AddTaskFormProps {
  addTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  const { addTask } = props;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field className="todo__field" label="New task title" id="new-task" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
