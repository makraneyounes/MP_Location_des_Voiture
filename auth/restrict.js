/**
 * Created by younes MAKRANE on 20/05/2017.
 */

module.exports = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.render('index', { title: 'login' });
};