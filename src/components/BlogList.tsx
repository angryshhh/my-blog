import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogList.css';

interface MarkdownInfo {
  fileName: string;
  time: string;
  title: string;
  tags: string[];
}

interface Props {
  blogList: MarkdownInfo[];
  rootPath: string;
}

const BlogList: React.FC<Props> = (props: Props) => {
  let history = useHistory();
  return (<div className="blog-list">
    {
      props.blogList.map(blog => <a
        href={blog.fileName}
        key={blog.fileName}
        onClick={e => {
          e.preventDefault();
          history.push(`${props.rootPath}${blog.fileName}`)
        }}
      >
        {blog.title}
      </a>)
    }
  </div>);
}

export default BlogList;
