(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.kyanite = {}));
}(this, function (exports) { 'use strict';

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
    for (var i = 0, len = list.length; i < len; i++) {
      acc = xf['@@transducer/step'](list[i], acc);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
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
      return acc.hasOwnProperty(k) ? _an(acc[k] + 1) : _an(1);
    }, {}, arr);
  };
  var countBy$1 = _curry2(countBy);

  var _appendǃ = function _appendǃ(acc, value) {
    acc.push(value);
    return acc;
  };

  var groupBy = function groupBy(fn, list) {
    return reduce$1(function (v, acc) {
      var k = fn(v);
      var _an = _assocǃ$1(acc, k);
      return acc.hasOwnProperty(k) ? _an(_appendǃ(acc[k], v)) : _an([v]);
    }, {}, list);
  };
  var groupBy$1 = _curry2(groupBy);

  var identity = function identity(a) {
    return a;
  };

  var uniqBy = function uniqBy(fn, list) {
    return Object.values(list.reduce(function (acc, a) {
      var k = fn(a);
      return !acc.hasOwnProperty(k) ? _assocǃ$1(acc, k, a) : acc;
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

  var nil = function nil(x) {
    return x == null;
  };

  var ensureArray = function ensureArray(x) {
    if (Array.isArray(x)) {
      return x;
    }
    if (nil(x)) {
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

  var find = function find(fn, arr) {
    return reduce$1(function (val, acc) {
      return fn(val) ? reduced(val) : acc;
    }, null, arr);
  };
  var find$1 = _curry2(find);

  var findIndex = function findIndex(fn, list) {
    return list.findIndex(fn);
  };
  var findIndex$1 = _curry2(findIndex);

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
        return data.hasOwnProperty(key);
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
    return uniq(a.filter(function (x) {
      return has$1(x, grouped);
    }));
  };
  var intersection$1 = _curry2(intersection);

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

  var max = function max(list) {
    return list.reduce(function (a, b) {
      return a >= b ? a : b;
    });
  };

  var maxBy = function maxBy(fn, list) {
    return list.reduce(function (a, b) {
      return fn(a) >= fn(b) ? a : b;
    });
  };
  var maxBy$1 = _curry2(maxBy);

  var min = function min(list) {
    return list.reduce(function (a, b) {
      return a <= b ? a : b;
    });
  };

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

  var sort = function sort(fn, a) {
    return a.slice().sort(fn);
  };
  var sort$1 = _curry2(sort);

  var ascend = function ascend(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  var ascend$1 = _curry2(ascend);

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
    return sort$1(on$1(ascend$1, fn), arr);
  };
  var sortBy$1 = _curry2(sortBy);

  var sortWith = function sortWith(fns, arr) {
    return _toConsumableArray(arr).sort(function (a, b) {
      return fns.reduce(function (acc, f) {
        return acc === 0 ? f(a, b) : acc;
      }, 0);
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
    return fn.apply(void 0, _toConsumableArray(a));
  };
  var apply$1 = _curry2(apply);

  var ascendBy = function ascendBy(fn, a, b) {
    return ascend$1(fn(a), fn(b));
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
    return nil(val) || eq$1(NaN, val) ? def : val;
  };
  var defaultTo$1 = _curry2(defaultTo);

  var descend = function descend(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  };
  var descend$1 = _curry2(descend);

  var descendBy = function descendBy(fn, a, b) {
    return descend$1(fn(a), fn(b));
  };
  var descendBy$1 = _curry3(descendBy);

  var either = function either(fn, gn, a) {
    return fn(a) || gn(a);
  };
  var either$1 = _curry3(either);

  var empty = function empty(x) {
    return nil(x) || !count(x);
  };

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

  var flip = function flip(fn, a, b) {
    return fn(b, a);
  };
  var flip$1 = _curry3(flip);

  var gt = function gt(a, b) {
    return b > a;
  };
  var gt$1 = _curry2(gt);

  var gte = function gte(a, b) {
    return b >= a;
  };
  var gte$1 = _curry2(gte);

  var isEmpty = empty;

  var isNil = nil;

  var lt = function lt(a, b) {
    return b < a;
  };
  var lt$1 = _curry2(lt);

  var lte = function lte(a, b) {
    return b <= a;
  };
  var lte$1 = _curry2(lte);

  var or = function or(a, b) {
    return a || b;
  };
  var or$1 = _curry2(or);

  var pipe = function pipe(arr, init) {
    return arr.reduce(function (acc, fn) {
      return fn(acc);
    }, init);
  };
  var pipe$1 = _curry2(pipe);

  var pipeP = function pipeP(fns, data) {
    return fns.reduce(function (acc, f) {
      return acc.then(f);
    }, Promise.resolve(data));
  };
  var pipeP$1 = _curry2(pipeP);

  var size = function size(x) {
    return x.size;
  };

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

  var even = function even(n) {
    return and$1(!eq$1(n, NaN), eq$1(n % 2, 0));
  };

  var negate = function negate(n) {
    return -n;
  };

  var range = function range(from, to) {
    var result = [];
    for (var i = Number(from), len = Number(to); i < len; i++) {
      result.push(i);
    }
    return result;
  };
  var range$1 = _curry2(range);

  var rem = function rem(a, b) {
    return b % a;
  };
  var rem$1 = _curry2(rem);

  var factors = function factors() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var val = x < 0 ? negate(x) : x;
    return x ? _toConsumableArray(compose$1(filter$1(function (i) {
      return rem$1(i, val) === 0;
    }), range$1(0), val)).concat([val]) : [];
  };

  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  var gcd$1 = _curry2(gcd);

  var inc = function inc(n) {
    return n + 1;
  };

  var isEven = even;

  var odd = function odd(n) {
    if (!eq$1(n, NaN)) {
      var _eq = eq$1(n % 2);
      return !_eq(NaN) && !_eq(0);
    }
    return false;
  };

  var isOdd = odd;

  var prime = function prime(x) {
    var s = Math.sqrt(x);
    var i = 2;
    for (i; i <= s; i++) {
      if (!rem$1(i, x)) {
        return false;
      }
    }
    return x && x !== 1;
  };

  var isPrime = prime;

  var lcm = function lcm(a, b) {
    return Math.abs(Math.floor(a / gcd$1(a, b) * b));
  };
  var lcm$1 = _curry2(lcm);

  var mean = function mean(x) {
    return divide$1(length(x), reduce$1(add$1, 0, x));
  };

  var multiply = function multiply(a, b) {
    return a * b;
  };
  var multiply$1 = _curry2(multiply);

  var pow = function pow(a, b) {
    return Math.pow(b, a);
  };
  var pow$1 = _curry2(pow);

  var round = function round(precision, num) {
    return Number("".concat(Math.round("".concat(num, "e").concat(precision)), "e-").concat(precision));
  };
  var round$1 = _curry2(round);

  var subtract = function subtract(a, b) {
    return b - a;
  };
  var subtract$1 = _curry2(subtract);

  var within = function within(min, max, n) {
    return min < n && max > n;
  };
  var within$1 = _curry3(within);

  var zero = eq$1(0);

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
    if (!keys.length) {
      return obj[p];
    }
    if (nil(obj[p])) {
      return undefined;
    }
    return path(keys, obj[p]);
  };
  var path$1 = _curry2(path);

  var pathOr = function pathOr(a, keys, obj) {
    var res = path$1(keys, obj);
    if (nil(res)) {
      return a;
    }
    return res;
  };
  var pathOr$1 = _curry3(pathOr);

  var plan = function plan(schema, obj) {
    return Object.assign({}, obj, Object.keys(schema).reduce(function (acc, k) {
      return !obj.hasOwnProperty(k) ? acc : _assocǃ$1(acc, k, schema[k](obj[k]));
    }, {}));
  };
  var plan$1 = _curry2(plan);

  var prop = function prop(p, obj) {
    return obj[p];
  };
  var prop$1 = _curry2(prop);

  var props = function props(keys, obj) {
    return map$1(function (k) {
      return obj[k];
    }, keys);
  };
  var props$1 = _curry2(props);

  var sift = function sift(fn, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      return fn(obj[k]) ? _assocǃ$1(acc, k, obj[k]) : acc;
    }, {});
  };
  var sift$1 = _curry2(sift);

  var whole = function whole(schema, obj) {
    return Object.keys(schema).every(function (key) {
      return schema[key](obj[key]);
    });
  };
  var whole$1 = _curry2(whole);

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

  var join = function join(str, list) {
    return list.join(str);
  };
  var join$1 = _curry2(join);

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

  exports.concatMap = concatMap$1;
  exports.countBy = countBy$1;
  exports.difference = difference;
  exports.drop = drop$1;
  exports.dropWhile = dropWhile$1;
  exports.ensureArray = ensureArray;
  exports.every = every$1;
  exports.filter = filter$1;
  exports.find = find$1;
  exports.findIndex = findIndex$1;
  exports.groupBy = groupBy$1;
  exports.insert = insert$1;
  exports.intersection = intersection$1;
  exports.juxt = juxt$1;
  exports.map = map$1;
  exports.max = max;
  exports.maxBy = maxBy$1;
  exports.min = min;
  exports.minBy = minBy$1;
  exports.partition = partition$1;
  exports.prepend = prepend$1;
  exports.reduce = reduce$1;
  exports.reduceRight = reduceRight$1;
  exports.reduced = reduced;
  exports.reject = reject$1;
  exports.remove = remove$1;
  exports.some = some$1;
  exports.sort = sort$1;
  exports.sortBy = sortBy$1;
  exports.sortWith = sortWith$1;
  exports.take = take$1;
  exports.takeWhile = takeWhile$1;
  exports.union = union$1;
  exports.uniq = uniq;
  exports.uniqBy = uniqBy$1;
  exports.update = update$1;
  exports.zip = zip$1;
  exports.always = always$1;
  exports.and = and$1;
  exports.ap = ap$1;
  exports.apply = apply$1;
  exports.ascend = ascend$1;
  exports.ascendBy = ascendBy$1;
  exports.both = both$1;
  exports.branch = branch$1;
  exports.complement = complement$1;
  exports.compose = compose$1;
  exports.composeP = composeP$1;
  exports.count = count;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.deepEq = deepEq$1;
  exports.defaultTo = defaultTo$1;
  exports.descend = descend$1;
  exports.descendBy = descendBy$1;
  exports.either = either$1;
  exports.empty = empty;
  exports.encase = encase$1;
  exports.eq = eq$1;
  exports.eqBy = eqBy$1;
  exports.flip = flip$1;
  exports.gt = gt$1;
  exports.gte = gte$1;
  exports.has = has$1;
  exports.identity = identity;
  exports.isEmpty = isEmpty;
  exports.isNil = isNil;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.nil = nil;
  exports.not = not;
  exports.on = on$1;
  exports.or = or$1;
  exports.pipe = pipe$1;
  exports.pipeP = pipeP$1;
  exports.size = size;
  exports.type = type;
  exports.unless = unless$1;
  exports.when = when$1;
  exports.concat = concat$1;
  exports.endsWith = endsWith$1;
  exports.first = first;
  exports.includes = includes$1;
  exports.last = last;
  exports.length = length;
  exports.nth = nth$1;
  exports.reverse = reverse;
  exports.slice = slice$1;
  exports.add = add$1;
  exports.between = between$1;
  exports.clamp = clamp$1;
  exports.dec = dec;
  exports.divide = divide$1;
  exports.even = even;
  exports.factors = factors;
  exports.gcd = gcd$1;
  exports.inc = inc;
  exports.isEven = isEven;
  exports.isOdd = isOdd;
  exports.isPrime = isPrime;
  exports.lcm = lcm$1;
  exports.mean = mean;
  exports.multiply = multiply$1;
  exports.negate = negate;
  exports.odd = odd;
  exports.pow = pow$1;
  exports.prime = prime;
  exports.range = range$1;
  exports.rem = rem$1;
  exports.round = round$1;
  exports.subtract = subtract$1;
  exports.within = within$1;
  exports.zero = zero;
  exports.any = any$1;
  exports.draft = draft$1;
  exports.height = height;
  exports.omit = omit$1;
  exports.over = over$1;
  exports.path = path$1;
  exports.pathOr = pathOr$1;
  exports.plan = plan$1;
  exports.prop = prop$1;
  exports.props = props$1;
  exports.sift = sift$1;
  exports.whole = whole$1;
  exports.capitalize = capitalize;
  exports.fuzzySearch = fuzzySearch$1;
  exports.join = join$1;
  exports.match = match$1;
  exports.replace = replace$1;
  exports.split = split$1;
  exports.test = test$1;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.trim = trim;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
