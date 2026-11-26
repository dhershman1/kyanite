// jsdoc's type parser doesn't understand TypeScript syntax, and every public file holds
// TypeScript only comments for generating our types (the export's overloads, the inner
// function's @type, @import tags). The @name block is the only comment jsdoc needs,
// so every other doc comment is blanked out before jsdoc parses the file.
// Newlines are kept so the line numbers in the generated docs still match the source.
exports.handlers = {
  beforeParse (e) {
    e.source = e.source.replace(/\/\*\*[\s\S]*?\*\//g, comment =>
      comment.includes('@name') ? comment : comment.replace(/[^\n]/g, ''))
  }
}
