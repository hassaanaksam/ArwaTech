const express = require("express");
const multer = require("multer");
const path = require("path");
const Employee = require("../model/employee.js");

const router = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/employee", upload.array('images', 5), async (req, res) => {
  try {
    const employeesData = req.body;
    const employee = new Employee(employeesData);

    // Check if files were uploaded
    if (req.files) {
      // If files were uploaded, store the filenames in the employee document
      employee.images = req.files.map(file => file.filename);
    }

    const employeeData = await employee.save();

    res.status(200).send({ message: "Employee successfully saved", data: employeeData });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/employee', async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json({
      status: true,
      employees: employees
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
