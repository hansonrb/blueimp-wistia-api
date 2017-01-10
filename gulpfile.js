var gulp = require('gulp');
var concat = require('gulp-concat');

var files = {
  fonts: [
    './node_modules/bootstrap/dist/fonts/*'
  ],
  images: [
    './node_modules/blueimp-file-upload/img/loading.gif',
    './node_modules/blueimp-file-upload/img/progressbar.gif'
  ],
  styles: [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    './node_modules/blueimp-file-upload/css/jquery.fileupload.css',
    './node_modules/blueimp-file-upload/css/jquery.fileupload-ui.css',
  ],
  modules: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/angular/angular.min.js',

    './node_modules/blueimp-load-image/js/load-image.js',
    './node_modules/blueimp-load-image/js/load-image-orientation.js',
    './node_modules/blueimp-load-image/js/load-image-meta.js',
    './node_modules/blueimp-load-image/js/load-image-exif.js',
    './node_modules/blueimp-load-image/js/load-image-exif-map.js',
    './node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js',

    './node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
    './node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
    './node_modules/blueimp-file-upload/js/jquery.fileupload.js',
    './node_modules/blueimp-file-upload/js/jquery.fileupload-process.js',
    './node_modules/blueimp-file-upload/js/jquery.fileupload-video.js',
    './node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js',
    './node_modules/blueimp-file-upload/js/jquery.fileupload-angular.js'
  ],
  src: [
    './src/js/module.js',
    './src/js/config.js',
    './src/js/filter.js',
    './src/js/component.js',
    './src/js/controllers/*.js'
  ]
}

gulp.task('dist', function() {

  gulp.src(files.fonts)
  .pipe(gulp.dest('./public/assets/fonts'));

  gulp.src(files.images)
  .pipe(gulp.dest('./public/assets/img'));

  gulp.src(files.styles)
  .pipe(concat('library.css'))
  .pipe(gulp.dest('./public/assets/css'));

  gulp.src(files.modules)
  .pipe(concat('library.js', {newLine: ';'}))
  .pipe(gulp.dest('./public/assets/js'));

});

gulp.task('build', function() {
  gulp.start('dist');
  gulp.src(files.src)
  .pipe(concat('script.js'))
  .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('default', function() {
  var d = function() {
    gulp.start('dist');
    gulp.src(files.src)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/assets/js'));
  };
  d();
  gulp.watch(files.src, function(evt) {
    d();
  });
});
