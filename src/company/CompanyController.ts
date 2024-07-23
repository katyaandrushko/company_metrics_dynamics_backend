import { Request, Response } from 'express';
import CompanySchema, { Company } from './CompanySchema';

export async function addCompany(req: Request, res: Response) {
  try {
    const companyData: Company = req.body;
    const company = new CompanySchema(companyData);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: 'Error adding company' });
  }
}

export async function getCompanies(req: Request, res: Response) {
  try {
    const companies = await CompanySchema.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching companies' });
  }
}

export async function getCompany(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const company = await CompanySchema.findById(id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching company' });
  }
}

export async function updateCompany(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const company = await CompanySchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: 'Error updating company' });
  }
}

export async function deleteCompany(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await CompanySchema.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting company' });
  }
}
