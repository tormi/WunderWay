var gulp = require('gulp');
var request = require('request');
var source = require('vinyl-source-stream');
var beautify = require('gulp-jsbeautify');
var streamify = require('gulp-streamify');
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var Crawler = require('simplecrawler');

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

gulp.task('checklinks', function(cb) {
  var linkChecker = Crawler.crawl("http://way.wunder.io");
  linkChecker.parseScriptTags = false;

  linkChecker.on('fetch404', function(queueItem, response) {
      // Not clever enough to ignore GA.
      // if (queueItem.url.search("g;m.parentNode.") <= 0) {
        gutil.log('Resource not found linked from ' +
                        queueItem.referrer + ' to', queueItem.url);

      // }
    })
    .on('complete', function(queueItem) {
      cb();
    });
});
