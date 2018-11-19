'use strict';

const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const device = require('express-device')

const app = express()

app.use(cors())
app.disable('x-powered-by')
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
app.use(device.capture())

app.set('port', (process.env.PORT || 4000))


// app.use(express.static(path.join(__dirname, 'dist')))

// app.get('*', (req, res) => {
//     console.log(res.device)
//     res.sendFile(__dirname + '/dist/index.html')
// })

let visitCount = 0

app.get('/', (req, res) => {

    let device = req.device.type

    console.log(`[${++visitCount}]`, device)

    // switch (deviceType) {
	// 	case 'phone':
	// 	case 'tablet':
	// 		res.render('mobile', data)
	// 		break;

	// 	default:
	// 		res.render('index', data)
	// 		break;
	// }

    res.sendFile(__dirname + '/dist/index.html')
})
app.use(express.static(path.join(__dirname, 'dist')))


app.listen(app.get('port'), () => console.log(`Listening on: http://localhost:${app.get('port')}`))
