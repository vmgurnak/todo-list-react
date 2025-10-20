interface FieldProps {
  className?: string;
  id?: string;
  label?: string;
  type?: string;
  onSearchInput?: (query: string) => void;
}

const Field: React.FC<FieldProps> = (props) => {
  const { className = '', id, label, type = 'text', onSearchInput } = props;

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
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSearchInput?.(e.target.value);
        }}
      />
    </div>
  );
};

export default Field;
