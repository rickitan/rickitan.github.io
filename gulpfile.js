const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./conf/webpack.config');

gulp.task('default', (callback) => {
    new WebpackDevServer(webpack(config), {
      contentBase: path.resolve(__dirname),
      progress: true,
      hot: true,
      quiet: false,
      noInfo: false,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      },
      stats: {
        chunks: false,
        colors: true,
      },
      // Set this as true if you want to access dev server from arbitrary url.
      // This is handy if you are using a html5 router.
      historyApiFallback: false
    }).listen(7070, '0.0.0.0',  (err) => {
      if(err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      // Server listening
      gutil.log('Server started on port: 7070');
    });
});
