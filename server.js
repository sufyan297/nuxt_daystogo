import "babel-polyfill"; //Must be on Top always
import { Server, Utility } from '@sufyan/chidiya'
import { Nuxt, Builder } from 'nuxt'
import config from './config'
import * as models from './models'
import nuxtConfig from './nuxt.config';

import express from 'express';
const options = {
  port: 3000,
  cors: {
    origin: 'http://localhost:3000'
  }
}

const app = express();
//Start Server
const server = new Server({config, options});

//Load Utilities
const utils = [
  'Database',
  'Actions'
];


server.start(app);
const server_utils = new Utility({config, utils, app, models});

// We instantiate Nuxt.js with the options

const nuxt = new Nuxt(nuxtConfig)
// Enable live build & reloading on dev
if (nuxt.options.dev) {
  new Builder(nuxt).build()
}

app.use(nuxt.render);

app.listen(options.port, (err) => {
  if (err) {
    console.log("Unable to start server.");
    process.exit(0);
  }

  console.log('> Ready on PORT : ', options.port);
})