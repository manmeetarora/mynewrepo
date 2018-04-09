"use strict";
var circle = (function () {
    function circle() {
    }
    circle.prototype.draw = function () {
        console.log("circle is drawn");
    };
    return circle;
}());
exports.circle = circle;
