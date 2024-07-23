import express from 'express';
import {
  addCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} from './CompanyController';

const router = express.Router();

router.post('/add', addCompany);
router.get('/', getCompanies);
router.get('/:id', getCompany);
router.get('/details/:id', getCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;
