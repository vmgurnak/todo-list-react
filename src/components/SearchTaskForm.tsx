import Field from './Field';

interface SearchTaskFormProps {
  onSearchInput: (query: string) => void;
}

const SearchTaskForm: React.FC<SearchTaskFormProps> = (props) => {
  const { onSearchInput } = props;

  return (
    <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        onSearchInput={onSearchInput}
      />
    </form>
  );
};

export default SearchTaskForm;
