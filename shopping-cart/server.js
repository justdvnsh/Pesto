let express = require('express');
let app = express();
let path = require('path')

// applying middleware
app.use(express.static('public'))

// Making the Routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
    console.log('Server is Listening to port 3000')
})

