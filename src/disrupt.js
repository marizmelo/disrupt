// Author: Mariz Melo
// license: http://rem.mit-license.org
// source: https://github.com/marizmelo/disrupt

var Disrupt = (function Disrupt(global) {
  'use strict';
  var log = true; // true/false for console messages
  return {
    log:  function (msg) {
      log ? console.log(msg): false;
    },
    bind: function () {
      
    }
  };
})(this);

if (typeof exports !== 'undefined') {
  module.exports = Disrupt;
}
