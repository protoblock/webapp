import 'babel/polyfill';
import express from 'express';
import alt from './alt.js';
import Iso from 'iso';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';

let server = express();
server.set('view engine', 'jade')
server.set('views', path.join(__dirname, 'templates'));

server.use(express.static(path.join(__dirname, 'public')));

server.get("*", (req, res, next) => {
  next();
});

server.get("fantasy/players/:fnid/result/:week", (req, res, next) => {

});

server.use((req, res) => {
  alt.bootstrap(JSON.stringify(res.locals.data || {}));

  let iso = new Iso();

  let notFound = false;
  let css = [];
  let data = {description: ''};

  let context={
    onInsertCss: value => css.push(value),
    onSetTitle: value => data.title = value,
    onSetMeta: (key, value) => data[key] = value,
    onPageNotFound: () => notFound = true
  };

  Router.run(routes, req.url, (Handler) => {
    let content = React.renderToStaticMarkup(
      <Handler
        context={context}
        path={req.path}/>
    );

    iso.add(content, alt.flush());
    let joinedCss = css.join('');
    res.render('layout', {
      css: joinedCss,
      html: iso.render()
    });
  });
});

server.listen(5000, function() {
  console.log('Listening on localhost:5000');
});

export default server;
