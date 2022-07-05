import { Router } from 'express'
import getCurrencies from '../controllers/getCurrencies.js'

const router = Router()

/* /api/currencies */

router.get('/', getCurrencies)

export default router
