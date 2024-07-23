import mongoose from 'mongoose';

export interface MetricDynamics {
  _id: string;
  metricId: string;
  companyId: string;
  date: Date;
  value: number;
}

const MetricDynamicsSchema = new mongoose.Schema<MetricDynamics>(
  {
    metricId: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MetricDynamics>(
  'MetricDynamics',
  MetricDynamicsSchema
);
