import React, { Component } from 'react';
import PayrollForm from './payrollForm';
class Payroll extends Component {
  constructor() {
    super();
    this.state = {
      'countries': [{
		"name": "Please Select",
		"value": ""
	},
	{
		"name": "Norway",
		"value": "norway"
	},
	{
		"name": "Finland",
		"value": "finland"
	},
	{
		"name": "Switzerland",
		"value": "switzerland"
	},
	{
		"name": "Denmark",
		"value": "denmark"
	},
	{
		"name": "Chez Republic",
		"value": "chez_republic"
	},
	{
		"name": "Lativa",
		"value": "lativa"
	},
	{
		"name": "Sweden",
		"value": "sweden"
	},
	{
		"name": "France",
		"value": "france"
	},
	{
		"name": "Belgium",
		"value": "belgium"
	},
	{
		"name": "Luxembourg",
		"value": "luxembourg"
	},
	{
		"name": "Germany",
		"value": "germany"
	},
	{
		"name": "Spain",
		"value": "spain"
	},
	{
		"name": "Malaysia",
		"value": "malaysia"
	}
],
      'selectedValue': '',
      'norway' : {"gross_salary": "5670", "gross_onsite": "3470", "emp_ded": "1290.84", "net_salary": "2179.16", "empr_ded2": "496.21"},
      'finland' : {"gross_salary": "8127", "gross_onsite": "4683", "emp_ded": "1648.42", "net_salary": "3034.58", "empr_ded2": "1147.34"},
      'switzerland' : {"gross_salary": "9450", "gross_onsite": "4500", "emp_ded": "725", "net_salary": "3775", "empr_ded2": "1600"},
      'denmark' : {"gross_salary": "9072", "gross_onsite": "4897.50", "emp_ded": "798", "net_salary": "4099.50", "empr_ded2": "1752.50"},
      'chez_republic' : {"gross_salary": "3969", "gross_onsite": "1850.01", "emp_ded": "592.01", "net_salary": "1258", "empr_ded2": "629"},
      'lativa' : {"gross_salary": "8032.5", "gross_onsite": "4583", "emp_ded": "1048.59", "net_salary": "3534.41", "empr_ded2": "1549.05"},
      'sweden' : {"gross_salary": "7560", "gross_onsite": "4150", "emp_ded": "1377.80", "net_salary": "2772.20", "empr_ded2": "1305.18"},
      'france' : {"gross_salary": "6237", "gross_onsite": "4583.33", "emp_ded": "1065.63", "net_salary": "3517.70", "empr_ded2": "1145.83"},
      'belgium' : {"gross_salary": "9450", "gross_onsite": "3500", "emp_ded": "1345", "net_salary": "2154.25", "empr_ded2": "1136.45"},
      'luxembourg' : {"gross_salary": "9450", "gross_onsite": "6174", "emp_ded": "2184", "net_salary": "3990", "empr_ded2": "1150.05"},
      'germany' : {"gross_salary": "8100", "gross_onsite": "4450", "emp_ded": "1700", "net_salary": "2750", "empr_ded2": "860.05"},
      'spain' : {"gross_salary": "7749", "gross_onsite": "4166", "emp_ded": "1354", "net_salary": "2812", "empr_ded2": "1425"},
      'malaysia' : {"gross_salary": "30870", "gross_onsite": "7000", "emp_ded": "700", "net_salary": "6300", "empr_ded2": "840"},
      'formData': {}
    };
  }
  handleChange = (event) => {
    this.setState({ selectedValue: "" });
    this.setState({ selectedValue: event.target.value });
    this.setState({ formData: this.state[event.target.value] });
  };
  render() {
    return (<div>
      <h1>Payroll Page</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="form-group">
            <label className="control-label col-sm-2 country-label">Select Country:</label>
            <div className="col-sm-2">
            <select className="form-control" onChange={this.handleChange} value={this.state.selectedValue}>
              {this.state.countries.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            </div>
          </div>
        </div>
        <div className="row">
          { this.state.selectedValue ? <PayrollForm title={this.state.selectedValue} formData={this.state.formData}/> : null }
        </div>
      </div>
      </div>
    )
  }
}

export default Payroll;
