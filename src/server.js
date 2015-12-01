import 'babel/polyfill';
import express from 'express';
import alt from './alt.js';
import Iso from 'iso';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';
//import URL from 'url';
import http from 'http';
import https from 'https';
import fs from 'fs';
import GoogleTagManager from './components/GoogleTagManager';
import Config from './utils/config';

let server = express();
server.set('view engine', 'jade');
let templateDir = path.join(__dirname, 'templates');
server.set('views', templateDir);

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', (req, res, next) => {
  if (req.hostname !== Config.hostname){
    res.redirect('https://' + Config.hostname + req.url)
  } else if (req.protocol === 'http'){
    // redirect all http to https
    res.redirect('https://' + req.hostname + req.url);
  } else {
    next();
  }
});

/*server.get('fantasy/players/:fnid/result/:week', (req, res, next) => {

});*/

let credentials = {
  pfx: fs.readFileSync('../ssl/satoshi_pfx.pfx'),
  passphrase: '5tgb^YHN7ujm',
  ca: [fs.readFileSync('../ssl/intermediate.crt')]
};

// let devCredentials = {
//   key: fs.readFileSync('../ssl/server.key'),
//   cert: fs.readFileSync('../ssl/server.crt')
// };

server.use((req, res) => {
  alt.bootstrap(JSON.stringify(res.locals.data || {}));

  let iso = new Iso();

  let notFound = false;
  let css = [];
  let data = {description: ''};

  let context = {
    onInsertCss: value => css.push(value),
    onSetTitle: value => data.title = value,
    onSetMeta: (key, value) => data[key] = value,
    onPageNotFound: () => notFound = true
  };
  Router.run(routes, req.url, (Handler) => {
    let content = React.renderToStaticMarkup(
      <div>
        <GoogleTagManager />
        <Handler
          context={context}
          path={req.path}
          query={'?' + req.url.split('?')[1]}
          templatePath={templateDir + '/' + req.path}/>
      </div>
    );

    iso.add(content, alt.flush());
    let joinedCss = css.join('');
    res.render('layout', {
      css: joinedCss,
      html: iso.render()
    });
  });
});

//let redirectServer = express.createServer();
//redirectServer.get('*', (req, res)=>res.redirect('https://trading.football' + req.url))

//http.createServer(redirectServer).listen(5080);
let httpServer = http.createServer(server).listen(Config.httpPort);

// let httpsServer = https.createServer(devCredentials, server);
let httpsServer = https.createServer(credentials, server);
httpsServer.listen(Config.httpsPort, ()=>console.log('Listening on localhost:' + Config.httpsPort));
/*server.listen(5000, function() {
  console.log('Listening on localhost:5000');
});

export default server;*/
export default { httpsServer: httpsServer, httpServer: httpServer};
