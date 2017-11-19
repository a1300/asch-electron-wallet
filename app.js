
var AschJS = require('asch-js');
var request = require('request');
var cryptolib = require('./lib/crypto.js');



//test auccount
let secret = 'intact rough funny foam say wish river rain minimum stand distance arrest'; //

let publicKey = AschJS.crypto.getKeys(secret).publicKey;

var postData = { "publicKey": publicKey };
var url = 'http://45.32.248.33:4096/api/accounts/open2/';
var options = {
  method: 'post',
  body: postData,
  json: true,
  url: url 
}

//this could be also called via the api
request(options, function(err, res, body) {
    console.log(body);
});
