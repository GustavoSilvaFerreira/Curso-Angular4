"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "fernanda@gmail.com": new User('fernanda@gmail.com', 'Fernanda', 'fernanda123'),
    "gustavo@gmail.com": new User('gustavo@gmail.com', 'Gustavo', 'gustavo123')
};
