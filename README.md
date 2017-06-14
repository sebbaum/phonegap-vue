# Setup
Description on how this kickstarter was setup.

## Install and craft phonegap
1. Install phonegap: `npm install -g phonegap`
1. Create new phonegap project: `phonegap create kickstarter`
1. Test it: `phonegap run browser`
This should show phonegap's default page.

## Adding npm
1. Adding package.json: `npm init`
1. Adding serve script for phonegap. Now we can start the app simply by running: `npm run serve`
```
"scripts": {
    "serve": "phonegap serve --port 8888",
    ...
```
1. Adding `npm-run-all` package: `npm install npm-run-all --save-dev`

## ES2015
1. Adding babel
1. Adding babelify: `npm install --save-dev babelify`
1. Adding presets and plugins: `npm install babel-preset-env --save-dev`
1. Add `.babelrc`
```
{
  "presets": ["env"]
}
```



## Adding vuejs and required components
1. `npm install vue --save`
1. `npm install vue-router --save`

## Installing build tools
1. `npm install browserify --save-dev`
1. `npm install watchify --save-dev`
1. `npm install vueify --save-dev`

# Usage

# TODOs
* eslint integration
* babel & es2015 integration
    * Check the meaning of .babelrc
* vue is working
* routes are working

# References
* [Phonegap](https://phonegap.com/)
* [NPM](https://www.npmjs.com/)
* [Vuejs]()
* [Vue Router]()
* [Browserify](https://www.npmjs.com/package/browserify)
* [Watchify](https://www.npmjs.com/package/browserify)
* [Vueify](https://www.npmjs.com/package/vueify)
* [Babelify](https://www.npmjs.com/package/babelify)