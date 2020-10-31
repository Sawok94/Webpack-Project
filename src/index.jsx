import Post from './Post';
import './styles/styles.css';
// import json from './assets/json.json';
import Logo from './assets/webpack-logo';
// import xml from './assets/data.xml';
// import * as $ from 'jquery';
import './babel';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack', Logo);

// $('pre').html(post.toString());

// console.log('Post', post.toString());

// console.log(json);

// console.log(xml);

const App = () => (
  <div className='container'>
    <h1>Webpack</h1>
    <hr />
    <div className='logo'></div>
    <hr />
    <pre></pre>
  </div>
);

render(<App />, document.getElementById('app'));
