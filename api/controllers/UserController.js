/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login: function (req,res) {

    //See 'api/responses/login.js
    return res.login({
      username: req.param('username'),
      password: req.param('password'),
      successRedirect: '/',
      invalidRedirect: '/login'
    });
  },


  logout: function (req, res) {
    req.session.me = null;

    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    return res.redirect('/');
  },

  signup: function (req, res) {
    User.signup({
      username: req.param('username'),
      password: req.param('password')
    }, function (err, user) {
      //
      if (err) return res.negotiate(err);

      //
      req.session.me =user.id;

      if (req.wantsJSON) {
        return  res.ok('Signip successful!');
      }

      //
      return res.redirect('/welcome');
    });
  }

};

