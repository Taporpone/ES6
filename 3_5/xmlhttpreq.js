var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();
req.open('GET','http://www.wp.pl');
req.onload = () => console.log('Loaded');
req.onerror = () => console.log('error');
req.send();
