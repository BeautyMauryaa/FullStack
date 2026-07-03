//logging lib that supports multiple logs level transport(where logs are sent)

//1. install
// npm install winston

//2. basic setup:
const express = require('express');
const winston = require('winston');
const app = express();
const logger = winston.createLogger({ //createlogger() : creates a new logger instance
    level: 'info', // log level: info, warn, error, debug
    transports:[ //where logs should be stored
        new winston.transports.console() // terminal
    ]
})



//logging:
//instead of console.log() 
// use logger.info(), logger.warn(), logger.error() etc



//logs levels by importance:
//error
//warn
//info
//http
//verbose
//debug
//silly




//workflow:
// Client

// ↓

// Request

// ↓

// Morgan

// ↓

// Controller

// ↓

// logger.info()

// ↓

// Database

// ↓

// logger.error()

// ↓

// Global Error Middleware

// ↓

// Response


//folder struct:
// src/

// utils/

//     logger.js

// logs/

//     app.log

// controllers/

// middlewares/

//logger.js:
const winston =require('winston');
const logger = winston.createLogger({
    level: 'info',
    format : winston.format.json(),
    transports:[
        new winston.transports.console(),
        new winston.transports.File({
            filename :'logs/app.log',
        })
    ]
})
module.exports =logger;


//how to use logger in other files:
const logger = require('./utils/logger');
logger.info('server started');

