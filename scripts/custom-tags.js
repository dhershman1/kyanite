exports.defineTags = function (dictionary) {
  dictionary.defineTag('category', {
    mustHaveValue: true,
    onTagged (doclet, tag) {
      doclet.category = tag.value
    }
  })
  dictionary.defineTag('sig', {
    mustHaveValue: true,
    onTagged (doclet, tag) {
      doclet.sig = tag.value.split(/\r/g)
    }
  })
}
