/* 'app/index.js' */

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

//initialization
var WsAppGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

    this.sourceRoot(path.join(__dirname, '../templates'));
    this.sourceWebStarterKit = '_wsk_sources';
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to WsApp generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'What is the name of your project ?',
      default : this.appname
    }];

    this.prompt(prompts, function (props) {
      this.appname = props.appname;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/scripts');
      this.dest.mkdir('app/assets');
      this.dest.mkdir('app/assets/images');
      this.dest.mkdir('app/assets/fonts');
      this.dest.mkdir('app/styles');
    },

    projectfiles: function () {
      this.src.copy('root/editorconfig', '.editorconfig');
      this.src.copy('root/gitattributes', '.gitattributes');
      this.src.copy('root/gitignore', '.gitignore');
      this.src.copy('root/jshintrc', '.jshintrc');
      this.src.copy('root/_bowerrc', '.bowerrc');
      this.src.copy('root/_package.json', 'package.json');
      this.src.copy('root/_gulpfile.js', 'gulpfile.js');
      this.src.copy('root/_bower.json', 'bower.json');

      //apply starter-kit styles with google componenents (SASS files)
      this.directory(this.sourceWebStarterKit + '/app/styles/', 'app/styles/');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = WsAppGenerator;