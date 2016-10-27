var Sails = require('sails'),
  sails;

before(function (done) {
  Sails.lift({
    log : {
      level : 'info'   //指定错误级别，避免出现调试输出，这主要是用来调试controller
    },
    port:1447
  }, function (err, server) {
    sails = server;
    if (err)
      return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function (done) {     //fix after hook
  var done_called = false;
  Sails.lower(function () {
    if (!done_called) {
      done_called = true;
      setTimeout(function () {
        sails.log.debug("inside app.lower, callback not called yet. calling.");
        done();
      }, 1000);
    } else {
      sails.log.debug("inside app.lower, callback already called.");
    }
  });
});





//   登录
//
// var Sails = require('sails'),
//   sails;
// var request = require('supertest');
// var port = 1447; //测试启动端口
// agent = request.agent('http://localhost:'+port); //服务器连接，全局变量
//
// before(function (done) {
//   Sails.lift({
//     log : {
//       level : 'error'
//     },
//     port:port
//   }, function (err, server) {
//     sails = server;
//     if (err) {
//       return done(err);
//     } else {//登录
//       agent.get('/session?email=wangxi@qq.com&password=123456')
//         .end(function (err, res) {
//           if (err)
//             return done(err);
//
//           done(err, sails);
//         });
//     }
//   });
// });
//
// after(function (done) {
//   var done_called = false;
//   Sails.lower(function () {
//     if (!done_called) {
//       done_called = true;
//       setTimeout(function () {
//         sails.log.debug("inside app.lower, callback not called yet. calling.");
//         done();
//       }, 1000);
//
//     } else {
//       sails.log.debug("inside app.lower, callback already called.");
//     }
//   });
// });








// 官方文档
// var sails = require('sails');
//
// before(function(done) {
//
//   // Increase the Mocha timeout so that Sails has enough time to lift.
//   this.timeout(5000);
//
//   sails.lift({
//     // configuration for testing purposes
//   }, function(err, server) {
//     if (err) return done(err);
//     // here you can load fixtures, etc.
//     done(err, sails);
//   });
// });
//
// after(function(done) {
//   // here you can clear fixtures, etc.
//   sails.lower(done);
// });
