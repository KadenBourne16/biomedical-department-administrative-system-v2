import express from 'express'
import http from 'http'
import { Server } from 'socket.io'


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for testing; adjust as needed
    methods: ['GET', 'POST']
  }
})