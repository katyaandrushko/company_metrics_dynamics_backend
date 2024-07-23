import express from 'express'
import {
   addCompany,
   getCompanies,
   getCompany,
   updateCompany,
   deleteCompany,
} from './CompanyController'

const router = express.Router()

/**
 * @swagger
 * /companies/add:
 *   post:
 *     description: Add a new company
 *     tags:
 *      - Companies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bankDetails:
 *                 type: string
 *               phone:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *     responses:
 *       201:
 *         description: Company created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/add', addCompany)

/**
 * @swagger
 * /companies:
 *   get:
 *     description: Returns a list of companies
 *     tags:
 *      - Companies
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: An array of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   bankDetails:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   contactPerson:
 *                     type: string
 */
router.get('/', getCompanies)

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     description: Returns a single company by ID
 *     tags:
 *      - Companies
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company ID
 *     responses:
 *       200:
 *         description: A single company
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 bankDetails:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 contactPerson:
 *                   type: string
 *       404:
 *         description: Company not found
 */
router.get('/:id', getCompany)

/**
 * @swagger
 * /companies/details/{id}:
 *   get:
 *     description: Returns detailed information of a single company by ID
 *     tags:
 *      - Companies
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company ID
 *     responses:
 *       200:
 *         description: Detailed company information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 bankDetails:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 contactPerson:
 *                   type: string
 *       404:
 *         description: Company not found
 */
router.get('/details/:id', getCompany)

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     description: Updates a company by ID
 *     tags:
 *      - Companies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bankDetails:
 *                 type: string
 *               phone:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company ID
 *     responses:
 *       200:
 *         description: Company updated successfully
 *       404:
 *         description: Company not found
 *       400:
 *         description: Invalid input
 */
router.put('/:id', updateCompany)

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     description: Deletes a company by ID
 *     tags:
 *      - Companies
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company ID
 *     responses:
 *       200:
 *         description: Company deleted successfully
 *       404:
 *         description: Company not found
 */
router.delete('/:id', deleteCompany)

export default router
