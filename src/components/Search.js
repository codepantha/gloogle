import React, { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <div className="self-center w-100 mb2">
      <input
        type="text"
        className="w-100 pa3 ba b--near-white br3 shadow-5 gray"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
