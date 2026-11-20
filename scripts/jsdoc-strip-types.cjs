// jsdoc's type parser doesn't understand TypeScript syntax, so before it parses a file
// drop the inline `@type` casts and `@import` tags that only exist for generating our types
exports.handlers = {
  beforeParse (e) {
    e.source = e.source
      .replace(/export default \/\*\* @type \{[\s\S]*?\n\}\} \*\/ /g, 'export default ')
      .replace(/^\/\*\* @import .+\*\/$/gm, '')
  }
}
