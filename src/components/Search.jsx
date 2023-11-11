const Search = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <input
        type="text"
        placeholder="Cari catatan..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Search;
