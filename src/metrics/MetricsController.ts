import { Request, Response } from 'express';
import MetricSchema, { Metric } from './MetricSchema';
import MetricDynamicsSchema, { MetricDynamics } from './MetricDynamicsSchema';

export async function addMetric(req: Request, res: Response) {
  try {
    const metricData: Metric = req.body;
    const metric = new MetricSchema(metricData);
    await metric.save();
    res.status(201).json(metric);
  } catch (error) {
    res.status(500).json({ error: 'Error adding metric' });
  }
}

export async function getMetrics(req: Request, res: Response) {
  try {
    const metrics = await MetricSchema.find();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching metrics' });
  }
}

export async function getValues(req: Request, res: Response) {
  const { companyId, metricId } = req.params;
  try {
    const metricDynamics = await MetricDynamicsSchema.find({
      companyId: companyId,
      metricId: metricId,
    }).exec();
    if (!metricDynamics)
      return res.status(404).json({ error: 'metric dynamics not found' });
    res.json(metricDynamics);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching metricDynamics' });
  }
}

export async function getMetric(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const metric = await MetricSchema.findById(id);
    if (!metric) return res.status(404).json({ error: 'metric not found' });
    res.json(metric);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching metric' });
  }
}

export async function updateMetric(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const metric = await MetricSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!metric) return res.status(404).json({ error: 'metric not found' });
    res.json(metric);
  } catch (error) {
    res.status(500).json({ error: 'Error updating metric' });
  }
}

export async function deleteMetric(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await MetricSchema.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting metric' });
  }
}

export async function addDynamics(req: Request, res: Response) {
  try {
    const metricDynamicsData: MetricDynamics = req.body;
    const metricDynamics = new MetricDynamicsSchema(metricDynamicsData);
    await metricDynamics.save();
    res.status(201).json(metricDynamics);
  } catch (error) {
    res.status(500).json({ error: 'Error adding metric' });
  }
}
