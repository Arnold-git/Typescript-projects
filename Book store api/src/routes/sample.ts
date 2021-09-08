import express from 'express';
import controller from '..controller/sample';


const router = export.Router();

router.get('/ping', controller)