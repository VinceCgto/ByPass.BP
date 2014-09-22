 **SPOILER ALERT:** contains HTML5, [SASS](http://sass-lang.com/), [jQuery](http://jquery.com/) & [Grunt](http://gruntjs.com/).
 * * *

# ByPass

This boilerplate is my starting point for projects.

It contains HTML5, CSS3 & jQuery snippets, is constructed to be set up with Grunt and helps me (read: you) set up a new project in no-time. *'Bypassing'* the tedious tasks is what it's for!

## Demo

[Styleguide](http://caregnato.be/dev/bypass/)


## Requirements

[NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/).


## Installation

Step 1. [Download](http://nodejs.org/download/) and install NodeJS

Step 2. Install Grunt CLI
```shell
npm install -g grunt-cli
```

Step 3. Install all the npm dependencies you need for Grunt.
```shell
cd to/root/folder
npm install
```

Step 4. That's it. Wasn't that hard, right? Now run either `grunt` for development or `grunt dist` for production.


## Philosophy

The `dev` folder will be used for development. This folder includes:
- a `sass` folder which contains modular scss-files
- a `js` folder which contains a `script.js` and a folder for libraries
- an `img` folder to store all the images used on the website (I use a `static` subfolder for all images that are design-related)

These files will be concatenated, minified, ... into the folders in the root directory.


## Grunt plugins

+ **Sass** : for all sass features
+ **Autoprefixer** : to prefix all the CSS 3 cutting-edge features
+ **Watch** : to watch for changes (HTML, CSS & JS)
+ **Copy** : to copy all the JS files
+ **Uglify** : to minify JS
+ **Imagemin** : to minify all the images that get dropped in `dev/img`
+ **Open** : to open the right URL depending on development/production


## Definition

**by·pass**

*verb*

1. to go around or avoid (a place or area)

2. to avoid or ignore (someone or something) especially to **get something done quicker**

    -- [Merriam Webster](http://www.merriam-webster.com/dictionary/bypass)
