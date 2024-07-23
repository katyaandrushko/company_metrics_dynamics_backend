import mongoose from 'mongoose';

export interface Metric {
  _id: string;
  name: string;
  importance: string;
  measure: string;
}

const MetricSchema = new mongoose.Schema<Metric>(
  {
    name: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
      required: true,
    },
    measure: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Metric>('Metric', MetricSchema);
