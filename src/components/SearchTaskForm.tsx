import Field from './Field';

interface SearchTaskFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchTaskForm: React.FC<SearchTaskFormProps> = (props) => {
  const { searchQuery, setSearchQuery } = props;

  return (
    <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
      />
    </form>
  );
};

export default SearchTaskForm;
