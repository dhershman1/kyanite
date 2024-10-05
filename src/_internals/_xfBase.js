/**
 * Base transducer object that can be used to build more complex transducers.
 */
export default {
  init: function () {
    return this.xf['@@transducer/init']()
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result)
  }
}
