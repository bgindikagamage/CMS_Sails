var should = require('should');
var request = require('supertest');

describe('UserController', function() {
  describe('login', function () {
    // it('login', function (done) {
    //   request(sails.hooks.http.app).post('/login?username=Test&password=wangxi').end(function (err, result) {
    //     should(result.res.body.result).be.exactly(1);
    //     done();
    //   });
    // });

    it('login', function (done) {
      request(sails.hooks.http.app).post('/login?username=Test&password=wangxi')
        .expect(200,done);
    });


  });
});

