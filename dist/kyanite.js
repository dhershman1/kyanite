(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.kyanite = {})));
}(this, (function (exports) { 'use strict';

  var identity = function identity(a) {
    return a;
  };

  var compact = (function (arr) {
    return arr.filter(identity);
  });

  var concat = function concat(arr) {
    return arr.reduce(function (acc, v) {
      return acc.concat(v);
    }, []);
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

  var concatMap = function concatMap(fn, arr) {
    return arr.reduce(function (acc, v) {
      return acc.concat(fn(v));
    }, []);
  };
  var concatMap$1 = curry(concatMap);

  var difference = function difference(first, second) {
    return first.filter(function (x) {
      return second.indexOf(x) === -1;
    });
  };
  var difference$1 = curry(difference);

  var drop = function drop(i, list) {
    return list.slice(i, Infinity);
  };
  var drop$1 = curry(drop);

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
  var every$1 = curry(every);

  var filter = function filter(fn, list) {
    return list.filter(fn);
  };
  var filter$1 = curry(filter);

  var find = function find(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
    return false;
  };
  var find$1 = curry(find);

  var findIndex = function findIndex(fn, list) {
    var len = list.length;
    var i = 0;
    while (i < len) {
      if (fn(list[i])) {
        return i;
      }
      i++;
    }
    return undefined;
  };
  var findIndex$1 = curry(findIndex);

  var first = function first(x) {
    return x[0];
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

  var assign = function assign() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.reduce(function (acc, x) {
      return Object.keys(x).reduce(function (obj, k) {
        obj[k] = x[k];
        return obj;
      }, acc);
    }, {});
  };
  var assign$1 = curryN(2, assign);

  var has = function has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
  var has$1 = curry(has);

  var groupBy = function groupBy(fn, list) {
    return list.reduce(function (acc, v) {
      var k = fn(v);
      var tmp = {};
      tmp[k] = has$1(k, acc) ? acc[k].concat(v) : [v];
      return assign$1(acc, tmp);
    }, {});
  };
  var groupBy$1 = curry(groupBy);

  var includes = function includes(a, list) {
    return list.indexOf(a) !== -1;
  };
  var includes$1 = curry(includes);

  var insert = function insert(i, d, arr) {
    var idx = i < arr.length && i >= 0 ? i : arr.length;
    var result = arr.slice(0);
    result.splice(idx, 0, d);
    return result;
  };
  var insert$1 = curry(insert);

  var intersection = function intersection(a, b) {
    return a.filter(function (x) {
      return b.indexOf(x) !== -1;
    });
  };
  var intersection$1 = curry(intersection);

  var last = function last(x) {
    return x[x.length - 1];
  };

  var length = function length(a) {
    return a.length;
  };

  var map = function map(fn, list) {
    return list.map(fn);
  };
  var map$1 = curry(map);

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
  var maxBy$1 = curry(maxBy);

  var mean = function mean() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!x.length) {
      return 0;
    }
    return x.reduce(function (a, v) {
      return a + v;
    }, 0) / x.length;
  };

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
  var minBy$1 = curry(minBy);

  var nth = function nth(o, x) {
    var idx = o < 0 ? x.length + o : o;
    return x[idx];
  };
  var nth$1 = curry(nth);

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
  var partition$1 = curry(partition);

  var prepend = function prepend(x, list) {
    return [].concat(x, list);
  };
  var prepend$1 = curry(prepend);

  var reduce = function reduce(fn, init, list) {
    return list.reduce(fn, init);
  };
  var reduce$1 = curry(reduce);

  var reject = function reject(fn, list) {
    return list.filter(function (v) {
      return !fn(v);
    });
  };
  var reject$1 = curry(reject);

  var remove = function remove(i, x) {
    return concat([x.slice(0, i), x.slice(i + 1)]);
  };
  var remove$1 = curry(remove);

  var reverse = function reverse(arr) {
    return arr.slice().reverse();
  };

  var slice = function slice(a, b, list) {
    return list.slice(a, b);
  };
  var slice$1 = curry(slice);

  var some = function some(fn, x) {
    return x.some(fn);
  };
  var some$1 = curry(some);

  var sort = function sort(fn, a) {
    return a.slice().sort(fn);
  };
  var sort$1 = curry(sort);

  var sortBy = function sortBy(fn, list) {
    return list.concat().sort(function (a, b) {
      var x = fn(a);
      var y = fn(b);
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };
  var sortBy$1 = curry(sortBy);

  var sortWith = function sortWith(fns, arr) {
    return _toConsumableArray(arr).sort(function (a, b) {
      return fns.reduce(function (acc, f) {
        return acc === 0 ? f(a, b) : acc;
      }, 0);
    });
  };
  var sortWith$1 = curry(sortWith);

  var take = function take(i, list) {
    return list.slice(0, i);
  };
  var take$1 = curry(take);

  var uniqBy = function uniqBy(fn, list) {
    return list.reduce(function (acc, a) {
      if (acc.map(fn).indexOf(fn(a)) === -1) {
        acc.push(a);
      }
      return acc;
    }, []);
  };
  var uniqBy$1 = curry(uniqBy);

  var uniq = uniqBy$1(identity);

  var union = function union(list, other) {
    return uniq(list.concat(other));
  };
  var union$1 = curry(union);

  var update = function update(index, val, list) {
    return concat([list.slice(0, index), val, list.slice(index + 1)]);
  };
  var update$1 = curry(update);

  var zip = function zip(x, y) {
    var arr = x.length < y.length ? x : y;
    return arr.reduce(function (acc, _, i) {
      var tmp = {};
      tmp[x[i]] = y[i];
      return assign$1(acc, tmp);
    }, {});
  };
  var zip$1 = curry(zip);

  var and = function and(a, b) {
    return a && b;
  };
  var and$1 = curry(and);

  var ap = function ap(fns, list) {
    return fns.reduce(function (acc, f) {
      return acc.concat(list.map(f));
    }, []);
  };
  var ap$1 = curry(ap);

  var ascend = function ascend(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  var ascend$1 = curry(ascend);

  var ascendBy = function ascendBy(fn, a, b) {
    return ascend$1(fn(a), fn(b));
  };
  var ascendBy$1 = curry(ascendBy);

  var both = function both(f, g, a) {
    return f(a) && g(a);
  };
  var both$1 = curry(both);

  var branch = function branch(p, f, g, a) {
    return p(a) ? f(a) : g(a);
  };
  var branch$1 = curry(branch);

  var not = function not(x) {
    return !x;
  };

  var complement = function complement(fn, a) {
    return not(fn(a));
  };
  var complement$1 = curry(complement);

  var deepClone = function deepClone(x) {
    return JSON.parse(JSON.stringify(x));
  };

  var descend = function descend(a, b) {
    return a > b ? -1 : a < b ? 1 : 0;
  };
  var descend$1 = curry(descend);

  var descendBy = function descendBy(fn, a, b) {
    return descend$1(fn(a), fn(b));
  };
  var descendBy$1 = curry(descendBy);

  var type = function type(x) {
    if (x === null) {
      return 'Null';
    }
    if (x === undefined) {
      return 'Undefined';
    }
    return Object.prototype.toString.call(x).slice(8, -1);
  };

  var empty = function empty(x) {
    if (type(x) === 'Array') {
      return [];
    }
    if (type(x) === 'String') {
      return '';
    }
    if (type(x) === 'Object') {
      return {};
    }
    return void 0;
  };

  var encase = function encase(fn, a) {
    try {
      return fn(a);
    } catch (err) {
      return undefined;
    }
  };
  var encase$1 = curry(encase);

  var gt = function gt(a, b) {
    return a > b;
  };
  var gt$1 = curry(gt);

  var gte = function gte(a, b) {
    return a >= b;
  };
  var gte$1 = curry(gte);

  var identical = function identical(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
  };
  var identical$1 = curry(identical);

  var is = function is(Ctor, x) {
    return !isNil(x) && x.constructor === Ctor || x instanceof Ctor;
  };
  var is$1 = curry(is);

  var isEmpty = function isEmpty(x) {
    return !x || !Object.keys(x).length;
  };

  var organize = function organize(a, b) {
    var s = sort$1(function (x, y) {
      return x - y;
    });
    if (Array.isArray(a)) {
      return [s(a), s(b)];
    }
    return [a, b];
  };
  var keysCheck = function keysCheck(a, b) {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    return and$1(aKeys.length === bKeys.length, !difference$1(aKeys, bKeys).length);
  };
  var isComplex = function isComplex(a) {
    return Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]';
  };
  var equal = function equal(a, b) {
    var aTy = type(a);
    var regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode'];
    var methods = {
      Date: function Date(x, y) {
        return x.valueOf() === y.valueOf();
      },
      RegExp: function RegExp(x, y) {
        return regVals.every(function (p) {
          return x[p] === y[p];
        });
      }
    };
    var current = methods[aTy];
    if (current) {
      return current(a, b);
    }
    var _organize = organize(a, b),
        _organize2 = _slicedToArray(_organize, 2),
        c = _organize2[0],
        d = _organize2[1];
    if (!keysCheck(c, d)) {
      return false;
    }
    if (isComplex(c)) {
      return Object.keys(c).every(function (key) {
        var aVal = c[key];
        var bVal = d[key];
        if (isComplex(aVal)) {
          return equal(aVal, bVal);
        }
        return identical$1(aVal, bVal);
      });
    }
    return identical$1(c, d);
  };

  var isEqual = function isEqual(a, b) {
    return equal(a, b);
  };
  var isEqual$1 = curry(isEqual);

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
    return a < b;
  };
  var lt$1 = curry(lt);

  var lte = function lte(a, b) {
    return a <= b;
  };
  var lte$1 = curry(lte);

  var on = function on(fn, gn, a, b) {
    return fn(gn(a), gn(b));
  };
  var on$1 = curry(on);

  var or = function or(a, b) {
    return a || b;
  };
  var or$1 = curry(or);

  var pipe = function pipe(list, a) {
    return list.reduce(function (acc, fn) {
      return fn(acc);
    }, a);
  };
  var pipe$1 = curry(pipe);

  var range = function range() {
    var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (isNaN(from) || to && isNaN(to)) {
      throw new TypeError('Arguments should be Numbers');
    }
    var result = [];
    var stop = Number(to);
    var start = Number(from);
    if (!to) {
      stop = Number(from);
      start = 0;
    }
    while (start < stop) {
      result.push(start);
      start += 1;
    }
    return result;
  };

  var when = function when(fn, act) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (fn.apply(void 0, args)) {
      return act.apply(void 0, args);
    }
    return undefined;
  };
  var when$1 = curryN(3, when);

  var add = function add(a, b) {
    return Number(a) + Number(b);
  };
  var add$1 = curry(add);

  var between = function between(a, b, n) {
    return a <= n && b >= n;
  };
  var between$1 = curry(between);

  var div = function div(a, b) {
    return b / a;
  };
  var div$1 = curry(div);

  var rem = function rem(a, b) {
    return b % a;
  };
  var rem$1 = curry(rem);

  var factors = function factors() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return range(x).filter(function (i) {
      return rem$1(i, x) === 0;
    });
  };

  var gcd = function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  var gcd$1 = curry(gcd);

  var isEven = function isEven(n) {
    return !isNaN(n) && n % 2 === 0;
  };

  var isOdd = function isOdd(n) {
    return !isNaN(n) && n % 2 !== 0;
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
  var lcm$1 = curry(lcm);

  var mul = function mul(a, b) {
    return a * b;
  };
  var mul$1 = curry(mul);

  var pow = function pow(a, b) {
    return Math.pow(b, a);
  };
  var pow$1 = curry(pow);

  var round = function round(precision, num) {
    return Number("".concat(Math.round("".concat(num, "e").concat(precision)), "e-").concat(precision));
  };
  var round$1 = curry(round);

  var sub = function sub(a, b) {
    return a - b;
  };
  var sub$1 = curry(sub);

  var any = function any(schema, obj) {
    return Object.keys(schema).some(function (key) {
      return schema[key](obj[key]);
    });
  };
  var any$1 = curry(any);

  var clone = function clone(x) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (deep) {
      return JSON.parse(JSON.stringify(x));
    }
    return Object.keys(x).reduce(function (acc, k) {
      acc[k] = x[k];
      return acc;
    }, {});
  };

  var compress = function compress(obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (!isNil(obj[k])) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  };

  var defaults = function defaults(def, data) {
    return Object.keys(def).reduce(function (acc, prop) {
      if (isNil(acc[prop])) {
        acc[prop] = def[prop];
      }
      return acc;
    }, data);
  };
  var defaults$1 = curry(defaults);

  var draft = function draft(fn, obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      return assign$1({}, acc, _defineProperty({}, key, fn(obj[key])));
    }, {});
  };
  var draft$1 = curry(draft);

  var entries = function entries(obj) {
    return Object.keys(obj).map(function (k) {
      return [k, obj[k]];
    });
  };

  var head = function head(obj) {
    var _Object$keys = Object.keys(obj),
        _Object$keys2 = _slicedToArray(_Object$keys, 1),
        key = _Object$keys2[0];
    return key ? obj[key] : {};
  };

  var height = function height(obj) {
    return Object.keys(obj).length;
  };

  var omit = function omit(key, x) {
    var keyArr = ensureArray(key);
    return Object.keys(x).reduce(function (acc, prop) {
      if (keyArr.indexOf(prop) === -1) {
        acc[prop] = x[prop];
      }
      return acc;
    }, {});
  };
  var omit$1 = curry(omit);

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
  var path$1 = curryN(2, path);

  var plan = function plan(schema, obj) {
    return assign$1({}, obj, Object.keys(schema).reduce(function (acc, k) {
      if (!obj.hasOwnProperty(k)) {
        return acc;
      }
      acc[k] = schema[k](obj[k]);
      return acc;
    }, {}));
  };
  var plan$1 = curry(plan);

  var isObject = (function (x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  });

  var pluck = function pluck(p, list) {
    return Object.keys(list).reduce(function (acc, v) {
      var val = list[v];
      if (isObject(val)) {
        return acc.concat(pluck(p, val));
      }
      if (v === p) {
        acc.push(val);
      }
      return acc;
    }, []);
  };
  var pluck$1 = curry(pluck);

  var prop = function prop(p, obj) {
    return obj[p];
  };
  var prop$1 = curry(prop);

  var props = function props(keys, obj) {
    return keys.map(function (k) {
      return obj[k];
    });
  };
  var props$1 = curry(props);

  var sift = function sift(fn, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (fn(obj[k])) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  };
  var sift$1 = curry(sift);

  var tail = function tail(obj) {
    var key = last(Object.keys(obj));
    return key ? obj[key] : {};
  };

  var values = function values(obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var unzip = function unzip(obj) {
    return [Object.keys(obj), values(obj)];
  };

  var whole = function whole(schema, obj) {
    return Object.keys(schema).every(function (key) {
      return schema[key](obj[key]);
    });
  };
  var whole$1 = curry(whole);

  var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var contains = function contains(a, str) {
    return str.indexOf(a) !== -1;
  };
  var contains$1 = curry(contains);

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
  var fuzzySearch$1 = curry(fuzzySearch);

  var join = function join(str, list) {
    return list.join(str);
  };
  var join$1 = curry(join);

  var strip = function strip(a) {
    return a.replace(/\s/g, '');
  };

  var toLower = function toLower(a) {
    return a.toLowerCase();
  };

  var toUpper = function toUpper(a) {
    return a.toUpperCase();
  };

  var trim = function trim(str) {
    return str.trim();
  };

  var words = function words(str) {
    return trim(str).split(/\s+/);
  };

  exports.compact = compact;
  exports.concat = concat;
  exports.concatMap = concatMap$1;
  exports.difference = difference$1;
  exports.drop = drop$1;
  exports.ensureArray = ensureArray;
  exports.every = every$1;
  exports.filter = filter$1;
  exports.find = find$1;
  exports.findIndex = findIndex$1;
  exports.first = first;
  exports.groupBy = groupBy$1;
  exports.includes = includes$1;
  exports.insert = insert$1;
  exports.intersection = intersection$1;
  exports.last = last;
  exports.length = length;
  exports.map = map$1;
  exports.max = max;
  exports.maxBy = maxBy$1;
  exports.mean = mean;
  exports.min = min;
  exports.minBy = minBy$1;
  exports.nth = nth$1;
  exports.partition = partition$1;
  exports.prepend = prepend$1;
  exports.reduce = reduce$1;
  exports.reject = reject$1;
  exports.remove = remove$1;
  exports.reverse = reverse;
  exports.slice = slice$1;
  exports.some = some$1;
  exports.sort = sort$1;
  exports.sortBy = sortBy$1;
  exports.sortWith = sortWith$1;
  exports.take = take$1;
  exports.union = union$1;
  exports.uniq = uniq;
  exports.uniqBy = uniqBy$1;
  exports.update = update$1;
  exports.zip = zip$1;
  exports.and = and$1;
  exports.ap = ap$1;
  exports.ascend = ascend$1;
  exports.ascendBy = ascendBy$1;
  exports.both = both$1;
  exports.branch = branch$1;
  exports.complement = complement$1;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.deepClone = deepClone;
  exports.descend = descend$1;
  exports.descendBy = descendBy$1;
  exports.empty = empty;
  exports.encase = encase$1;
  exports.gt = gt$1;
  exports.gte = gte$1;
  exports.identical = identical$1;
  exports.identity = identity;
  exports.is = is$1;
  exports.isEmpty = isEmpty;
  exports.isEqual = isEqual$1;
  exports.isNil = isNil;
  exports.juxt = juxt;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.not = not;
  exports.on = on$1;
  exports.or = or$1;
  exports.pipe = pipe$1;
  exports.range = range;
  exports.type = type;
  exports.when = when$1;
  exports.add = add$1;
  exports.between = between$1;
  exports.div = div$1;
  exports.factors = factors;
  exports.gcd = gcd$1;
  exports.isEven = isEven;
  exports.isOdd = isOdd;
  exports.isPrime = isPrime;
  exports.lcm = lcm$1;
  exports.mul = mul$1;
  exports.pow = pow$1;
  exports.rem = rem$1;
  exports.round = round$1;
  exports.sub = sub$1;
  exports.any = any$1;
  exports.assign = assign$1;
  exports.clone = clone;
  exports.compress = compress;
  exports.defaults = defaults$1;
  exports.draft = draft$1;
  exports.entries = entries;
  exports.has = has$1;
  exports.head = head;
  exports.height = height;
  exports.omit = omit$1;
  exports.path = path$1;
  exports.plan = plan$1;
  exports.pluck = pluck$1;
  exports.prop = prop$1;
  exports.props = props$1;
  exports.sift = sift$1;
  exports.tail = tail;
  exports.unzip = unzip;
  exports.values = values;
  exports.whole = whole$1;
  exports.capitalize = capitalize;
  exports.contains = contains$1;
  exports.fuzzySearch = fuzzySearch$1;
  exports.join = join$1;
  exports.strip = strip;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.trim = trim;
  exports.words = words;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
