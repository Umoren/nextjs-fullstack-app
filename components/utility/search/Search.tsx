export interface ISearch {}
  
  const Search: React.FC<ISearch> = () => {
    return (
      <form className="flex flex-col items-center gap-y-5">
        <input
            type="text"
            className="rounded-base border-2 p-3 w-5/6 sm:w-96"
        />
        <button
            type="submit"
            className="btn-primary"
        >
        Google Search
        </button>
        <button
            type="submit"
            className="btn-primary"
        >
            I&apos;m Feeling Lucky
        </button>
      </form>
    );
  };
  
  export default Search;
  