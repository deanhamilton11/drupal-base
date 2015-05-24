Basic Drupal starter setup
=========================
This is a basic gulp-webpack setup, node files are kept in a .npm folder because drupal slows down if you leave them in the base theme folder.

src files are kept in `sites/all/themes/base/src` and are compiled to `sites/all/themes/base/public`


Initial Setup
-----------------
- from `sites/all/themes/base/.npm`
- `npm install`
- `bower install`

Build Process
-----------------
- from `sites/all/themes/base/.npm`
- `gulp` for development
- `gulp:build-production` for production