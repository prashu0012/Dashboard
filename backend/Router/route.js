import express from "express";
import { RegisterCollege } from "../controller/collegeRegistration.js";
import { getAllColleges } from "../controller/getAllCollege.js";
const router = express.Router();

// get colleges
router.get('/', getAllColleges);

// register college
router.post('/register', RegisterCollege);

export default router;