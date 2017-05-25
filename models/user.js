/**
 * Created by younes MAKRANE on 11/05/2017.
 */

var mongoose = require('mongoose');
var userService = require('../services/user-service');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName : {type:String},
    lastName : {type:String},
    roomNumber : {type: Number},
    email : {type:String},
    password : {type:String},
    created : {type : Date, Default : Date.now}
});

/*
userSchema.path('email').validate(function (value, next) {
    userService.findUser(value, function (err, user) {
        if(err) {
                console.log(err);
                return next(false);
        }
        next(!user);
    });
}, 'User already in use');
*/

var User = mongoose.model('User', userSchema);

module.exports = {
    User : User
}
