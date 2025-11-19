import React from 'react';
import Button from './Button';
import Field from './Field';

// Example controlled component with useState

interface AddTaskFormProps {
  addTask: () => void;
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  newTaskInputRef: React.RefObject<HTMLInputElement | null>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = props;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewTaskTitle(event.target.value)
        }
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;

// // Example uncontrolled component with useRef

// interface AddTaskFormProps {
//   addTask: () => void;
//   newTaskInputRef: React.RefObject<HTMLInputElement | null>;
// }

// const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
//   const { addTask, newTaskInputRef } = props;
//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     addTask();
//   };

//   return (
//     <form className="todo__form" onSubmit={onSubmit}>
//       <Field
//         className="todo__field"
//         label="New task title"
//         id="new-task"
//         ref={newTaskInputRef}
//       />
//       <Button type="submit">Add</Button>
//     </form>
//   );
// };

// export default AddTaskForm;
