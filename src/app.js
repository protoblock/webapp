import alt from './alt.js';
import Iso from 'iso';
import Router from 'react-router';
import React from 'react';
import routes from './routes.jsx';

Iso.bootstrap(function (state, _, container) {
  let onSetMeta = (name, content) => {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    let elements = document.getElementsByTagName('meta');
    [].slice.call(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    let meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  };

  alt.bootstrap(state);
  let path = decodeURI(window.location.pathname);
  let props = {
    context: {
      onSetTitle: value => document.title = value,
      onSetMeta
    },
    path: path
  };

  Router.run(routes, Router.HistoryLocation, (Handler) => {
    let node = React.createElement(Handler, props);
    React.render(node, container, () => {
      let css = document.getElementById('css');
      //css.parentNode.removeChild(css);
    });
  });
});
