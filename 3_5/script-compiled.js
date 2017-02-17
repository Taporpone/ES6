'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();
req.open('GET', 'http://www.wp.pl');
req.onload = function () {
  return console.log('Loaded');
};
req.onerror = function () {
  return console.log('error');
};
req.send();
