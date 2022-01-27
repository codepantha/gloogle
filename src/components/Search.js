import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDebounce } from 'use-debounce';
import { getResults } from "../redux/results/results";

const Search = () => {
  const [input, setInput] = useState("");
  const [debouncedValue] = useDebounce(input, 300);

  const dispatch = useDispatch();
  const location = useLocation()
  const searchType = location.pathname

  useEffect(() => {
    if (searchType === '/videos')
      dispatch(getResults('/search', `${debouncedValue} videos`))
    else
      dispatch(getResults(searchType, debouncedValue));
  }, [debouncedValue, searchType, dispatch]);

  return (
    <div className="self-center w-100 mb2">
      <div className="w-100 flex shadow-5 br3">
        <div className="w-5 pa3 ba br3 br--left b--near-white gray" style={{ width: '5%', borderRight: 'none' }}>
          <BsSearch className="gray" />
        </div>
        <input
          type="text"
          className="pa3 ba b--near-white br3 br--right gray outline-0"
          style={{ width: '95%', borderLeft: 'none' }}
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        </div>
    </div>
  );
};

export default Search;
