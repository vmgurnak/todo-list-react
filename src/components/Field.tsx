import { forwardRef } from 'react';

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  type?: string;
  value?: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Example controlled component with useState

const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { className = '', id, label, type = 'text', value, onInput } = props;

  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
    </div>
  );
});

export default Field;

// // Example uncontrolled component with useRef

// const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
//   const { className = '', id, label, type = 'text', value, onInput } = props;

//   return (
//     <div className={`field ${className}`}>
//       <label className="field__label" htmlFor={id}>
//         {label}
//       </label>
//       <input
//         className="field__input"
//         id={id}
//         placeholder=" "
//         autoComplete="off"
//         type={type}
//         value={value}
//         onInput={onInput}
//         ref={ref}
//       />
//     </div>
//   );
// });

// export default Field;
