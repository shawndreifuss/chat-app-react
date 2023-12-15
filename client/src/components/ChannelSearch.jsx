import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  // Creating Query to search for channels
  const [query, setQuery] = useState("");
  // Creating loading state
  const [loading, setLoading] = useState(false);
  
    // Getting channels
    const getChannels = async (text) => {   
        try {
      // TODO: Fetch channels

        } catch (error) {
            setQuery('')
        }
    }

  // Method for getting Search
  const onSearch = (event) => {
    //Prevents page from reloading
    event.preventDefault();

    setLoading(true);
    // Querying value input 
    setQuery(event.target.value);
    // Getting channels
    getChannels(event.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
