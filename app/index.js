'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var clone = require('nodegit').Repo.clone;

//initialization
var WsAppGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
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

  getWebStarterKitFromGit: function() {
    var that = this;

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
      this.dest.mkdir('test');

      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('gitattributes', '.gitattributes');
      this.src.copy('gitignore', '.gitignore');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('_bowerrc', '.bowerrc');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_bower.json', 'bower.json');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = WsAppGenerator;
