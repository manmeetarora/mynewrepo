"use strict";
var triangle = (function () {
    function triangle() {
    }
    triangle.prototype.draw = function () {
        console.log("triangle is drawn");
    };
    return triangle;
}());
exports.triangle = triangle;
