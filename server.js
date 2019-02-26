const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs');

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.post('/api/report', (req, res) => {
  console.log("request",req.body);
  var writeStream = fs.createWriteStream("Report.txt");
  var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  writeStream.write("Contract Location:"+ req.body.country + "\n");
  writeStream.write("Date:"+ date + "\n");
  writeStream.write("Total Gross Salary for 21 working days:"+ req.body.days_salary + "\n");
  writeStream.write("Monthly Employee Gross - Base Portion:"+ req.body.gross_salary + "\n");
  writeStream.write("Total of Employee's Monthly Deductions - Base Portion:"+ req.body.emp_ded + "\n");
  writeStream.write("Total of Employer Deductions – Base Portion:"+ req.body.empr_ded1 + "\n");
  writeStream.write("Net Take Home Pay (I.e. On - Site Retained Income):"+ req.body.net_salary + "\n");
  writeStream.write("Other allowances/Bonuses/Expenses:"+ req.body.expenses + "\n");
  writeStream.write("Total Pay:"+ req.body.takehome + "\n");
  writeStream.write("Thank You.");
  writeStream.end();
  res.json(req.body);
});

const port = process.env.PORT || 1409;

app.listen(port, () => `Server running on port ${port}`);
