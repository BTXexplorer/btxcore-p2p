'use strict';

var gulp = require('gulp');
var btxcoreTasks = require('btxcore-build');

btxcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
