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
    dest: 'dist/arquivos',
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/arquivos',
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/arquivos',
  },
  styles_components: {
    src: 'components/scss/*.scss',
    dest: 'dist/arquivos',
  },
  boots_styles: {
    src: 'components/scss/bootstrap/*.scss',
    dest: 'dist/arquivos',
  },
  scripts_components: {
    src: ['components/js/*.js'],
    dest: 'dist/arquivos',
  },
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
                browsers: ['ie >= 11'],
              },
            },
          ],
        ],
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

function styles_components() {
  return gulp
    .src(paths.styles_components.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles_components.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles_components.dest));
}

function bootstrap_style() {
  return gulp
    .src(paths.boots_styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.boots_styles.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.boots_styles.dest))
    .pipe(browserSync.stream());
}

function scripts_components() {
  return gulp
    .src(paths.scripts_components.src)
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['ie >= 11'],
              },
            },
          ],
        ],
      })
    )
    .pipe(rename('slick.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts_components.dest))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.scripts.src, script);
  gulp.watch(paths.images.src, image);
  gulp.watch('*.html').on('change', reload);
  gulp.watch(paths.styles_components.src, styles_components);
  gulp.watch(paths.boots_styles.src, bootstrap_style);
  gulp.watch(paths.scripts_components.src, scripts_components);
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
// $ gulp style components
exports.styles_components = styles_components;
// $ gulp bootstrap
exports.bootstrap_style = bootstrap_style;
// $ gulp script
exports.scriptsComponents = scripts_components;
// $ gulp serve
exports.serve = gulp.parallel(
  style,
  script,
  image,
  watch,
  styles_components,
  bootstrap_style,
  scripts_components
);

const build = gulp.parallel(
  style,
  script,
  image,
  styles_components,
  bootstrap_style,
  scripts_components
);
// $ gulp
gulp.task('default', build);
