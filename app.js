import ReactDOMServer from 'react-dom/server';
import React from 'react'
import App from './react/App.jsx';

// const html = ReactDOMServer.renderToString(<App />);
const html = ReactDOMServer.renderToStaticMarkup(<App />);

console.log("HTML", html)