import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    // Simulate an API call to fetch a new quote
    const quotes = [
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote(); // Fetch the initial quote

    const intervalId = setInterval(() => {
      fetchQuote(); // Fetch a new quote every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{quote}</h2>
          <p>{author}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
  