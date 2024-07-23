import express from 'express'
import {
   addMetric,
   deleteMetric,
   getMetric,
   getMetrics,
   updateMetric,
   getValues,
   addDynamics,
   addMultipleDynamics,
} from './MetricsController'

const router = express.Router()

/**
 * @swagger
 * /metrics/add:
 *   post:
 *     description: Add a new metric
 *     tags:
 *      - Metrics
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Revenue
 *               importance:
 *                 type: string
 *                 example: High
 *               measure:
 *                 type: string
 *                 example: USD
 *     responses:
 *       201:
 *         description: Metric created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/add', addMetric)

/**
 * @swagger
 * /metrics/addDynamics:
 *   post:
 *     description: Add dynamics for a metric
 *     tags:
 *      - Metrics
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyId:
 *                 type: string
 *                 example: 60d0fe4f5311236168a109ca
 *               metricId:
 *                 type: string
 *                 example: 60d0fe4f5311236168a109cb
 *               value:
 *                 type: number
 *                 example: 500000
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2023-07-23
 *     responses:
 *       201:
 *         description: Dynamics added successfully
 *       400:
 *         description: Invalid input
 */
router.post('/addDynamics', addDynamics)

/**
 * @swagger
 * /metrics/addMultipleDynamics:
 *   post:
 *     description: Add multiple dynamics for metrics
 *     tags:
 *      - Metrics
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 companyId:
 *                   type: string
 *                   example: 60d0fe4f5311236168a109ca
 *                 metricId:
 *                   type: string
 *                   example: 60d0fe4f5311236168a109cb
 *                 value:
 *                   type: number
 *                   example: 500000
 *                 date:
 *                   type: string
 *                   format: date
 *                   example: 2023-07-23
 *     responses:
 *       201:
 *         description: Multiple dynamics added successfully
 *       400:
 *         description: Invalid input
 */
router.post('/addMultipleDynamics', addMultipleDynamics)

/**
 * @swagger
 * /metrics:
 *   get:
 *     description: Returns a list of metrics
 *     tags:
 *      - Metrics
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: An array of metrics
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
 *                   importance:
 *                     type: string
 *                   measure:
 *                     type: string
 */
router.get('/', getMetrics)

/**
 * @swagger
 * /metrics/{companyId}/{metricId}/values:
 *   get:
 *     description: Returns values for a metric for a specific company
 *     tags:
 *      - Metrics
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The company ID
 *       - in: path
 *         name: metricId
 *         schema:
 *           type: string
 *         required: true
 *         description: The metric ID
 *     responses:
 *       200:
 *         description: Metric values
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                   date:
 *                     type: string
 *                     format: date
 *       404:
 *         description: Metric not found
 */
router.get('/:companyId/:metricId/values', getValues)

/**
 * @swagger
 * /metrics/{id}:
 *   get:
 *     description: Returns a single metric by ID
 *     tags:
 *      - Metrics
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The metric ID
 *     responses:
 *       200:
 *         description: A single metric
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 importance:
 *                   type: string
 *                 measure:
 *                   type: string
 *       404:
 *         description: Metric not found
 */
router.get('/:id', getMetric)

/**
 * @swagger
 * /metrics/{id}:
 *   put:
 *     description: Updates a metric by ID
 *     tags:
 *      - Metrics
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               importance:
 *                 type: string
 *               measure:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The metric ID
 *     responses:
 *       200:
 *         description: Metric updated successfully
 *       404:
 *         description: Metric not found
 *       400:
 *         description: Invalid input
 */
router.put('/:id', updateMetric)

/**
 * @swagger
 * /metrics/{id}:
 *   delete:
 *     description: Deletes a metric by ID
 *     tags:
 *      - Metrics
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The metric ID
 *     responses:
 *       200:
 *         description: Metric deleted successfully
 *       404:
 *         description: Metric not found
 */
router.delete('/:id', deleteMetric)

export default router
