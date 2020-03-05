import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Markdown from './components/Markdown';
import BlogList from './components/BlogList';
import Profile from './components/Profile';
import './App.css';

interface MarkdownInfo {
  fileName: string;
  time: string;
  title: string;
  tags: string[];
}

const rootPath = `/${window.location.pathname.indexOf('my-blog') > -1 ? 'my-blog/' : ''}`;

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
      <Profile />
      <Switch>
        <Route exact path={rootPath}>
          <BlogList blogList={blogList} />
        </Route>
        <Route path={`${rootPath}:fileName`} children={<Markdown />} />
      </Switch>
    </div>
  );
}

export default App;
