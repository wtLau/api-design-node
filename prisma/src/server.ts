import express from 'express'
import router from './router'
import cors from 'cors'
import morgan from 'morgan'
const app = express()

app.use(cors())
// Logging
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true})) // use to intercep query parameter

app.use((req, res) => {
	req.shhhhh_secret = 'doggy'
	next()
})

app.get('/', (req, res) => {
	console.log('hello from express')
	res.status(200)
	res.json({message: 'hello there!'})
})

app.use('/api', router)

export default app
