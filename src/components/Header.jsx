import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-gray-900 py-5 font-rubik">
      <div>
        <h1 className="text-white text-center text-xl font-bold mb-5 uppercase">
          Search Images with unsplash API
        </h1>
        <span className="text-white flex justify-center m-5 uppercase">
          Made by Jatin
        </span>
        {children}
      </div>
      {/* <div className="px-3 flex justify-center items-center">
        <input
          type="search"
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl max-w-md"
          placeholder="Search images here"
        />
        <button className="text-white bg-orange-600 px-5 p-2.5 rounded-tr rounded-br focus:ring-1 focus:ring-blue-300">
          Search
        </button>
      </div> */}
    </div>
  );
};

export default Header;
