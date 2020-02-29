import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Markdown from './components/Markdown';
import BlogList from './components/BlogList';
import './App.css';

interface MarkdownInfo {
  fileName: string;
  time: string;
  title: string;
  tags: string[];
}

const rootPath = `/${window.location.pathname.indexOf('my-blog') > -1 ? 'my-blog/' : ''}`;
console.log(rootPath);

const App: React.FC = () => {
  const [blogList, setBlogList] = useState(new Array<MarkdownInfo>());

  useEffect(() => {
    fetch(`${rootPath}blogList.json`)
    .then((response => response.json()))
    .then((json: MarkdownInfo[]) => setBlogList(json))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path={`/${window.location.pathname.indexOf('/my-blog') > -1 ? 'my-blog' : ''}`}>
          <BlogList rootPath={rootPath} blogList={blogList} />
        </Route>
        <Route path={`/${window.location.pathname.indexOf('/my-blog') > -1 ? 'my-blog/' : ''}:fileName`} children={<Markdown rootPath={rootPath} />} />
      </Switch>
    </div>
  );
}

export default App;
