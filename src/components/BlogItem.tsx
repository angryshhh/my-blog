import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogItem.css';

interface MarkdownInfo {
  fileName: string;
  time: string;
  title: string;
  tags: string[];
}

interface Props {
  markdownInfo: MarkdownInfo;
}

const rootPath = `/${window.location.pathname.indexOf('my-blog') > -1 ? 'my-blog/' : ''}`;

const BlogItem: React.FC<Props> = (props) => {
  let history = useHistory();

  return <a
    className="blog-item"
    href={props.markdownInfo.fileName}
    onClick={e => {
      e.preventDefault();
      history.push(`${rootPath}${props.markdownInfo.fileName.slice(0, -3)}`);
    }}
  >
    <span>{props.markdownInfo.title}</span>
    <br />
    <span>{props.markdownInfo.time}</span>
    <br />
    {
      props.markdownInfo.tags.length > 0 ? '🏷:' : ''
    }
    {
      props.markdownInfo.tags.map(tag => <span key={tag}>{tag}</span>)
    }
  </a>;
};

export default BlogItem;
