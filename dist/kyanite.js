(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.kyanite = {}));
}(this, (function (exports) { 'use strict';

  function _curry2(fn) {
    return function f2(a, b) {
      if (!arguments.length) {
        return f2;
      }
      if (arguments.length === 1) {
        return function (_b) {
          return fn(a, _b);
        };
      }
      return fn(a, b);
    };
  }

  var _appendǃ = function _appendǃ(acc, value) {
    acc.push(value);
    return acc;
  };

  var rem = function rem(a, b) {
    return b % a;
  };
  var rem$1 = _curry2(rem);

  var chunk = function chunk(size, data) {
    return data.reduce(function (acc, _, i) {
      return rem$1(size, i) ? acc : _appendǃ(acc, data.slice(i, i + size));
    }, []);
  };
  var chunk$1 = _curry2(chunk);

  var concat = function concat(val, list) {
    return list.concat(val);
  };
  var concat$1 = _curry2(concat);

  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return function (_c) {
            return fn(a, b, _c);
          };
        default:
          return fn(a, b, c);
      }
    };
  }

  var _xwrap = function _xwrap(fn) {
    return {
      '@@transducer/result': function transducerResult(acc) {
        return acc;
      },
      '@@transducer/step': fn
    };
  };

  var reduce = function reduce(fn, acc, list) {
    var xf = _xwrap(fn);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;
        acc = xf['@@transducer/step'](entry, acc);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return xf['@@transducer/result'](acc);
  };
  var reduce$1 = _curry3(reduce);

  var concatMap = function concatMap(fn, arr) {
    return reduce$1(function (v, acc) {
      return concat$1(fn(v), acc);
    }, [], arr);
  };
  var concatMap$1 = _curry2(concatMap);

  var _assocǃ = function _assocǃ(acc, key, val) {
    acc[key] = val;
    return acc;
  };
  var _assocǃ$1 = _curry3(_assocǃ);

  var countBy = function countBy(fn, arr) {
    return reduce$1(function (a, acc) {
      var k = fn(a);
      var _an = _assocǃ$1(acc, k);
      return Object.prototype.hasOwnProperty.call(acc, k) ? _an(acc[k] + 1) : _an(1);
    }, {}, arr);
  };
  var countBy$1 = _curry2(countBy);

  var groupBy = function groupBy(fn, list) {
    return reduce$1(function (v, acc) {
      var k = fn(v);
      var _an = _assocǃ$1(acc, k);
      return Object.prototype.hasOwnProperty.call(acc, k) ? _an(_appendǃ(acc[k], v)) : _an([v]);
    }, {}, list);
  };
  var groupBy$1 = _curry2(groupBy);

  var identity = function identity(a) {
    return a;
  };

  var uniqBy = function uniqBy(fn, list) {
    return Object.values(list.reduce(function (acc, a) {
      var k = fn(a);
      return !Object.prototype.hasOwnProperty.call(acc, k) ? _assocǃ$1(acc, k, a) : acc;
    }, {}));
  };
  var uniqBy$1 = _curry2(uniqBy);

  var uniq = uniqBy$1(identity);

  var filter = function filter(fn, arr) {
    return reduce$1(function (val, acc) {
      return fn(val) ? _appendǃ(acc, val) : acc;
    }, [], arr);
  };
  var filter$1 = _curry2(filter);

  var difference = function difference(arrs) {
    var arr = concatMap$1(uniq, arrs);
    var grouped = groupBy$1(identity, arr);
    return filter$1(function (x) {
      return grouped[x].length === 1;
    }, arr);
  };

  var drop = function drop(i, list) {
    return list.slice(i, Infinity);
  };
  var drop$1 = _curry2(drop);

  var dropWhile = function dropWhile(fn, arr) {
    var i = arr.findIndex(function (x) {
      return !fn(x);
    });
    return i < 0 ? [] : arr.slice(i);
  };
  var dropWhile$1 = _curry2(dropWhile);

  var isNil = function isNil(x) {
    return x == null;
  };

  var ensureArray = function ensureArray(x) {
    if (Array.isArray(x)) {
      return x;
    }
    if (isNil(x)) {
      return [];
    }
    return [x];
  };

  var reduced = function reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  };

  var every = function every(fn, data) {
    return reduce$1(function (val, acc) {
      return fn(val) ? acc : reduced(false);
    }, true, data);
  };
  var every$1 = _curry2(every);

  var everyPass = function everyPass(fns, data) {
    return reduce$1(function (f, acc) {
      return !f(data) ? reduced(false) : acc;
    }, true, fns);
  };
  var everyPass$1 = _curry2(everyPass);

  var find = function find(fn, arr) {
    return reduce$1(function (val, acc) {
      return fn(val) ? reduced(val) : acc;
    }, undefined, arr);
  };
  var find$1 = _curry2(find);

  var findIndex = function findIndex(fn, list) {
    return list.findIndex(fn);
  };
  var findIndex$1 = _curry2(findIndex);

  var flip = function flip(fn, a, b) {
    return fn(b, a);
  };
  var flip$1 = _curry3(flip);

  var fold = function fold(fn, arr) {
    return arr.reduce(flip$1(fn));
  };
  var fold$1 = _curry2(fold);

  var insert = function insert(i, d, arr) {
    var idx = i < arr.length && i >= 0 ? i : arr.length;
    var result = arr.slice(0);
    result.splice(idx, 0, d);
    return result;
  };
  var insert$1 = _curry3(insert);

  var type = function type(x) {
    return Object.prototype.toString.call(x).slice(8, -1);
  };

  var has = function has(key, data) {
    var t = type(data);
    switch (t) {
      case 'Array':
      case 'String':
        return data.includes(key);
      case 'Object':
      case 'Arguments':
        return Object.prototype.hasOwnProperty.call(data, key);
      case 'Map':
      case 'Set':
        return data.has(key);
      default:
        throw new TypeError("Unsupported type: ".concat(t));
    }
  };
  var has$1 = _curry2(has);

  var intersection = function intersection(a, b) {
    var grouped = groupBy$1(identity, b);
    return uniq(filter$1(function (x) {
      return has$1(x, grouped);
    }, a));
  };
  var intersection$1 = _curry2(intersection);

  var join = function join(str, list) {
    return list.join(str);
  };
  var join$1 = _curry2(join);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var map = function map(fn, list) {
    var len = list.length;
    var result = Array(len);
    for (var i = 0; i < len; i++) {
      _assocǃ$1(result, i, fn(list[i]));
    }
    return result;
  };
  var map$1 = _curry2(map);

  var juxt = function juxt(fns, x) {
    return map$1(function (f) {
      return f.apply(void 0, _toConsumableArray(x));
    }, fns);
  };
  var juxt$1 = _curry2(juxt);

  var max = reduce$1(function (a, b) {
    return a >= b ? a : b;
  }, '');

  var maxBy = function maxBy(fn, list) {
    return list.reduce(function (a, b) {
      return fn(a) >= fn(b) ? a : b;
    });
  };
  var maxBy$1 = _curry2(maxBy);

  var min = fold$1(function (a, b) {
    return a <= b ? a : b;
  });

  var minBy = function minBy(fn, list) {
    return list.reduce(function (a, b) {
      return fn(a) <= fn(b) ? a : b;
    });
  };
  var minBy$1 = _curry2(minBy);

  var partition = function partition(fn, list) {
    return reduce$1(function (v, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          pass = _ref2[0],
          fail = _ref2[1];
      return fn(v) ? [_appendǃ(pass, v), fail] : [pass, _appendǃ(fail, v)];
    }, [[], []], list);
  };
  var partition$1 = _curry2(partition);

  var prop = function prop(p, obj) {
    return obj[p];
  };
  var prop$1 = _curry2(prop);

  var pluck = function pluck(p, list) {
    return map$1(prop$1(p), list);
  };
  var pluck$1 = _curry2(pluck);

  var prepend = function prepend(x, list) {
    return [].concat(x, list);
  };
  var prepend$1 = _curry2(prepend);

  var reduceRight = function reduceRight(fn, acc, arr) {
    var xf = _xwrap(fn);
    for (var i = arr.length - 1; i >= 0; i--) {
      acc = xf['@@transducer/step'](arr[i], acc);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
    }
    return xf['@@transducer/result'](acc);
  };
  var reduceRight$1 = _curry3(reduceRight);

  var not = function not(x) {
    return !x;
  };

  var complement = function complement(fn, a) {
    return not(fn(a));
  };
  var complement$1 = _curry2(complement);

  var reject = function reject(fn, arr) {
    return filter$1(complement$1(fn), arr);
  };
  var reject$1 = _curry2(reject);

  var remove = function remove(i, x) {
    return concatMap$1(identity, [x.slice(0, i), x.slice(i + 1)]);
  };
  var remove$1 = _curry2(remove);

  var some = function some(fn, arr) {
    return reduce$1(function (val, acc) {
      return fn(val) ? reduced(true) : acc;
    }, false, arr);
  };
  var some$1 = _curry2(some);

  var somePass = function somePass(fns, data) {
    return reduce$1(function (f, acc) {
      return f(data) ? reduced(true) : acc;
    }, false, fns);
  };
  var somePass$1 = _curry2(somePass);

  var sort = function sort(fn, a) {
    return a.slice().sort(fn);
  };
  var sort$1 = _curry2(sort);

  var ascend = function ascend(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  function _curry4(fn) {
    return function f4(a, b, c, d) {
      switch (arguments.length) {
        case 0:
          return f4;
        case 1:
          return _curry3(function (_b, _c, _d) {
            return fn(a, _b, _c, _d);
          });
        case 2:
          return _curry2(function (_c, _d) {
            return fn(a, b, _c, _d);
          });
        case 3:
          return function (_d) {
            return fn(a, b, c, _d);
          };
        default:
          return fn(a, b, c, d);
      }
    };
  }

  var on = function on(fn, gn, a, b) {
    return fn(gn(a), gn(b));
  };
  var on$1 = _curry4(on);

  var sortBy = function sortBy(fn, arr) {
    return sort$1(on$1(ascend, fn), arr);
  };
  var sortBy$1 = _curry2(sortBy);

  var sortWith = function sortWith(fns, arr) {
    return _toConsumableArray(arr).sort(function (a, b) {
      return reduce$1(function (f, acc) {
        return acc === 0 ? f(a, b) : acc;
      }, 0, fns);
    });
  };
  var sortWith$1 = _curry2(sortWith);

  var take = function take(i, list) {
    return list.slice(0, i);
  };
  var take$1 = _curry2(take);

  var takeWhile = function takeWhile(fn, arr) {
    var i = arr.findIndex(function (x) {
      return !fn(x);
    });
    return i < 0 ? arr : arr.slice(0, i);
  };
  var takeWhile$1 = _curry2(takeWhile);

  var union = function union(list, other) {
    return uniq(list.concat(other));
  };
  var union$1 = _curry2(union);

  var update = function update(index, val, list) {
    return concatMap$1(identity, [list.slice(0, index), val, list.slice(index + 1)]);
  };
  var update$1 = _curry3(update);

  var zip = function zip(x, y) {
    var arr = x.length < y.length ? x : y;
    return arr.reduce(function (acc, _, i) {
      return _assocǃ$1(acc, x[i], y[i]);
    }, {});
  };
  var zip$1 = _curry2(zip);

  var addIndex = function addIndex(fn) {
    return function () {
      var idx = 0;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var origFn = args[0];
      var list = args[args.length - 1];
      var copiedArgs = args.slice();
      copiedArgs[0] = function () {
        for (var _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          innerArgs[_key2] = arguments[_key2];
        }
        var result = origFn.apply(void 0, _toConsumableArray(concatMap$1(identity, [innerArgs, [idx, list]])));
        idx += 1;
        return result;
      };
      return fn.apply(void 0, _toConsumableArray(copiedArgs));
    };
  };

  var always = function always(a, _) {
    return a;
  };
  var always$1 = _curry2(always);

  var and = function and(a, b) {
    return a && b;
  };
  var and$1 = _curry2(and);

  var ap = function ap(fn, gn, x) {
    return fn(x)(gn(x));
  };
  var ap$1 = _curry3(ap);

  var apply = function apply(fn, a) {
    return fn(a);
  };
  var apply$1 = _curry2(apply);

  var applyN = function applyN(fn, a) {
    return fn.apply(void 0, _toConsumableArray(a));
  };
  var applyN$1 = _curry2(applyN);

  var ascendBy = function ascendBy(fn, a, b) {
    return ascend(fn(a), fn(b));
  };
  var ascendBy$1 = _curry3(ascendBy);

  var both = function both(f, g, a) {
    return f(a) && g(a);
  };
  var both$1 = _curry3(both);

  var branch = function branch(p, f, g, a) {
    return p(a) ? f(a) : g(a);
  };
  var branch$1 = _curry4(branch);

  var compose = function compose(fn, gn, a) {
    return fn(gn(a));
  };
  var compose$1 = _curry3(compose);

  var composeP = function composeP(fn, gn, a) {
    return gn(a).then(fn);
  };
  var composeP$1 = _curry3(composeP);

  var length = function length(a) {
    return a.length;
  };

  var height = compose$1(length, Object.values);

  var count = function count(a) {
    var key = type(a);
    switch (key) {
      case 'Array':
      case 'String':
        return a.length;
      case 'Object':
        return height(a);
      case 'Map':
      case 'Set':
        return a.size;
      default:
        throw new TypeError("Unsupported type: ".concat(key));
    }
  };

  var curry = function curry(f) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (f.length <= args.length) {
      return f.apply(void 0, args);
    }
    return function () {
      for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }
      return curry.apply(void 0, [f].concat(args, rest));
    };
  };

  var curryN = function curryN(n, f) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (n <= 0) {
      return f.apply(void 0, args);
    }
    return function () {
      for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }
      return curryN.apply(void 0, [n - rest.length, f].concat(args, rest));
    };
  };

  var eq = function eq(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var eq$1 = _curry2(eq);

  var _functionName = function _functionName(f) {
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  };
  var _containsWith = function _containsWith(pred, x, list) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (pred(x, list[i])) {
        return true;
      }
    }
    return false;
  };
  var _arrFromIter = function _arrFromIter(iter) {
    var list = [];
    var next = null;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  };
  var _uniqContentEquals = function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrFromIter(aIterator);
    var b = _arrFromIter(bIterator);
    function _eq(_a, _b) {
      return deepEq(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_containsWith(function (b, aItem) {
      return !_containsWith(_eq, aItem, b);
    }, b, a);
  };
  var deepEq = function deepEq(a, b) {
    var stackA = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var stackB = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (eq$1(a, b)) {
      return true;
    }
    var aType = type(a);
    if (aType !== type(b) || a == null || b == null) {
      return false;
    }
    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }
    switch (aType) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
          return a === b;
        }
        break;
      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(_typeof(a) === _typeof(b) && eq$1(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case 'Date':
        if (!eq$1(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case 'Error':
        return a.name === b.name && a.message === b.message;
      case 'RegExp':
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    for (var i = stackA.length - 1; i >= 0; i--) {
      if (stackA[i] === a) {
        return stackB[i] === b;
      }
    }
    switch (aType) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case 'Set':
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;
      default:
        return false;
    }
    var keysA = Object.keys(a);
    if (keysA.length !== Object.values(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    for (var _i = keysA.length - 1; _i >= 0; _i--) {
      var key = keysA[_i];
      if (!(Object.prototype.hasOwnProperty.call(b, key) && deepEq(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
    }
    return true;
  };
  var deepEq$1 = _curry2(deepEq);

  var defaultTo = function defaultTo(def, val) {
    return isNil(val) || eq$1(NaN, val) ? def : val;
  };
  var defaultTo$1 = _curry2(defaultTo);

  var descend = function descend(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  };

  var descendBy = function descendBy(fn, a, b) {
    return descend(fn(a), fn(b));
  };
  var descendBy$1 = _curry3(descendBy);

  var either = function either(fn, gn, a) {
    return fn(a) || gn(a);
  };
  var either$1 = _curry3(either);

  var encase = function encase(fn, a) {
    try {
      return fn(a);
    } catch (err) {
      return undefined;
    }
  };
  var encase$1 = _curry2(encase);

  var eqBy = function eqBy(fn, a, b) {
    return eq$1(fn(a), fn(b));
  };
  var eqBy$1 = _curry3(eqBy);

  var gt = function gt(a, b) {
    return b > a;
  };
  var gt$1 = _curry2(gt);

  var gte = function gte(a, b) {
    return b >= a;
  };
  var gte$1 = _curry2(gte);

  var isEmpty = function isEmpty(x) {
    return isNil(x) || !count(x);
  };

  var lt = function lt(a, b) {
    return b < a;
  };
  var lt$1 = _curry2(lt);

  var lte = function lte(a, b) {
    return b <= a;
  };
  var lte$1 = _curry2(lte);

  var notEq = function notEq(a, b) {
    return complement$1(eq$1(a), b);
  };
  var notEq$1 = _curry2(notEq);

  var or = function or(a, b) {
    return a || b;
  };
  var or$1 = _curry2(or);

  var pipe = function pipe(arr, init) {
    return reduce$1(function (fn, acc) {
      return fn(acc);
    }, init, arr);
  };
  var pipe$1 = _curry2(pipe);

  var pipeP = function pipeP(fns, data) {
    return reduce$1(function (f, acc) {
      return acc.then(f);
    }, Promise.resolve(data), fns);
  };
  var pipeP$1 = _curry2(pipeP);

  var unless = function unless(fn, act, x) {
    return fn(x) ? x : act(x);
  };
  var unless$1 = _curry3(unless);

  var when = function when(fn, act, x) {
    return fn(x) ? act(x) : x;
  };
  var when$1 = _curry3(when);

  var slice = function slice(a, b, list) {
    return list.slice(a, b);
  };
  var slice$1 = _curry3(slice);

  var endsWith = function endsWith(a, list) {
    return compose$1(deepEq$1(a), slice$1(-a.length, Infinity), list);
  };
  var endsWith$1 = _curry2(endsWith);

  var first = function first(x) {
    return x[0];
  };

  var includes = function includes(value, list) {
    return list.indexOf(value) !== -1;
  };
  var includes$1 = _curry2(includes);

  var last = function last(x) {
    return x[x.length - 1];
  };

  var nth = function nth(o, list) {
    var i = o < 0 ? list.length + o : o;
    return list[i];
  };
  var nth$1 = _curry2(nth);

  var reverse = function reverse(list) {
    return Array.isArray(list) ? list.slice().reverse() : list.split('').reverse().join('');
  };

  var startsWith = function startsWith(a, list) {
    return compose$1(deepEq$1(a), slice$1(0, a.length), list);
  };
  var startsWith$1 = _curry2(startsWith);

  var add = function add(a, b) {
    return a + b;
  };
  var add$1 = _curry2(add);

  var between = function between(min, max, n) {
    return min <= n && max >= n;
  };
  var between$1 = _curry3(between);

  var clamp = function clamp(min, max, val) {
    if (min > max) {
      throw new Error('Min cannot be greater than max in clamp');
    }
    if (val > min && val < max) {
      return val;
    }
    return val <= min ? min : max;
  };
  var clamp$1 = _curry3(clamp);

  var dec = function dec(n) {
    return n - 1;
  };

  var divide = function divide(a, b) {
    return b / a;
  };
  var divide$1 = _curry2(divide);

  var factors = function factors() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var factors = [];
    var quotient = 0;
    for (var i = 1; i <= x; i++) {
      quotient = x / i;
      if (quotient === Math.floor(quotient)) {
        _appendǃ(factors, i);
      }
    }
    return factors;
  };

  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  var gcd$1 = _curry2(gcd);

  var inc = function inc(n) {
    return n + 1;
  };

  var isEven = function isEven(n) {
    return and$1(!eq$1(n, NaN), eq$1(n % 2, 0));
  };

  var isOdd = function isOdd(n) {
    if (!eq$1(n, NaN)) {
      var _eq = eq$1(n % 2);
      return !_eq(NaN) && !_eq(0);
    }
    return false;
  };

  var isPrime = function isPrime(n) {
    for (var i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (!rem$1(i, n)) {
        return false;
      }
    }
    return n > 1;
  };

  var isZero = eq$1(0);

  var lcm = function lcm(a, b) {
    return Math.abs(Math.floor(a / gcd$1(a, b) * b));
  };
  var lcm$1 = _curry2(lcm);

  var mean = function mean(x) {
    return divide$1(length(x), reduce$1(add$1, 0, x));
  };

  var median = function median(list) {
    var len = list.length;
    if (len === 0) {
      return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return pipe$1([sort$1(ascend), slice$1(idx, idx + width), mean], list);
  };

  var mod = function mod(a, b) {
    if (some$1(identity, [!Number.isInteger(a), !Number.isInteger(b), b < 1])) {
      return NaN;
    }
    return (a % b + b) % b;
  };
  var mod$1 = _curry2(mod);

  var multiples = function multiples(limit, n) {
    var m = [];
    for (var i = 0; i < limit; i++) {
      var result = i * n;
      if (result > limit) {
        return m;
      }
      _appendǃ(m, result);
    }
    return m;
  };
  var multiples$1 = _curry2(multiples);

  var multiply = function multiply(a, b) {
    return a * b;
  };
  var multiply$1 = _curry2(multiply);

  var negate = function negate(n) {
    return -n;
  };

  var pow = function pow(a, b) {
    return Math.pow(b, a);
  };
  var pow$1 = _curry2(pow);

  var product = reduce$1(multiply$1, 1);

  var range = function range(from, to) {
    var result = [];
    for (var i = Number(from), len = Number(to); i < len; i++) {
      result.push(i);
    }
    return result;
  };
  var range$1 = _curry2(range);

  var round = function round(precision, num) {
    return Number("".concat(Math.round("".concat(num, "e").concat(precision)), "e-").concat(precision));
  };
  var round$1 = _curry2(round);

  var subtract = function subtract(a, b) {
    return b - a;
  };
  var subtract$1 = _curry2(subtract);

  var sum = reduce$1(add$1, 0);

  var within = function within(min, max, n) {
    return min < n && max > n;
  };
  var within$1 = _curry3(within);

  var amend = function amend(a, b) {
    return Object.assign({}, a, b);
  };
  var amend$1 = _curry2(amend);

  var any = function any(schema, obj) {
    return Object.keys(schema).some(function (key) {
      return schema[key](obj[key]);
    });
  };
  var any$1 = _curry2(any);

  var draft = function draft(fn, obj) {
    return reduce$1(function (key, acc) {
      return _assocǃ$1(acc, key, fn(obj[key]));
    }, {}, Object.keys(obj));
  };
  var draft$1 = _curry2(draft);

  var omit = function omit(keys, obj) {
    return reduce$1(function (prop, acc) {
      return not(includes$1(prop, keys)) ? _assocǃ$1(acc, prop, obj[prop]) : acc;
    }, {}, Object.keys(obj));
  };
  var omit$1 = _curry2(omit);

  var over = function over(key, fn, acc) {
    return Object.assign({}, acc, _defineProperty({}, key, fn(acc[key])));
  };
  var over$1 = _curry3(over);

  var path = function path(_ref, obj) {
    var _ref2 = _toArray(_ref),
        p = _ref2[0],
        keys = _ref2.slice(1);
    if (isNil(obj) || isNil(obj[p])) {
      return undefined;
    }
    if (!keys.length) {
      return obj[p];
    }
    return path(keys, obj[p]);
  };
  var path$1 = _curry2(path);

  var pathOr = function pathOr(a, keys, obj) {
    var res = path$1(keys, obj);
    if (isNil(res)) {
      return a;
    }
    return res;
  };
  var pathOr$1 = _curry3(pathOr);

  var plan = function plan(schema, obj) {
    return Object.assign({}, obj, reduce$1(function (k, acc) {
      return !Object.prototype.hasOwnProperty.call(obj, k) ? acc : _assocǃ$1(acc, k, schema[k](obj[k]));
    }, {}, Object.keys(schema)));
  };
  var plan$1 = _curry2(plan);

  var propEq = function propEq(key, val, obj) {
    return compose$1(eq$1(val), prop$1(key), obj);
  };
  var propEq$1 = _curry3(propEq);

  var propOr = function propOr(def, key, obj) {
    var val = prop$1(key, obj);
    if (isNil(val)) {
      return def;
    }
    return val;
  };
  var propOr$1 = _curry3(propOr);

  var props = function props(keys, obj) {
    return map$1(function (k) {
      return obj[k];
    }, keys);
  };
  var props$1 = _curry2(props);

  var sift = function sift(fn, obj) {
    return reduce$1(function (k, acc) {
      return fn(obj[k]) ? _assocǃ$1(acc, k, obj[k]) : acc;
    }, {}, Object.keys(obj));
  };
  var sift$1 = _curry2(sift);

  var whole = function whole(schema, obj) {
    return Object.keys(schema).every(function (key) {
      return schema[key](obj[key]);
    });
  };
  var whole$1 = _curry2(whole);

  var withDefaults = function withDefaults(def, obj) {
    return reduce$1(function (k, acc) {
      return _assocǃ$1(acc, k, defaultTo$1(def[k], obj[k]));
    }, {}, Object.keys(def));
  };
  var withDefaults$1 = _curry2(withDefaults);

  var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var fuzzySearch = function fuzzySearch(needle, haystack) {
    var hLen = haystack.length;
    var nLen = needle.length;
    var j = 0;
    if (nLen > hLen) {
      return false;
    }
    if (nLen === hLen) {
      return needle === haystack;
    }
    outer: for (var i = 0; i < nLen; i++) {
      var nChar = needle.charCodeAt(i);
      for (j; j < hLen; j++) {
        if (haystack.charCodeAt(j) === nChar) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  };
  var fuzzySearch$1 = _curry2(fuzzySearch);

  var match = function match(reg, str) {
    return str.match(reg);
  };
  var match$1 = _curry2(match);

  var replace = function replace(a, b, str) {
    return str.replace(a, b);
  };
  var replace$1 = _curry3(replace);

  var split = function split(char, str) {
    return str.split(char);
  };
  var split$1 = _curry2(split);

  var test = function test(reg, str) {
    return reg.test(str);
  };
  var test$1 = _curry2(test);

  var toLower = function toLower(a) {
    return a.toLowerCase();
  };

  var toUpper = function toUpper(a) {
    return a.toUpperCase();
  };

  var trim = function trim(str) {
    return str.trim();
  };

  exports.add = add$1;
  exports.addIndex = addIndex;
  exports.always = always$1;
  exports.amend = amend$1;
  exports.and = and$1;
  exports.any = any$1;
  exports.ap = ap$1;
  exports.apply = apply$1;
  exports.applyN = applyN$1;
  exports.ascend = ascend;
  exports.ascendBy = ascendBy$1;
  exports.between = between$1;
  exports.both = both$1;
  exports.branch = branch$1;
  exports.capitalize = capitalize;
  exports.chunk = chunk$1;
  exports.clamp = clamp$1;
  exports.complement = complement$1;
  exports.compose = compose$1;
  exports.composeP = composeP$1;
  exports.concat = concat$1;
  exports.concatMap = concatMap$1;
  exports.count = count;
  exports.countBy = countBy$1;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.dec = dec;
  exports.deepEq = deepEq$1;
  exports.defaultTo = defaultTo$1;
  exports.descend = descend;
  exports.descendBy = descendBy$1;
  exports.difference = difference;
  exports.divide = divide$1;
  exports.draft = draft$1;
  exports.drop = drop$1;
  exports.dropWhile = dropWhile$1;
  exports.either = either$1;
  exports.encase = encase$1;
  exports.endsWith = endsWith$1;
  exports.ensureArray = ensureArray;
  exports.eq = eq$1;
  exports.eqBy = eqBy$1;
  exports.every = every$1;
  exports.everyPass = everyPass$1;
  exports.factors = factors;
  exports.filter = filter$1;
  exports.find = find$1;
  exports.findIndex = findIndex$1;
  exports.first = first;
  exports.flip = flip$1;
  exports.fold = fold$1;
  exports.fuzzySearch = fuzzySearch$1;
  exports.gcd = gcd$1;
  exports.groupBy = groupBy$1;
  exports.gt = gt$1;
  exports.gte = gte$1;
  exports.has = has$1;
  exports.height = height;
  exports.identity = identity;
  exports.inc = inc;
  exports.includes = includes$1;
  exports.insert = insert$1;
  exports.intersection = intersection$1;
  exports.isEmpty = isEmpty;
  exports.isEven = isEven;
  exports.isNil = isNil;
  exports.isOdd = isOdd;
  exports.isPrime = isPrime;
  exports.isZero = isZero;
  exports.join = join$1;
  exports.juxt = juxt$1;
  exports.last = last;
  exports.lcm = lcm$1;
  exports.length = length;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.map = map$1;
  exports.match = match$1;
  exports.max = max;
  exports.maxBy = maxBy$1;
  exports.mean = mean;
  exports.median = median;
  exports.min = min;
  exports.minBy = minBy$1;
  exports.mod = mod$1;
  exports.multiples = multiples$1;
  exports.multiply = multiply$1;
  exports.negate = negate;
  exports.not = not;
  exports.notEq = notEq$1;
  exports.nth = nth$1;
  exports.omit = omit$1;
  exports.on = on$1;
  exports.or = or$1;
  exports.over = over$1;
  exports.partition = partition$1;
  exports.path = path$1;
  exports.pathOr = pathOr$1;
  exports.pipe = pipe$1;
  exports.pipeP = pipeP$1;
  exports.plan = plan$1;
  exports.pluck = pluck$1;
  exports.pow = pow$1;
  exports.prepend = prepend$1;
  exports.product = product;
  exports.prop = prop$1;
  exports.propEq = propEq$1;
  exports.propOr = propOr$1;
  exports.props = props$1;
  exports.range = range$1;
  exports.reduce = reduce$1;
  exports.reduceRight = reduceRight$1;
  exports.reduced = reduced;
  exports.reject = reject$1;
  exports.rem = rem$1;
  exports.remove = remove$1;
  exports.replace = replace$1;
  exports.reverse = reverse;
  exports.round = round$1;
  exports.sift = sift$1;
  exports.slice = slice$1;
  exports.some = some$1;
  exports.somePass = somePass$1;
  exports.sort = sort$1;
  exports.sortBy = sortBy$1;
  exports.sortWith = sortWith$1;
  exports.split = split$1;
  exports.startsWith = startsWith$1;
  exports.subtract = subtract$1;
  exports.sum = sum;
  exports.take = take$1;
  exports.takeWhile = takeWhile$1;
  exports.test = test$1;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.trim = trim;
  exports.type = type;
  exports.union = union$1;
  exports.uniq = uniq;
  exports.uniqBy = uniqBy$1;
  exports.unless = unless$1;
  exports.update = update$1;
  exports.when = when$1;
  exports.whole = whole$1;
  exports.withDefaults = withDefaults$1;
  exports.within = within$1;
  exports.zip = zip$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
