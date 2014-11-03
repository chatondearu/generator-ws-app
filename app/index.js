/**
 * Created by rlienard on 03/11/14.
 */

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var clone = require('nodegit').Repo.clone;

var wsGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
      name: 'appName',
      message: 'What is the name of your application ?'
    },{
      type: 'confirm',
      name: 'emptyProject',
      message: 'Would you like an empty project ?    (web-starter-kit with AngularJs without our base files)',
      default: true
    },{
      type: 'confirm',
      name: 'useSlimFramework',
      message: 'Would you like to include Server Side with SlimPhp Framework ?    (PHP5 is required)',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.emptyProject = props.emptyProject;

      done();
    }.bind(this));
  }
});

module.exports = wsGenerator;