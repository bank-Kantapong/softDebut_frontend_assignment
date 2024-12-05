import SOne_Mobile_search from "../Assets/SOne_Mobile_search.png";

const Search = () => {
  return (
    <div className="flex items-center w-64 h-6 overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-6 border border-main placeholder:text-sm placeholder:px-1"
      />
      <button className="h-6 bg-black border border-main">
        <img src={SOne_Mobile_search} alt="search" width={25} height={25} />
      </button>
    </div>
  );
};

export default Search;
