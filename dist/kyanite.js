(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.kyanite = {})));
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

  var concatMap = function concatMap(fn, arr) {
    return arr.reduce(function (acc, v) {
      return acc.concat(fn(v));
    }, []);
  };
  var concatMap$1 = _curry2(concatMap);

  var countBy = function countBy(fn, arr) {
    return arr.reduce(function (acc, a) {
      var k = fn(a);
      if (acc.hasOwnProperty(k)) {
        acc[k] += 1;
      } else {
        acc[k] = 1;
      }
      return acc;
    }, {});
  };
  var countBy$1 = _curry2(countBy);

  var difference = function difference(first, second) {
    return first.filter(function (x) {
      return second.indexOf(x) === -1;
    });
  };
  var difference$1 = _curry2(difference);

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

  var every = function every(fn, x) {
    return x.every(fn);
  };
  var every$1 = _curry2(every);

  var filter = function filter(fn, list) {
    return list.filter(fn);
  };
  var filter$1 = _curry2(filter);

  var find = function find(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var val = list[idx];
      if (fn(val)) {
        return val;
      }
      idx += 1;
    }
    return undefined;
  };
  var find$1 = _curry2(find);

  var findIndex = function findIndex(fn, list) {
    var len = list.length;
    var i = 0;
    while (i < len) {
      if (fn(list[i])) {
        return i;
      }
      i++;
    }
    return -1;
  };
  var findIndex$1 = _curry2(findIndex);

  var has = function has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
  var has$1 = _curry2(has);

  var groupBy = function groupBy(fn, list) {
    return list.reduce(function (acc, v) {
      var k = fn(v);
      var tmp = {};
      tmp[k] = has$1(k, acc) ? acc[k].concat(v) : [v];
      return Object.assign(acc, tmp);
    }, {});
  };
  var groupBy$1 = _curry2(groupBy);

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

  var insert = function insert(i, d, arr) {
    var idx = i < arr.length && i >= 0 ? i : arr.length;
    var result = arr.slice(0);
    result.splice(idx, 0, d);
    return result;
  };
  var insert$1 = _curry3(insert);

  var intersection = function intersection(a, b) {
    return a.filter(function (x) {
      return b.indexOf(x) !== -1;
    });
  };
  var intersection$1 = _curry2(intersection);

  var map = function map(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(list[idx]);
      idx += 1;
    }
    return result;
  };
  var map$1 = _curry2(map);

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

  var partition = function partition(fn, list) {
    return list.reduce(function (_ref, v) {
      var _ref2 = _slicedToArray(_ref, 2),
          pass = _ref2[0],
          fail = _ref2[1];
      return fn(v) ? [pass.concat(v), fail] : [pass, fail.concat(v)];
    }, [[], []]);
  };
  var partition$1 = _curry2(partition);

  var prepend = function prepend(x, list) {
    return [].concat(x, list);
  };
  var prepend$1 = _curry2(prepend);

  var reduce = function reduce(fn, init, list) {
    return list.reduce(fn, init);
  };
  var reduce$1 = _curry3(reduce);

  var not = function not(x) {
    return !x;
  };

  var complement = function complement(fn, a) {
    return not(fn(a));
  };
  var complement$1 = _curry2(complement);

  var reject = function reject(fn, list) {
    return list.filter(complement$1(fn));
  };
  var reject$1 = _curry2(reject);

  var identity = function identity(a) {
    return a;
  };

  var remove = function remove(i, x) {
    return concatMap$1(identity, [x.slice(0, i), x.slice(i + 1)]);
  };
  var remove$1 = _curry2(remove);

  var some = function some(fn, x) {
    return x.some(fn);
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

  var uniqBy = function uniqBy(fn, list) {
    return Object.values(list.reduce(function (acc, a) {
      var k = fn(a);
      if (!acc.hasOwnProperty(k)) {
        acc[k] = a;
      }
      return acc;
    }, {}));
  };
  var uniqBy$1 = _curry2(uniqBy);

  var uniq = uniqBy$1(identity);

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
      return Object.assign(acc, _defineProperty({}, x[i], y[i]));
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

  var ap = function ap(fns, list) {
    return fns.reduce(function (acc, f) {
      return acc.concat(list.map(f));
    }, []);
  };
  var ap$1 = _curry2(ap);

  var apply = function apply(fn, a) {
    return fn.apply(void 0, _toConsumableArray(ensureArray(a)));
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

  var call = function call(fn, a) {
    return fn(a);
  };
  var call$1 = _curry2(call);

  var compose = function compose(fn, gn, a) {
    return fn(gn(a));
  };
  var compose$1 = _curry3(compose);

  var composeP = function composeP(fn, gn, a) {
    return gn(a).then(fn);
  };
  var composeP$1 = _curry3(composeP);

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

  var arrFromIter = function arrFromIter(iter) {
    var list = [];
    var next = null;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  };

  var type = function type(x) {
    if (x === null) {
      return 'Null';
    }
    if (x === undefined) {
      return 'Undefined';
    }
    return Object.prototype.toString.call(x).slice(8, -1);
  };

  var containsWith = function containsWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var uniqContentEquals = function uniqContentEquals(aIterator, bIterator, stackA, stackB, eqFn) {
    var a = arrFromIter(aIterator);
    var b = arrFromIter(bIterator);
    function eq(_a, _b) {
      return eqFn(_a, _b, stackA.slice(), stackB.slice());
    }
    return !containsWith(function (b, aItem) {
      return !containsWith(eq, aItem, b);
    }, b, a);
  };
  var _deepEq = function _deepEq(a, b, stackA, stackB, eqFn) {
    var aTag = type(a);
    var bTag = type(b);
    var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
    if (aTag !== bTag) {
      return false;
    }
    switch (aTag) {
      case 'RegExp':
      case 'String':
        return '' + a === '' + b;
      case 'Number':
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case 'Date':
      case 'Boolean':
        return +a === +b;
      case 'Symbol':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }
    var idx = stackA.length;
    while (idx--) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
    }
    switch (aTag) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }
        return uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]), eqFn);
      case 'Set':
        if (a.size !== b.size) {
          return false;
        }
        return uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]), eqFn);
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
    if (keysA.length !== Object.keys(b).length) {
      return false;
    }
    idx = keysA.length;
    while (idx--) {
      var key = keysA[idx];
      if (!(has$1(key, b) && eqFn(b[key], a[key], stackA.concat([a]), stackB.concat([b])))) {
        return false;
      }
    }
    return true;
  };
  var equal = function equal(a, b, stackA, stackB) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return false;
    }
    if (a !== a) {
      return b !== b;
    }
    return _deepEq(a, b, stackA, stackB, equal);
  };

  var deepEq = function deepEq(a, b) {
    return equal(a, b, [], []);
  };
  var deepEq$1 = _curry2(deepEq);

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

  var encase = function encase(fn, a) {
    try {
      return fn(a);
    } catch (err) {
      return undefined;
    }
  };
  var encase$1 = _curry2(encase);

  var eq = function eq(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var eq$1 = _curry2(eq);

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

  var isEmpty = function isEmpty(x) {
    return isNil(x) || !Object.keys(x).length;
  };

  var juxt = function juxt() {
    var fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function () {
      for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }
      return fns.map(function (f) {
        return f.apply(void 0, x);
      });
    };
  };

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

  var unless = function unless(fn, act, x) {
    return fn(x) ? x : act(x);
  };
  var unless$1 = _curry3(unless);

  var when = function when(fn, act, x) {
    return fn(x) ? act(x) : x;
  };
  var when$1 = _curry3(when);

  var concat = function concat(val, list) {
    return list.concat(val);
  };
  var concat$1 = _curry2(concat);

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

  var length = function length(a) {
    return a.length;
  };

  var nth = function nth(o, list) {
    var i = o < 0 ? list.length + o : o;
    return list[i];
  };
  var nth$1 = _curry2(nth);

  var reverse = function reverse(list) {
    return Array.isArray(list) ? list.slice().reverse() : list.split('').reverse().join('');
  };

  var sample = function sample(list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  var add = function add(a, b) {
    return Number(a) + Number(b);
  };
  var add$1 = _curry2(add);

  var between = function between(a, b, n) {
    return a <= n && b >= n;
  };
  var between$1 = _curry3(between);

  var divide = function divide(a, b) {
    return b / a;
  };
  var divide$1 = _curry2(divide);

  var range = function range(from, to) {
    var result = [];
    var start = Number(from);
    while (start < Number(to)) {
      result.push(start);
      start += 1;
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
    return compose$1(filter$1(function (i) {
      return rem$1(i, x) === 0;
    }), range$1(0), x);
  };

  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  var gcd$1 = _curry2(gcd);

  var isEven = function isEven(n) {
    return and$1(!eq$1(n, NaN), eq$1(n % 2, 0));
  };

  var _eqOf = function _eqOf(x) {
    var _eq = eq$1(x);
    return and$1(!_eq(NaN), !_eq(0));
  };
  var isOdd = function isOdd(n) {
    return and$1(!eq$1(n, NaN), _eqOf(n % 2));
  };

  var isPrime = function isPrime(x) {
    var i = 2;
    var s = Math.sqrt(x);
    for (i; i <= s; i++) {
      if (!rem$1(i, x)) {
        return false;
      }
    }
    return x && x !== 1;
  };

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

  var negate = function negate(n) {
    return -n;
  };

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

  var amend = function amend(a, b) {
    return Object.assign({}, b, a);
  };
  var amend$1 = _curry2(amend);

  var any = function any(schema, obj) {
    return Object.keys(schema).some(function (key) {
      return schema[key](obj[key]);
    });
  };
  var any$1 = _curry2(any);

  var defaults = function defaults(def, obj) {
    return Object.keys(def).reduce(function (acc, prop) {
      if (isNil(acc[prop])) {
        acc[prop] = def[prop];
      }
      return acc;
    }, obj);
  };
  var defaults$1 = _curry2(defaults);

  var draft = function draft(fn, obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  };
  var draft$1 = _curry2(draft);

  var height = function height(obj) {
    return Object.keys(obj).length;
  };

  var omit = function omit(keys, x) {
    return Object.keys(x).reduce(function (acc, prop) {
      if (!keys.includes(prop)) {
        acc[prop] = x[prop];
      }
      return acc;
    }, {});
  };
  var omit$1 = _curry2(omit);

  var path = function path(_ref, obj) {
    var _ref2 = _toArray(_ref),
        p = _ref2[0],
        keys = _ref2.slice(1);
    if (!keys.length) {
      return obj[p];
    }
    if (isNil(obj[p])) {
      return undefined;
    }
    return path(keys, obj[p]);
  };
  var path$1 = _curry2(path);

  var plan = function plan(schema, obj) {
    return Object.assign({}, obj, Object.keys(schema).reduce(function (acc, k) {
      if (!obj.hasOwnProperty(k)) {
        return acc;
      }
      acc[k] = schema[k](obj[k]);
      return acc;
    }, {}));
  };
  var plan$1 = _curry2(plan);

  var prop = function prop(p, obj) {
    return obj[p];
  };
  var prop$1 = _curry2(prop);

  var props = function props(keys, obj) {
    return keys.map(function (k) {
      return obj[k];
    });
  };
  var props$1 = _curry2(props);

  var sift = function sift(fn, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (fn(obj[k])) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  };
  var sift$1 = _curry2(sift);

  var unzip = function unzip(obj) {
    return [Object.keys(obj), Object.values(obj)];
  };

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
      while (j < hLen) {
        if (haystack.charCodeAt(j++) === nChar) {
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

  var replace = function replace(a, b, str) {
    return str.replace(a, b);
  };
  var replace$1 = _curry3(replace);

  var split = function split(char, str) {
    return str.split(char);
  };
  var split$1 = _curry2(split);

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
  exports.difference = difference$1;
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
  exports.map = map$1;
  exports.max = max;
  exports.maxBy = maxBy$1;
  exports.min = min;
  exports.minBy = minBy$1;
  exports.partition = partition$1;
  exports.prepend = prepend$1;
  exports.reduce = reduce$1;
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
  exports.call = call$1;
  exports.complement = complement$1;
  exports.compose = compose$1;
  exports.composeP = composeP$1;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.deepEq = deepEq$1;
  exports.descend = descend$1;
  exports.descendBy = descendBy$1;
  exports.either = either$1;
  exports.encase = encase$1;
  exports.eq = eq$1;
  exports.eqBy = eqBy$1;
  exports.flip = flip$1;
  exports.gt = gt$1;
  exports.gte = gte$1;
  exports.identity = identity;
  exports.isEmpty = isEmpty;
  exports.isNil = isNil;
  exports.juxt = juxt;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.not = not;
  exports.on = on$1;
  exports.or = or$1;
  exports.pipe = pipe$1;
  exports.pipeP = pipeP$1;
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
  exports.sample = sample;
  exports.slice = slice$1;
  exports.add = add$1;
  exports.between = between$1;
  exports.divide = divide$1;
  exports.factors = factors;
  exports.gcd = gcd$1;
  exports.isEven = isEven;
  exports.isOdd = isOdd;
  exports.isPrime = isPrime;
  exports.lcm = lcm$1;
  exports.mean = mean;
  exports.multiply = multiply$1;
  exports.negate = negate;
  exports.pow = pow$1;
  exports.range = range$1;
  exports.rem = rem$1;
  exports.round = round$1;
  exports.subtract = subtract$1;
  exports.amend = amend$1;
  exports.any = any$1;
  exports.defaults = defaults$1;
  exports.draft = draft$1;
  exports.has = has$1;
  exports.height = height;
  exports.omit = omit$1;
  exports.path = path$1;
  exports.plan = plan$1;
  exports.prop = prop$1;
  exports.props = props$1;
  exports.sift = sift$1;
  exports.unzip = unzip;
  exports.whole = whole$1;
  exports.capitalize = capitalize;
  exports.fuzzySearch = fuzzySearch$1;
  exports.join = join$1;
  exports.replace = replace$1;
  exports.split = split$1;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.trim = trim;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
