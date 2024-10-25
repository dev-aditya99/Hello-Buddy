import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="w-full pb-2">
      <form className="flex gap-2">
        {/* search input  */}
        <label className="input input-bordered flex items-center gap-2 bg-transparent">
          <input type="text" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>

        {/* search btn  */}
        <button className="btn btn-neutral">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
