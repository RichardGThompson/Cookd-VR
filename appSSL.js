const https     = require('https');
const forge     = require('node-forge');
const fs        = require('fs');
const express   = require('express');
const app       = express();

//const vars
const LISTEN_PORT = 8080;

//middleware - set default html folder
app.use(express.static(__dirname + '/public'));

/************* CREATE ROUTES ***************/
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

app.get('/vr', function(req, res) {
    res.sendFile(__dirname + 'public/vr.html');
});

app.get('/dsk', function(req, res) {
    res.sendFile(__dirname + 'public/dsk_main.html');
});

/************* LOAD SSL CERTS (if you ran 'node createCerts.js') ***************/
let privateKeyPem = '';
let certPem = '';

//check for ssl cert files
if (fs.existsSync('./SSL_PRIV_KEY.pem')) {
    privateKeyPem = fs.readFileSync('./SSL_PRIV_KEY.pem', 'utf8');
    console.log(privateKeyPem);
}
else {
    console.warn("run 'node ./createCerts.js' first");
    process.exit(); //kill process so we can run
}

if (fs.existsSync('./SSL_CERT.pem')) {
    certPem = fs.readFileSync('./SSL_CERT.pem', 'utf8');
    console.log(certPem);
}    
else {
    console.warn("run 'node ./createCerts.js' first");
    process.exit(); //kill process so we can run
}

/************* CREATE HTTPS SERVER ***************/
console.log('HTTPS server being created ...');
const options = {
    key: privateKeyPem,
    cert: certPem
};
const secureServer = https.createServer(options, app);

/************* RUN HTTPS SERVER ***************/
secureServer.listen(LISTEN_PORT);     //start server
console.log('Listening on port: ' + LISTEN_PORT );