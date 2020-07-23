const { src, task } = require('gulp');
const ghPages = require('gulp4-gh-pages');

task('deploy', () => src(['./build/**/*', '!build/robots.txt']).pipe(ghPages({ branch: 'gh-pages' })));