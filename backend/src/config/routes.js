const express = requre('express')

module.exports = function (server) {

    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../API/todo/todoService')
    todoService.register(router, '/todos')
    
}