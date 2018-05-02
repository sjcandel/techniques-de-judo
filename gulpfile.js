var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var plugins = require("gulp-load-plugins")();

var source = "./dev";
var destination = "./dist";

//////////////////////////////////////////
// TASK //
//////////////////////////////////////////

// gulp.task('browserSync', function() {
//     browserSync({
//       server: {
//         baseDir: destination
//       },
//     })
//   })

gulp.task("sass", function() {
  return gulp
    .src(source + "/styles/main.scss")
    .pipe(plugins.sass())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest(destination));
});

gulp.task("index", function() {
  return gulp.src(source + "/index.php").pipe(gulp.dest(destination));
});

gulp.task("views", function() {
  return gulp
    .src(source + "/views/**/*")
    .pipe(gulp.dest(destination + "/views"));
});

gulp.task("js", function() {
  return gulp
    .src([source + "/angular/**/*.js", source + "/angular/app.js"])
    .pipe(plugins.concat("bundle.js"))
    .pipe(gulp.dest(destination));
});

gulp.task("fonts", function() {
  return gulp
    .src(source + "/sources/fonts/*")
    .pipe(gulp.dest(destination + "/sources/fonts"));
});

gulp.task("img", function() {
  return gulp
    .src(source + "/sources/img/*")
    .pipe(gulp.dest(destination + "/sources/img"));
});

gulp.task("includes", function() {
  return gulp
    .src(source + "/includes/*")
    .pipe(gulp.dest(destination + "/includes"));
});

//////////////////////////////////////////
// BUILD // WATCH //
//////////////////////////////////////////
gulp.task("build", [
  "sass",
  "index",
  "views",
  "js",
  "fonts",
  "img",
  "includes"
]);

gulp.task("watch", function() {
  gulp.watch(
    [
      source + "/styles/*.scss",
      source + "/index.php",
      source + "/views/**/*.html",
      source + "/angular/**/*.js",
      source + "/angular/app.js",
      source + "/sources/fonts/*",
      source + "/sources/img/*",
      source + "/includes/*"
    ],
    ["build"]
  );
});

gulp.task("default", ["build"]);
