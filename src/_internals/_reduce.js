import _xwrap from './_xwrap.js'

const _reduce = (fn, acc, list) => {
  const xf = _xwrap(fn)

  for (const entry of list) {
    acc = xf['@@transducer/step'](entry, acc)

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
  }

  return xf['@@transducer/result'](acc)
}

export default _reduce
