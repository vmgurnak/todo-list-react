interface FieldProps {
  className?: string;
  id: string;
  label: string;
  type?: string;
  value: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = (props) => {
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
      />
    </div>
  );
};

export default Field;
