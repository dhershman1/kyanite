import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const directory = path.join(__dirname, 'tests', 'string')

fs.readdir(directory, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err)
  }

  files.forEach(file => {
    const oldPath = path.join(directory, file)
    const newPath = path.join(directory, file.replace(/\.js$/, '.spec.js'))

    fs.rename(oldPath, newPath, err => {
      if (err) {
        return console.error('Error renaming file:', err)
      }
      console.log(`Renamed: ${file} -> ${path.basename(newPath)}`)
    })
  })
})
