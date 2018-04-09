var arr;
arr = ["1", "2", "3"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('-------------------------------------');
var arrname = new Array(4);
for (var i = 0; i < arrname.length; i++) {
    console.log(i * 2);
}
console.log('-------------------------------------');
var first = new Array("abc", "def", "ghi");
for (var i = 0; i < first.length; i++) {
    console.log(first[i]);
}
console.log('-------------------------------------');
var ab = ["1", "2", "3"];
var cd = ["4", "5", "6"];
var ef = ["7", "8", "9"];
var ar = ab.concat(cd, ef);
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
console.log('-------------------------------------');
function display(name) {
    if (typeof name == "string") {
        console.log("numeric value = " + name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
display("manmeet");
display(["manmeet", "singh", "arora"]);
console.log('-------------------------------------');
var param;
param = 9;
console.log(param);
param = [1, 5, 6, 4, 9];
for (var i = 0; i < param.length; i++) {
    console.log(param[i]);
}
param = "manmeet";
console.log(param);
param = ["mannmeet", "singh", "arora"];
for (var i = 0; i < param.length; i++) {
    console.log(param[i]);
}
