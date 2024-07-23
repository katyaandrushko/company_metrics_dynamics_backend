import mongoose from 'mongoose';

export interface Company {
  _id: string;
  name: string;
  bankDetails: string;
  phone: string;
  contactPerson: string;
}

const CompanySchema = new mongoose.Schema<Company>(
  {
    name: {
      type: String,
      required: true,
    },
    bankDetails: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Company>('Company', CompanySchema);
