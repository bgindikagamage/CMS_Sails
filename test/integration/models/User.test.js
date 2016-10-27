
var should = require('should');

describe('User', function () {
  describe('查找User', function () {
    it('检查用户表有这个用户', function (done) {
      User.find({
        username: 'Test'
      }).exec(function (err, results) {
        should(results.length).be.exactly(1);
        done();
      });
    });

    it('检查用户表没有这个用户', function (done) {
      User.find({
        username: 'Tessfsft'
      }).exec(function (err, results) {
        should(results.length).be.exactly(0);
        done();
      });
    });

  });
});

