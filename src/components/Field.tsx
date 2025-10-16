interface FieldProps {
  className?: string;
  id?: string;
  label?: string;
  type?: string;
}

const Field: React.FC<FieldProps> = (props) => {
  const { className = '', id, label, type = 'text' } = props;

  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id || 'new-task'}>
        {label}
      </label>
      <input
        className="field__input"
        id={id || 'new-task'}
        type={type}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
