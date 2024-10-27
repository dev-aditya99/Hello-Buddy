import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import { toast } from "react-hot-toast";
import useGetConversations from "../../Hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return false;

    if (search?.length < 3) {
      toast.error("Search term must be at least 3 characters long");
      return false;
    }

    const conversation = conversations?.find((eachConv) =>
      (eachConv?.first_name + " " + eachConv?.last_name)
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };
  return (
    <div className="w-full pb-2">
      <form onSubmit={handleSubmit} className="flex gap-2">
        {/* search input  */}
        <label className="input input-bordered flex items-center gap-2 bg-transparent">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
