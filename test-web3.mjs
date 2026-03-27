import https from 'https';

const data = JSON.stringify({
  access_key: '01de425b-748e-47df-9f2b-08eed50b3f05',
  name: 'Antigravity Test',
  email: 'test@example.com',
  message: 'Testing the form from terminal'
});

const options = {
  hostname: 'api.web3forms.com',
  port: 443,
  path: '/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
