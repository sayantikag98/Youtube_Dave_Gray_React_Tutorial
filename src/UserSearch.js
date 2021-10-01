export default function UserSearch({ searchState, setSearchState }) {
  const HandlerOnSearchChange = (event) => {
    setSearchState(event.target.value);
  };
  return (
    <form id="form-item" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search-item">Search here:</label>
      <input
        placeholder="Search keyword"
        id="search-item"
        value={searchState}
        onChange={HandlerOnSearchChange}
      />
    </form>
  );
}
