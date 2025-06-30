import express from 'express';
const router = express.Router();
import { getPin, getPins } from '../controllers/pin.controller.js';

router.get('/', getPins);
router.get('/:id', getPin)
export default router;