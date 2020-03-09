import React, { useState } from 'react';
import BlogItem from './BlogItem';
import './BlogList.css';

interface MarkdownInfo {
  fileName: string;
  time: string;
  title: string;
  tags: string[];
}

interface Props {
  blogList: MarkdownInfo[];
}
const pageSize = 7;

const BlogList: React.FC<Props> = (props: Props) => {
  document.title = 'Trim Ryan';
  const pageCount = ~~(props.blogList.length / pageSize) + 1;
  const [pageNum, setPageNum] = useState(0);

  return (<div className="blog-list">
    <div>
      {
        props.blogList
        .slice(pageNum * pageSize, pageNum * pageSize + pageSize)
        .map(blog => <BlogItem
          key={blog.fileName}
          markdownInfo={blog}
        />)
      }
    </div>
    <div className="control-group">
      <a
        href="previous page"
        onClick={e => {
          e.preventDefault();
          if (pageNum !== 0) {
            setPageNum(pageNum - 1);
          }
        }}
      >上一页</a>
      <span>{pageNum + 1} / {pageCount}</span>
      <a
        href="next page"
        onClick={e => {
          e.preventDefault();
          if (pageNum !== pageCount - 1) {
            setPageNum(pageNum + 1);
          }
        }}
      >下一页</a>
    </div>
  </div>);
}

export default BlogList;
