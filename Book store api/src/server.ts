import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import configfrom from './config/config';

const NAMESPACE = 'Server';
const router = express();



express.urlencoded({ extended: false })
express.json()

// logging the request
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.
    socket.remoteAddress}]`);

    res.on("finish", () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.
            socket.remoteAddress}], STATUS - [${res.statusCode}]`);

    })
});

router.use((req, res, next) =>{
    res.header('Acess')
})