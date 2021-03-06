// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function throttle1(fn) {
  var inThrottle = /* record */[/* contents */false];
  return (function (input) {
      if (inThrottle[0]) {
        return 0;
      } else {
        Curry._1(fn, input);
        inThrottle[0] = true;
        setTimeout((function (param) {
                inThrottle[0] = false;
                return /* () */0;
              }), 2000);
        return /* () */0;
      }
    });
}

function throttle2(fn) {
  var inThrottle = /* record */[/* contents */false];
  return (function (param) {
      if (inThrottle[0]) {
        return 0;
      } else {
        Curry._2(fn, param[0], param[1]);
        inThrottle[0] = true;
        setTimeout((function (param) {
                inThrottle[0] = false;
                return /* () */0;
              }), 2000);
        return /* () */0;
      }
    });
}

var Throttle = /* module */[
  /* throttle1 */throttle1,
  /* throttle2 */throttle2
];

function debounce1(fn, $staropt$star) {
  var timeOut = $staropt$star !== undefined ? $staropt$star : 1000;
  var id = /* record */[/* contents */null];
  return (function (a) {
      Belt_Option.mapWithDefault(Caml_option.nullable_to_opt(id[0]), /* () */0, (function (prim) {
              clearTimeout(prim);
              return /* () */0;
            }));
      id[0] = setTimeout((function (param) {
              return Curry._1(fn, a);
            }), timeOut);
      return /* () */0;
    });
}

var Debounce = /* module */[/* debounce1 */debounce1];

exports.Throttle = Throttle;
exports.Debounce = Debounce;
/* No side effect */
