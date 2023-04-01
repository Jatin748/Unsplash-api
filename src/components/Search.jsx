import React, { useState } from "react";
import { useContext } from "react";
import { imagecontext } from "../App";

const Search = () => {
  const accesskey = "3PrABqr4uRVEmQdTTTf4HKFTKtBhzjxT2r2CjHTEfaE";
  const [searchvalue, setSearchvalue] = useState("");
  const { fetchData } = useContext(imagecontext);
  const handleinputchange = (e) => {
    setSearchvalue(e.target.value);
  };
  const handlebuttonsearch = () => {
    fetchData(
      `search/photos?per_page=50&query=${searchvalue}&client_id=${accesskey}`
    );
    setSearchvalue("");
  };
  const handleentersearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?per_page=50&query=${searchvalue}&client_id=${accesskey}`
      );
      setSearchvalue("");
    }
  };
  return (
    <div className="flex px-3 justify-center">
      <input
        type="search"
        className="bg-gray-50 border border-gray-300 text-sm indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl w-72"
        placeholder="Search images here"
        value={searchvalue}
        onChange={handleinputchange}
        onKeyDown={handleentersearch}
      />
      <button
        className="text-white bg-orange-600 px-6 py-2.5 rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        onClick={handlebuttonsearch}
        disabled={!searchvalue}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
