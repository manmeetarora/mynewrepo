var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("interfaces are not converted to javascript, its just a part of typescript ");
var person1 = {
    fname: "manmeet",
    lname: "arora",
    fullname: function () { return person1.fname + " " + person1.lname; }
};
console.log(person1.fname);
console.log(person1.lname);
console.log(person1.fullname());
console.log("----------example 2--------------");
var hello = {
    name: "manmeet",
    command: ["manmeet", "singh"]
};
console.log(hello.command);
var myname = {
    names: ["abc", "def", "ghi"]
};
console.log(myname.names);
console.log("----------inheritance in interfaces------------");
var res = {
    name1: "manmeet",
    name2: "singh"
};
console.log(res.name1 + " " + res.name2);
var first = (function () {
    function first(car) {
        this.car = car;
    }
    first.prototype.display = function () {
        console.log("name of car" + this.car);
    };
    return first;
}());
var obj = new first("audi");
console.log(obj.car);
obj.display();
var firstcl = (function () {
    function firstcl(area) {
        this.area = area;
    }
    return firstcl;
}());
var secondcl = (function (_super) {
    __extends(secondcl, _super);
    function secondcl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    secondcl.prototype.display = function () {
        console.log(this.area);
    };
    return secondcl;
}(firstcl));
var obj1 = new secondcl("45");
obj1.display();
console.log("--------inheritance in classes and interface--------");
var AgriLoan = (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    AgriLoan.prototype.disp = function () {
        console.log("Interest is : " + ob.interest + " Rebate is : " + ob.rebate);
    };
    return AgriLoan;
}());
var ob = new AgriLoan("10", "1");
ob.interest = "78";
ob.disp();
console.log("----------------------------------------------------------------------");
var person = {
    fname: "manmeet",
    lname: "arora",
    fullname: function () { }
};
person.fullname = function () { console.log(person.fname + " " + person.lname); };
person.fullname();
console.log("----------------------------------------------------------------------");
var per = {
    fname: "harmeet",
    lname: "arora"
};
function displ(obj) {
    console.log(obj.fname + " " + obj.lname);
}
displ(per);
