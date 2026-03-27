import https from 'https';

const data = JSON.stringify({
  access_key: 'e284b37b-9393-4dd3-b43c-64fa0fee0e6a',
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
