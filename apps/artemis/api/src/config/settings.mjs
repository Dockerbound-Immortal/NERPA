'use strict';

import normalizePort from 'normalize-port';

/** Settings **/

/** app **/
export const APP_NAME = process.env.APP_NAME || 'project';

/** http **/
export const PROTO = process.env.PROTO || 'http';
export const PORT = normalizePort(process.env.PORT || 4000);
export const HOST = process.env.HOST || 'localhost';