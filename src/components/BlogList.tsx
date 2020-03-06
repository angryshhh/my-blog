import React from 'react';
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

const BlogList: React.FC<Props> = (props: Props) => {
  return (<div className="blog-list">
    <div>
      <a href=" ">上一页</a><a href=" ">下一页</a>
    </div>
    {
      props.blogList.map(blog => <BlogItem
        key={blog.fileName}
        markdownInfo={blog}
      />)
    }
    <div>
      <a href=" ">上一页</a><a href=" ">下一页</a>
    </div>
  </div>);
}

export default BlogList;
