var gulp = require('gulp');
var gutil = require('gulp-util')
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task("webpack-dev-server", function() {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;
    new WebpackDevServer(webpack(myConfig), {
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
})

gulp.task('build', function() {
    return gulp.src('./src/*.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('build/'));
});
gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['build']);
});

gulp.task('default', ['webpack-dev-server', 'watch']);
