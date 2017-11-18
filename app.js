
var AschJS = require('asch-js');
var request = require('request');


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

request(options, function(err, res, body) {

    console.log(err);
});

// curl -X POST -H "Content-Type: application/json" -k -d '{"publicKey":"bd1e78c5a10fbf1eca36b28bbb8ea85f320967659cbf1f7ff1603d0a368867b9"}'    
