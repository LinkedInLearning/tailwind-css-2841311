const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  postcss = require("gulp-postcss"),
  source = "./src/",
  dest = "./build/";

function html() {
  return gulp.src(dest + "**/*.html");
}

function styles() {
  return gulp
    .src(source + "**/*.css")
    .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
    .pipe(gulp.dest(dest));
}

function watch() {
  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(dest + "index.html", html).on("change", browserSync.reload);
  gulp
    .watch(
      ["./tailwind.config.js", "./postcss.config.js", "./gulpfile.js"],
      styles
    )
    .on("change", browserSync.reload);
}

function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: dest,
    },
  });
  watch();
}

var build = gulp.series(gulp.parallel(styles, html), server, watch);
gulp.task("default", build);
