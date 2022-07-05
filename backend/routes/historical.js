import { Router } from 'express'
import getHistorical from '../controllers/getHistorical.js'
import isValidateQueryHistorical from '../middlewares/isValidateQueryHistorical.js'

const router = Router()

/* /api/historical */

router.get('/', isValidateQueryHistorical, getHistorical)

export default router
