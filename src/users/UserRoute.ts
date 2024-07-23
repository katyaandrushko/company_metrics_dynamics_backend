import express from 'express'
import { login, register } from './UserController'
import authenticate from '../middlewares/authenticate'

const UserRoute = express.Router()

/**
 * @swagger
 * /users/register:
 *   post:
 *     description: Register a new user
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
UserRoute.post('/register', register)

/**
 * @swagger
 * /users/login:
 *   post:
 *     description: Login a user
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid email or password
 */
UserRoute.post('/login', login)

export default UserRoute
