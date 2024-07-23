import express from 'express';
import {
  addMetric,
  deleteMetric,
  getMetric,
  getMetrics,
  updateMetric,
  getValues,
  addDynamics,
} from './MetricsController';

const router = express.Router();

router.post('/add', addMetric);
router.post('/addDynamics', addDynamics);
router.get('/', getMetrics);
router.get('/:companyId/:metricId/values', getValues);
router.get('/:id', getMetric);
router.put('/:id', updateMetric);
router.delete('/:id', deleteMetric);

export default router;
