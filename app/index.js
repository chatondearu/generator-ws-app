'use strict';


var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');


//
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

      this.src.copy('../main/editorconfig', '.editorconfig');
      this.src.copy('../main/gitattributes', '.gitattributes');
      this.src.copy('../main/gitignore', '.gitignore');
      this.src.copy('../main/jshintrc', '.jshintrc');
      this.src.copy('../main/_bowerrc', '.bowerrc');
      this.src.copy('../main/_package.json', 'package.json');
      this.src.copy('../main/_gulpfile.js', 'gulpfile.js');
      this.src.copy('../main/_bower.json', 'bower.json');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = WsAppGenerator;
