var request = require('request');
// Set your API parameters here.
var APIToken = 'AAAXXXXXXXXXXXX';
var view = 'products_all';
var format = 'JSON';
var query = encodeURIComponent('categories:shoes');
var records = '1';
var download = 'false';
// Construct the API call.
var APICall = 'https://' + APIToken + ':@api.datafiniti.co/v3/data/products?' +
    'view=' + view +
    '&q=' + query +
    '&format=' + format +
    '&records=' + records +
    '&download=' + download;
// Make the API call.
request({
        url: APICall
    },
    // Do something with the response.
    function(error, response, body) {
        console.log(body);
    }
);