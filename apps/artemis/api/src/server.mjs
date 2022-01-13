'use strict';

import {
    APP_NAME,
    PROTO,
    HOST,
    PORT
} from './config/settings.mjs';

import app from './app.mjs';
import http from 'http';

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`${APP_NAME}-api listening on: ${PROTO}://${HOST}:${PORT}`);
});