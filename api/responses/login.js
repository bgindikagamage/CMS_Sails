/**
 * res.login([inputs])
 *
 * @param {String} inputs.username
 * @param {String} inputs.password
 *
 * @description :: Log the requesting user in using a passport strategy
 */


module.exports = function login(inputs) {
  inputs = inputs || {};

  //
  var req = this.req;
  var res = this.res;

  User.attemptLogin({
    username: inputs.username,
    password: inputs.password
  },function (err, user) {
    if (err) return res.negotiate(err);
    if (!user) {

      // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
      // send a 200 response letting the user agent know the login was successful.
      // (also do this if no `invalidRedirect` was provided)
      if (req.wantsJSON || !inputs.invalidRedirect) {
        return res.badRequest('Invalid username/password combination.');
      }
      return res.redirect(inputs.invalidRedirect);
    }

    req.session.me = user.id;

    if (req.wantsJSON || !inputs.successRedirect) {
      return res.ok();
    }

    //
    return  res.redirect(inputs.successRedircet);


  });
}
