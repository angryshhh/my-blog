import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    fetch('/articles/20200123.md')
    .then(response => response.text())
    .then(text => setMarkdownText(text))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <pre>
        {markdownText}
      </pre>
    </div>
  );
}

export default App;
