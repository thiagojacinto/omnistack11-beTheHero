// imports express lib:
const express = require('express');
// than, initiate it:
const app = express();

// imports the routes separated file:
const routes = require('./routes');

/**
 * Parameters types:
 * 
 * 1) Query:   named parameters, usually follows "?" sign; used with filters, pagination, etc.
 * 2) Params:  parameters that identify resources; not always named, but always specified;
 * 3) Request body
 */

/**
 * Database: 
 * 
 * 1) SQL:   major control over the structure of the db; -> SQLite will be used
 * 2) NoSQL: speedier & flexibility
 */

// informs express that req & res will be formatted in JSON:
app.use(express.json());

// now gets the routes into the app:
app.use(routes);

app.listen(3333);