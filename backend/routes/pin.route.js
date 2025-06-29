import express from 'express';
const router = express.Router();
import { getPins } from '../controllers/pin.controller.js';

router.get('/', getPins);

export default router;