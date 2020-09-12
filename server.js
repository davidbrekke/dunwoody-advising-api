const express = require('express')

const server = express()



const PORT = 4000 || process.env.PORT // setting port to 4000 or 'PORT' envirmonment var (use in prod)
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`)) 