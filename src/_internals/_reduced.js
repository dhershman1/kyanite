const reduced = x =>
  x && x['@@transducer/reduced']
    ? x
    : {
        '@@transducer/value': x,
        '@@transducer/reduced': true
      }

export default reduced
