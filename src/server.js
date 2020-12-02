// server side starting point
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

// import regeneratorRuntime from 'regenerator-runtime';

import { _getter, _setter } from './page/redis';
import getPageData from './page/helper';
import Html from './page/Html';
import App from './client/App';
import createStore from './client/redux/store';

// import state from './client/redux/states';

import path from 'path';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
// import csp from 'express-csp-header';

// const csp = require('express-csp-header');

const app = express();
const PORT = process.env.PORT || 3000;

// ====== middlewares ======
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   csp({
//     policies: {
//       'default-src': [csp.NONE],
//       'img-src': [csp.SELF],
//     },
//   })
// );

const renderApp = (data, route) => {
  const scripts = ['js/vendor.js', 'js/client.js'];

  const store = createStore(data);

  const statsFile = path.resolve('build/stats.json');
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['server'] });

  const appMarkup = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={route} context={{}}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </ChunkExtractorManager>
  );

  // const html = renderToString(jsx)
  // You can now collect your script tags
  // const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
  // // You can also collect your "preload/prefetch" links
  // const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
  // // And you can even collect your style tags (if you use "mini-css-extract-plugin")
  // const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

  // const scriptTags = extractor.getScriptTags();
  const html = renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} initialState={data} />
  );

  console.log('sending react app');

  return `<!DOCTYPE html>${html}`;

  //   return `<html>
  //   <head>
  //     ${linkTags}
  //     ${styleTags}
  //     </head>

  //   <body>
  //     <div id="root">
  //     ${html}
  //     ${scriptTags}
  //     </div>
  //   </body>
  // </html>`;
};

// Cache middleware/invaildation
const cache = async (req, res, next) => {
  // res.header("Content-Security-Policy', 'img-src 'self'");
  // res.send('<div>Home</div>');
  // return;
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('Checking Cache');
  //try {
  let route;
  if (req.url.includes('/cache')) {
    route = '/' + req.url.split('/')[2];
  }
  // console.log('route', route);
  const path = route || req.url;
  console.log('path', path);

  const pageData = await Promise.all([
    _getter(`MOD-${path}`),
    _getter(`CON-${path}`),
  ]).catch((err) => {
    if (next) {
      next();
      return;
    }
    res.status(404).send('Sorry, Page not Found in cache');
  });

  const [moduleList, page] = pageData;

  const sendData = {
    [`MOD-${path}`]: JSON.parse(moduleList),
    [`CON-${path}`]: JSON.parse(page),
  };

  if (route) {
    res.json(sendData);
  } else {
    res.send(renderApp(sendData, path));
  }
  //} catch (err) {
};

// Intial api-calls
const getIntialData = async (req, res, next) => {
  console.log('cache not found, fetching data');

  try {
    let route;
    if (req.url.includes('/cache')) {
      route = '/' + req.url.split('/')[2];
    }
    const path = route || req.url;

    const pageData = await getPageData(path);

    const { content, layout } = pageData;

    await Promise.all([
      _setter(`MOD-${path}`, layout),
      _setter(`CON-${path}`, content),
    ]);
  } catch (err) {
    res.status(404).send('Sorry, page not found in getfunc');
    return;
  }
  next();
};

// routes
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', cache, getIntialData, cache);

// listenner
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
