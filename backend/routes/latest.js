import { Router } from 'express'
import { check } from 'express-validator'
import getLatest from '../controllers/getLatest.js'
import { validateFields } from '../middlewares/validateFields.js'

const router = Router()

/* /api/latest */

router.get(
  '/:symbol',
  [check('symbol').isUppercase().isLength({ min: 3, max: 3 })],
  validateFields,
  getLatest
)

export default router
