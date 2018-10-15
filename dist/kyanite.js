(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.kyanite = {})));
}(this, (function (exports) { 'use strict';

  const curry = (f, ...args) => {
    if (f.length <= args.length) {
      return f(...args)
    }
    return (...rest) => curry(f, ...args, ...rest)
  };

  const concatMap = (fn, arr) =>
    arr.reduce((acc, v) => acc.concat(fn(v)), []);
  var concatMap$1 = curry(concatMap);

  const difference = (first, second) => first.filter(x => second.indexOf(x) === -1);
  var difference$1 = curry(difference);

  const drop = (i, list) => list.slice(i, Infinity);
  var drop$1 = curry(drop);

  const dropWhile = (fn, arr) => {
    const i = arr.findIndex(x => !fn(x));
    return i < 0 ? [] : arr.slice(i)
  };
  var dropWhile$1 = curry(dropWhile);

  const isNil = x => x == null;

  const ensureArray = x => {
    if (Array.isArray(x)) {
      return x
    }
    if (isNil(x)) {
      return []
    }
    return [x]
  };

  const every = (fn, x) => x.every(fn);
  var every$1 = curry(every);

  const filter = (fn, list) => list.filter(fn);
  var filter$1 = curry(filter);

  const find = (fn, list) => {
    let idx = 0;
    const len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx]
      }
      idx += 1;
    }
    return false
  };
  var find$1 = curry(find);

  const findIndex = (fn, list) => {
    const len = list.length;
    let i = 0;
    while (i < len) {
      if (fn(list[i])) {
        return i
      }
      i++;
    }
    return undefined
  };
  var findIndex$1 = curry(findIndex);

  const curryN = (n, f, ...args) => {
    if (n <= 0) {
      return f(...args)
    }
    return (...rest) => curryN(n - rest.length, f, ...args, ...rest)
  };

  const assign = (...args) =>
    args.reduce((acc, x) =>
      Object.keys(x).reduce((obj, k) => {
        obj[k] = x[k];
        return obj
      }, acc), {});
  var assign$1 = curryN(2, assign);

  const has = (prop, obj) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  var has$1 = curry(has);

  const groupBy = (fn, list) => list.reduce((acc, v) => {
    const k = fn(v);
    const tmp = {};
    tmp[k] = has$1(k, acc) ? acc[k].concat(v) : [v];
    return assign$1(acc, tmp)
  }, {});
  var groupBy$1 = curry(groupBy);

  const insert = (i, d, arr) => {
    const idx = i < arr.length && i >= 0 ? i : arr.length;
    const result = arr.slice(0);
    result.splice(idx, 0, d);
    return result
  };
  var insert$1 = curry(insert);

  const intersection = (a, b) => a.filter(x => b.indexOf(x) !== -1);
  var intersection$1 = curry(intersection);

  const map = (fn, list) => list.map(fn);
  var map$1 = curry(map);

  const max = list => list.reduce((a, b) => a >= b ? a : b);

  const maxBy = (fn, list) => list.reduce((a, b) => fn(a) >= fn(b) ? a : b);
  var maxBy$1 = curry(maxBy);

  const min = list => list.reduce((a, b) => a <= b ? a : b);

  const minBy = (fn, list) => list.reduce((a, b) => fn(a) <= fn(b) ? a : b);
  var minBy$1 = curry(minBy);

  const partition = (fn, list) =>
    list.reduce(([pass, fail], v) =>
      fn(v) ? [pass.concat(v), fail] : [pass, fail.concat(v)], [[], []]);
  var partition$1 = curry(partition);

  const prepend = (x, list) => [].concat(x, list);
  var prepend$1 = curry(prepend);

  const reduce = (fn, init, list) => list.reduce(fn, init);
  var reduce$1 = curry(reduce);

  const not = x => !x;

  const complement = (fn, a) => not(fn(a));
  var complement$1 = curry(complement);

  const reject = (fn, list) =>
    list.filter(complement$1(fn));
  var reject$1 = curry(reject);

  const identity = a => a;

  const remove = (i, x) =>
    concatMap$1(identity, [x.slice(0, i), x.slice(i + 1)]);
  var remove$1 = curry(remove);

  const some = (fn, x) => x.some(fn);
  var some$1 = curry(some);

  const sort = (fn, a) => a.slice().sort(fn);
  var sort$1 = curry(sort);

  const ascend = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  var ascend$1 = curry(ascend);

  const on = (fn, gn, a, b) => fn(gn(a), gn(b));
  var on$1 = curry(on);

  const sortBy = (fn, arr) => sort$1(on$1(ascend$1, fn), arr);
  var sortBy$1 = curry(sortBy);

  const sortWith = (fns, arr) =>
    [...arr].sort((a, b) =>
      fns.reduce((acc, f) => acc === 0 ? f(a, b) : acc, 0));
  var sortWith$1 = curry(sortWith);

  const take = (i, list) => list.slice(0, i);
  var take$1 = curry(take);

  const takeWhile = (fn, arr) => {
    const i = arr.findIndex(x => !fn(x));
    return i < 0 ? arr : arr.slice(0, i)
  };
  var takeWhile$1 = curry(takeWhile);

  const uniqBy = (fn, list) =>
    list.reduce((acc, a) => {
      if (acc.map(fn).indexOf(fn(a)) === -1) {
        acc.push(a);
      }
      return acc
    }, []);
  var uniqBy$1 = curry(uniqBy);

  const uniq = uniqBy$1(identity);

  const union = (list, other) => uniq(list.concat(other));
  var union$1 = curry(union);

  const update = (index, val, list) =>
    concatMap$1(identity, [list.slice(0, index), val, list.slice(index + 1)]);
  var update$1 = curry(update);

  const zip = (x, y) => {
    const arr = x.length < y.length ? x : y;
    return arr.reduce((acc, _, i) => {
      const tmp = {};
      tmp[x[i]] = y[i];
      return assign$1(acc, tmp)
    }, {})
  };
  var zip$1 = curry(zip);

  const always = (a, _) => a;
  var always$1 = curry(always);

  const and = (...args) => args.every(identity);
  var and$1 = curryN(2, and);

  const ap = (fns, list) =>
    fns.reduce((acc, f) =>
      acc.concat(list.map(f)), []);
  var ap$1 = curry(ap);

  const apply = (fn, a) => fn(...ensureArray(a));
  var apply$1 = curry(apply);

  const ascendBy = (fn, a, b) => ascend$1(fn(a), fn(b));
  var ascendBy$1 = curry(ascendBy);

  const both = (f, g, a) => f(a) && g(a);
  var both$1 = curry(both);

  const branch = (p, f, g, a) => p(a) ? f(a) : g(a);
  var branch$1 = curry(branch);

  const call = (fn, a) => fn(a);
  var call$1 = curry(call);

  const compose = (fn, gn, a) =>
    fn(gn(a));
  var compose$1 = curry(compose);

  const descend = (a, b) => a > b ? -1 : a < b ? 1 : 0;
  var descend$1 = curry(descend);

  const descendBy = (fn, a, b) => descend$1(fn(a), fn(b));
  var descendBy$1 = curry(descendBy);

  const either = (fn, gn, a) => fn(a) || gn(a);
  var either$1 = curry(either);

  const encase = (fn, a) => {
    try {
      return fn(a)
    } catch (err) {
      return undefined
    }
  };
  var encase$1 = curry(encase);

  const eq = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b
    }
    return a !== a && b !== b
  };
  var eq$1 = curry(eq);

  const eqBy = (fn, a, b) =>
    eq$1(fn(a), fn(b));
  var eqBy$1 = curry(eqBy);

  const flip = (fn, a, b) => fn(b, a);
  var flip$1 = curry(flip);

  const gt = (a, b) => b > a;
  var gt$1 = curry(gt);

  const gte = (a, b) => b >= a;
  var gte$1 = curry(gte);

  const isEmpty = x => !x || !Object.keys(x).length;

  const type = x => {
    if (x === null) {
      return 'Null'
    }
    if (x === undefined) {
      return 'Undefined'
    }
    return Object.prototype.toString.call(x).slice(8, -1)
  };

  const isComplex = a => Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]';
  const checkSet = (a, b) => {
    if (and$1(a.constructor === Set, b.constructor === Set)) {
      return [[...a], [...b]]
    }
    return [a, b]
  };
  const equal = (a, b) => {
    const [convA, convB] = checkSet(a, b);
    const aTy = type(convA);
    const aKeys = Object.keys(convA);
    const bKeys = Object.keys(convB);
    const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode'];
    const methods = {
      Date: (x, y) => x.valueOf() === y.valueOf(),
      RegExp: (x, y) => regVals.every(p => x[p] === y[p])
    };
    const current = methods[aTy];
    if (eq$1(convA, convB)) {
      return true
    }
    if (current) {
      return current(convA, convB)
    }
    if (!and$1(aKeys.length === bKeys.length, !difference$1(aKeys, bKeys).length)) {
      return false
    }
    if (isComplex(convA)) {
      return aKeys.every(key => {
        const aVal = convA[key];
        const bVal = convB[key];
        if (isComplex(aVal)) {
          return equal(aVal, bVal)
        }
        return eq$1(aVal, bVal)
      })
    }
    return false
  };

  const isEqual = (a, b) => equal(a, b);
  var isEqual$1 = curry(isEqual);

  const juxt = (fns = []) =>
    (...x) => fns.map(f => f(...x));

  const lt = (a, b) => b < a;
  var lt$1 = curry(lt);

  const lte = (a, b) => b <= a;
  var lte$1 = curry(lte);

  const or = (...args) => args.some(identity);
  var or$1 = curryN(2, or);

  const pipe = (arr, init) =>
    arr.reduce((acc, fn) => fn(acc), init);
  var pipe$1 = curry(pipe);

  const range = (from, to) => {
    if (isNaN(from) || (to && isNaN(to))) {
      throw new TypeError('Arguments should be Numbers')
    }
    const result = [];
    let start = Number(from);
    while (start < Number(to)) {
      result.push(start);
      start += 1;
    }
    return result
  };
  var range$1 = curry(range);

  const unless = (fn, act, x) =>
    fn(x) ? x : act(x);
  var unless$1 = curryN(3, unless);

  const when = (fn, act, x) =>
    fn(x) ? act(x) : x;
  var when$1 = curryN(3, when);

  const concat = (val, list) =>
    list.concat(val);
  var concat$1 = curry(concat);

  const slice = (a, b, list) => list.slice(a, b);
  var slice$1 = curry(slice);

  const endsWith = (a, list) => compose$1(isEqual$1(a), slice$1(-a.length, Infinity), list);
  var endsWith$1 = curry(endsWith);

  const first = x => x[0];

  const includes = (value, list) =>
    list.indexOf(value) !== -1;
  var includes$1 = curry(includes);

  const last = x => x[x.length - 1];

  const length = a => a.length;

  const nth = (o, list) => {
    const i = o < 0 ? list.length + o : o;
    return list[i]
  };
  var nth$1 = curry(nth);

  const reverse = list =>
    Array.isArray(list) ? list.slice().reverse() : list.split('').reverse().join('');

  const sample = list =>
    list[Math.floor(Math.random() * list.length)];

  const add = (a, b) => Number(a) + Number(b);
  var add$1 = curry(add);

  const between = (a, b, n) => a <= n && b >= n;
  var between$1 = curry(between);

  const divide = (a, b) => b / a;
  var divide$1 = curry(divide);

  const rem = (a, b) => b % a;
  var rem$1 = curry(rem);

  const factors = (x = 0) => compose$1(filter$1(i => rem$1(i, x) === 0), range$1(0), x);

  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  var gcd$1 = curry(gcd);

  const isEven = n => !isNaN(n) && n % 2 === 0;

  const isOdd = n => !isNaN(n) && n % 2 !== 0;

  const isPrime = x => {
    let i = 2;
    let s = Math.sqrt(x);
    for (i; i <= s; i++) {
      if (!rem$1(i, x)) {
        return false
      }
    }
    return x && x !== 1
  };

  const lcm = (a, b) =>
    Math.abs(Math.floor(a / gcd$1(a, b) * b));
  var lcm$1 = curry(lcm);

  const mean = x => divide$1(length(x), reduce$1(add$1, 0, x));

  const multiply = (a, b) => a * b;
  var multiply$1 = curry(multiply);

  const pow = (a, b) => b ** a;
  var pow$1 = curry(pow);

  const round = (precision, num) => Number(`${Math.round(`${num}e${precision}`)}e-${precision}`);
  var round$1 = curry(round);

  const subtract = (a, b) => b - a;
  var subtract$1 = curry(subtract);

  const any = (schema, obj) =>
    Object.keys(schema).some(key =>
      schema[key](obj[key]));
  var any$1 = curry(any);

  const defaults = (def, data) =>
    Object.keys(def).reduce((acc, prop) => {
      if (isNil(acc[prop])) {
        acc[prop] = def[prop];
      }
      return acc
    }, data);
  var defaults$1 = curry(defaults);

  const draft = (fn, obj) =>
    Object.keys(obj).reduce((acc, key) =>
      assign$1({}, acc, { [key]: fn(obj[key]) }), {});
  var draft$1 = curry(draft);

  const entries = obj =>
    Object.keys(obj).map(k => [k, obj[k]]);

  const height = obj => Object.keys(obj).length;

  const omit = (key, x) => {
    const keyArr = ensureArray(key);
    return Object.keys(x).reduce((acc, prop) => {
      if (keyArr.indexOf(prop) === -1) {
        acc[prop] = x[prop];
      }
      return acc
    }, {})
  };
  var omit$1 = curry(omit);

  const path = ([p, ...keys], obj) => {
    if (!keys.length) {
      return obj[p]
    }
    if (isNil(obj[p])) {
      return undefined
    }
    return path(keys, obj[p])
  };
  var path$1 = curryN(2, path);

  const plan = (schema, obj) =>
    assign$1({}, obj, Object.keys(schema).reduce((acc, k) => {
      if (!obj.hasOwnProperty(k)) {
        return acc
      }
      acc[k] = schema[k](obj[k]);
      return acc
    }, {}));
  var plan$1 = curry(plan);

  const prop = (p, obj) => obj[p];
  var prop$1 = curry(prop);

  const props = (keys, obj) =>
    keys.map(k =>
      obj[k]);
  var props$1 = curry(props);

  const sift = (fn, obj) => Object.keys(obj).reduce((acc, k) => {
    if (fn(obj[k])) {
      acc[k] = obj[k];
    }
    return acc
  }, {});
  var sift$1 = curry(sift);

  const values = obj =>
    Object.keys(obj).map(k => obj[k]);

  const unzip = obj =>
    [Object.keys(obj), values(obj)];

  const whole = (schema, obj) =>
    Object.keys(schema).every(key =>
      schema[key](obj[key]));
  var whole$1 = curry(whole);

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const fuzzySearch = (needle, haystack) => {
    const hLen = haystack.length;
    const nLen = needle.length;
    let j = 0;
    if (nLen > hLen) {
      return false
    }
    if (nLen === hLen) {
      return needle === haystack
    }
    outer: for (let i = 0; i < nLen; i++) {
      const nChar = needle.charCodeAt(i);
      while (j < hLen) {
        if (haystack.charCodeAt(j++) === nChar) {
          continue outer
        }
      }
      return false
    }
    return true
  };
  var fuzzySearch$1 = curry(fuzzySearch);

  const join = (str, list) => list.join(str);
  var join$1 = curry(join);

  const split = (char, str) => str.split(char);
  var split$1 = curry(split);

  const toLower = a => a.toLowerCase();

  const toUpper = a => a.toUpperCase();

  const trim = str => str.trim();

  exports.concatMap = concatMap$1;
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
  exports.curry = curry;
  exports.curryN = curryN;
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
  exports.isEqual = isEqual$1;
  exports.isNil = isNil;
  exports.juxt = juxt;
  exports.lt = lt$1;
  exports.lte = lte$1;
  exports.not = not;
  exports.on = on$1;
  exports.or = or$1;
  exports.pipe = pipe$1;
  exports.range = range$1;
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
  exports.pow = pow$1;
  exports.rem = rem$1;
  exports.round = round$1;
  exports.subtract = subtract$1;
  exports.any = any$1;
  exports.assign = assign$1;
  exports.defaults = defaults$1;
  exports.draft = draft$1;
  exports.entries = entries;
  exports.has = has$1;
  exports.height = height;
  exports.omit = omit$1;
  exports.path = path$1;
  exports.plan = plan$1;
  exports.prop = prop$1;
  exports.props = props$1;
  exports.sift = sift$1;
  exports.unzip = unzip;
  exports.values = values;
  exports.whole = whole$1;
  exports.capitalize = capitalize;
  exports.fuzzySearch = fuzzySearch$1;
  exports.join = join$1;
  exports.split = split$1;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.trim = trim;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
