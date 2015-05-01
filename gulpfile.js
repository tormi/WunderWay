var gulp = require('gulp');
var request = require('request');
var source = require('vinyl-source-stream');
var beautify = require('gulp-jsbeautify');
var streamify = require('gulp-streamify');
var replace = require('gulp-replace');


var wunderhub_api = {
  team : 'https://hub.wunder.io/api/team'
}

gulp.task('hub', function(){
  return request({
    url: wunderhub_api.team,
    headers: {
      Accept: 'application/hal+json'
    }
  })
  .pipe(source('team.json'))
  .pipe(replace('\\/','/'))
  .pipe(streamify(beautify({
    'js': {
      'unescape_strings': true,
    }
  })))
  .pipe(gulp.dest('./_data/'));
});
