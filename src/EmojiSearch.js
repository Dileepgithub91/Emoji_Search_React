import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const emojiList = [
  { emoji: '😀', name: 'Grinning Face' },
  { emoji: '😉', name: 'Winking Face' },
  { emoji: '😛', name: 'Tongue' },
  { emoji: '😝', name: 'Squinting' },
  { emoji: '🤪', name: 'Zany Face' },
  { emoji: '🤩', name: 'Star-Struck' },
  { emoji: '🤗', name: 'Hugging Face' },
  { emoji: '🤔', name: 'Thinking Face' },
  { emoji: '🤫', name: 'Shushing Face' },
  // Add more emojis here
];

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const results = emojiList.filter((emoji) =>
      emoji.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Emoji Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for an emoji..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="emoji-container">
        {searchResults.map((emoji, index) => (
          <div key={index} className="emoji">
            {emoji.emoji} - {emoji.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearch;
