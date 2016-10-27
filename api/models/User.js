/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      username: {
        type: 'string',
        required: true,
        unique: true
      },
      password: {
        type: 'string',
        required: true
      }
    },


  /**
   * 自己都不知道要干嘛
   */

  signup: function (inputs,cb) {
    //
    User.create({
      username: inputs.username,
      password: inputs.password
    }).exec(cb);
  },


  /**
   * 
   * @param inputs
   * @param cb
   */

  attemptLogin: function (inputs, cb) {
    //
    User.findOne({
      username: inputs.username,
      password: inputs.password
    }).exec(cb);
  }

};

