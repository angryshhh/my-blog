import React, { useState, useEffect } from 'react';
import Markdown from './components/Markdown';
import './App.css';

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    // use github get file list
    fetch('https://api.github.com/repos/angryshhh/my-blog/contents/public/articles')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

    // get a markdown file
    fetch(`${window.location.pathname}articles/20200123.md`)
    .then(response => response.text())
    .then(text => setMarkdownText(text))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Markdown markdownText={markdownText} />
    </div>
  );
}

export default App;
