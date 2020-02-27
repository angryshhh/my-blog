import React from 'react';
import Showdown from 'showdown';
import './Markdown.css';

const converter = new Showdown.Converter();
converter.setFlavor('github');
converter.setOption('openLinksInNewWindow', true);

interface Props {
  markdownText: string;
}

const Markdown: React.FC<Props> = (props) => {

  return <div
    className="markdown"
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(props.markdownText)
    }}
  />;
};

export default Markdown;
