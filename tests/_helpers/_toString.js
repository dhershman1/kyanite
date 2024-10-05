import _assocǃ from '../../src/_internals/_assocǃ.js'
import keys from '../../src/object/keys.js'
import reject from '../../src/array/reject.js'

function _map (fn, list) {
  let idx = 0
  const len = list.length
  const result = Array(len)

  while (idx < len) {
    _assocǃ(result, idx, fn(list[idx]))
    idx += 1
  }

  return result
}

function _includes (a, list) {
  return list.indexOf(a) >= 0
}

function _quote (str) {
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0')

  return '"' + escaped.replace(/"/g, '\\"') + '"'
}

export default function _toString (x, seen = []) {
  const recur = function recur (y) {
    const xs = seen.concat([x])
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs)
  }

  //  mapPairs :: (Object, [String]) -> [String]
  const mapPairs = function (obj, keys) {
    return _map(function (k) { return _quote(k) + ': ' + recur(obj[k]) }, keys.slice().sort())
  }

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))'
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) { return /^\d+$/.test(k) }, keys(x)))).join(', ') + ']'
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString()
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(x.toISOString())) + ')'
    case '[object Map]':
      return 'new Map(' + recur(Array.from(x)) + ')'
    case '[object Null]':
      return 'null'
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10)
    case '[object Set]':
      return 'new Set(' + recur(Array.from(x).sort()) + ')'
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x)
    case '[object Undefined]':
      return 'undefined'
    default:
      if (typeof x.toString === 'function') {
        const repr = x.toString()
        if (repr !== '[object Object]') {
          return repr
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}'
  }
}
