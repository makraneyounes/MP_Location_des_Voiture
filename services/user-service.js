/**
 * Created by younes MAKRANE on 11/05/2017.
 */
var bcrypt = require('bcrypt');
var User = require('../models/user').User;


exports.addUser = function (user, next) {
      bcrypt.hash(user.password, 10, function (err, hash) {
          if(err) {
                return next(err);
          }

      var newUser = new User({
        firstName : user.firstName,
        lastName : user.lastName,
        roomNumber : user.roomNumber,
        email : user.email.toLowerCase(),
        password : hash
    });

    newUser.save(function (err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
})};


exports.findUser = function (email, next) {
    User.findOne({email: email.toLowerCase()}, function (err, user) {
        if(err) {
                return next(err);
        }
        if(!user) {
            return next(null, false, {message: 'Incorrect email!'});
        }
        return next(null, user,  {message: 'email founded!'});
    });
    };