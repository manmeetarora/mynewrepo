var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var pump=require('pump');

gulp.task("taskone",function()
{
console.log("i m running gulp");
});

gulp.task("tasktwo",function()
{
console.log("i m running tsktwo");
});

gulp.task("default",["taskone","tasktwo"]);




gulp.task("scripts",function(){
return gulp.src(["one.js","two.js","three.js"])
.pipe(concat("main.js")).pipe(gulp.dest("scripts/"));
});

gulp.task("compress", function (cb) {
  pump([
        gulp.src("one.js"),
        uglify(),
        gulp.dest("scripts/")
    ],
    cb
  );
});