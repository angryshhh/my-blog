import React, { useState, useEffect } from 'react';
import Showdown from 'showdown';
import { useParams } from 'react-router-dom';
import './Markdown.css';

const converter = new Showdown.Converter();
converter.setFlavor('github');
converter.setOption('openLinksInNewWindow', true);

const rootPath = `/${window.location.pathname.indexOf('my-blog') > -1 ? 'my-blog/' : ''}`;

const Markdown: React.FC = () => {
  let { fileName } = useParams();
  const [markdownText, setMarkdownText] = useState('');
  useEffect(() => {
    fetch(`${rootPath}articles/${fileName}.md`)
    .then(response => response.text())
    .then(text => setMarkdownText(text))
    .catch(err => console.log(err));

    document.title = (fileName?.split('-')[1] || '') + ' - Trim Ryan';
  }, [fileName]);

  return <div
    className="markdown"
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(markdownText),
    }}
  />;
};

export default Markdown;
