const gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  babel = require('gulp-babel'),
  imageMin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'arquivos'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'arquivos'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'arquivos'
  }
};

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function script() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['ie >= 11']
              }
            }
          ]
        ]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function image() {
  return gulp
    .src(paths.images.src)
    .pipe(cache(imageMin()))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.scripts.src, script);
  gulp.watch(paths.images.src, image);
  gulp.watch('*.html').on('change', reload);
}

// Exposing the tasks is important for it's allowing to run it on the command line

// $ gulp watch
exports.watch = watch;
// $ gulp style
exports.style = style;
// $ gulp script
exports.script = script;
// $ gulp script
exports.image = image;
// $ gulp serve
exports.serve = gulp.parallel(style, script, image, watch);

const build = gulp.parallel(style, script, image);
// $ gulp
gulp.task('default', build);
