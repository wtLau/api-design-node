import express from 'express'
import router from './router'
import cors from 'cors'
import morgan from 'morgan'
import {protect} from './modules/auth'
const app = express()

app.use(cors())
// Logging
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true})) // use to intercep query parameter

app.get('/', (req, res) => {
	console.log('hello from express')
	res.status(200)
	res.json({message: 'hello there!'})
})

app.use('/api', protect, router)

export default app
