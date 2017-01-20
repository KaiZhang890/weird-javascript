;(function(global, $) {

  "use strict";

  var Greeter = function(firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  }

  var supportedLangs = ['en', 'zh'];

  var greetings = {
    en: 'Hello',
    zh: '你好'
  };

  var formalGreetings = {
    en: 'Greetings',
    zh: '您好'
  };

  var logMessages = {
    en: 'Logged in',
    zh: '已登录'
  };

  Greeter.prototype = {

    fullname: function() {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullname();
    },

    greet: function(formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }

  }

  Greeter.init = function(firstname, lastname, language) {

    var self = this;

    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

    self.validate();
  }

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.KZ = Greeter;

}(window, jQuery));
