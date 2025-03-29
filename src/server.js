const http = require('http')
// -------------------------------------------------------------------
const PORT = 9999
// -------------------------------------------------------------------
function onClientRequest(req,resp)
{
    resp.writeHead(200)

    resp.write('hello at Vercel')

    resp.end()
}
// -------------------------------------------------------------------
const server  = http.createServer(onClientRequest)
server.listen(PORT)
