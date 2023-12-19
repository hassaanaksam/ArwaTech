const express = require("express");
const multer = require("multer");
const path = require("path");
const Employee = require("../model/employee.js");

const router = express.Router();

// Set up Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../uploads/'));
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve static files
router.use(express.static('uploads'));

router.post("/employee", upload.single('image'), async (req, res) => {
  try {
    const employeesData = req.body;
    const image = req.file.filename;

    // Include the image path in the employee data
    const employee = new Employee({ ...employeesData, image });

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
