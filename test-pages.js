var expect = require('chai').expect;
var request = require('request');

it('Main page content', (done) => {
  request('http://localhost:8080', (error, response, body) => {
    expect(body).to.equal('Hi');
    done();
  });
});

it('Main page status', (done) => {
  request('http://localhost:8080', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
})
