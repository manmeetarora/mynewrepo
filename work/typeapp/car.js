/// <reference path="C:\Users\Arora\OneDrive\work\typeapp\node_modules\@types\node\index.d.ts" />
var car = (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.start = function () {
        alert("engine started : " + this.engine);
    };
    car.prototype.stop = function () {
        alert("engine stopped : " + this.engine);
    };
    return car;
}());
window.onload = function () {
    var obj = new car("v8");
    obj.start();
    obj.stop();
};
$(document).ready(function () {
    alert($("p").text());
});
