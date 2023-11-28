const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url
  if (filePath == './') filePath = './index.html'

  filePath = path.join(__dirname, filePath)

  const extname = String(path.extname(filePath)).toLowerCase()
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  }

  const contentType = mimeTypes[extname] || 'application/octet-stream'

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500)
      res.end(`Sorry, check with the site admin for error: ${error.code}..\n`)
      res.end()
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})
