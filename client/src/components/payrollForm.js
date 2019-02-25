import React, { Component } from 'react';
import './header.css';
export default class PayrollForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rate: '',
        days_salary: "",
        gross_margin: "",
        gross_salary: "",
        gross_onsite: "",
        emp_ded: "",
        net_salary: "",
        empr_ded1: "",
        empr_ded2: "",
        empr_ded3: "",
        ctc: "",
        allowances: "",
        takehome: "",
        remmitance1: "",
        remmitance2: "",
        remmitance3: "",
        remmitance4: "",
        expenses: "",
        cost: "",
        sales: "",
        actual_margin: ""
      };
  }

  componentWillMount() {
    this.setState({ gross_salary: this.props.formData.gross_salary });
    this.setState({ gross_onsite: this.props.formData.gross_onsite });
    this.setState({ emp_ded: this.props.formData.emp_ded });
    this.setState({ net_salary: this.props.formData.net_salary });
    this.setState({ empr_ded2: this.props.formData.empr_ded2 });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rate: '' });
    this.setState({ days_salary: '' });
    this.setState({ gross_margin: '' });
    this.setState({ empr_ded1: '' });
    this.setState({ empr_ded2: '' });
    this.setState({ empr_ded3: '' });
    this.setState({ empr_ded3: '' });
    this.setState({ ctc: '' });
    this.setState({ allowances: '' });
    this.setState({ takehome: '' });
    this.setState({ remmitance1: '' });
    this.setState({ remmitance2: '' });
    this.setState({ remmitance3: '' });
    this.setState({ remmitance4: '' });
    this.setState({ expenses: '' });
    this.setState({ cost: '' });
    this.setState({ sales: '' });
    this.setState({ actual_margin: '' });
    this.setState({ gross_salary: this.props.formData.gross_salary });
    this.setState({ gross_onsite: this.props.formData.gross_onsite });
    this.setState({ emp_ded: this.props.formData.emp_ded });
    this.setState({ net_salary: this.props.formData.net_salary });
    this.setState({ empr_ded2: this.props.formData.empr_ded2 });
}

  onSubmit(e) {
    e.preventDefault();
      console.log("Form data...",this.state.data);
  };

  onChange(state, e) {
    this.setState({ [state]: e.target.value });
    if (state === "rate") {
      this.setState({ days_salary: 21*e.target.value });
    }
  };

  render() {
    //const { rate, days_salary, gross_margin, gross_salary, gross_onsite, emp_ded, net_salary, empr_ded1, empr_ded2, empr_ded3, ctc, allowances, takehome, remmitance1, remmitance2, remmitance3, remmitance4, expenses, cost, sales, actual_margin} = this.state.data;
    return (
      <form className="form-horizontal" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-2" >Total Rate:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="rate"
            value={this.state.rate}
            required="required"
            onChange={this.onChange.bind(this, 'rate')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >For 21 Days:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="days_salary"
            value={this.state.days_salary}
            required="required"
            onChange={this.onChange.bind(this, 'days_salary')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Gross Margin:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="gross_margin"
            value={this.state.gross_margin}
            required="required"
            onChange={this.onChange.bind(this, 'gross_margin')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Total Gross Salary:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="gross_salary"
            required="required"
            disabled
            value={this.state.gross_salary}
            onChange={this.onChange.bind(this, 'gross_salary')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Onsite Gross Salary:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="gross_onsite"
            required="required"
            disabled
            value={this.state.gross_onsite}
            onChange={this.onChange.bind(this, 'gross_onsite')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Onsite Employee Deductions:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="emp_ded1"
            required="required"
            disabled
            value={this.state.emp_ded}
            onChange={this.onChange.bind(this, 'emp_ded')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Onsite Net Salary:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="net_salary"
            required="required"
            disabled
            value={this.state.net_salary}
            onChange={this.onChange.bind(this, 'net_salary')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Employer Deductions:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="empr_ded1"
            value={this.state.empr_ded1}
            required="required"
            onChange={this.onChange.bind(this, 'empr_ded1')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="empr_ded2"
            value={this.state.empr_ded2}
            required="required"
            disabled
            onChange={this.onChange.bind(this, 'empr_ded2')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="empr_ded3"
            required="required"
            value={this.state.empr_ded3}
            onChange={this.onChange.bind(this, 'empr_ded3')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Onsite CTC:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="ctc"
            required="required"
            value={this.state.ctc}
            onChange={this.onChange.bind(this, 'ctc')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Other allowances:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="allowances"
            required="required"
            value={this.state.allowances}
            onChange={this.onChange.bind(this, 'allowances')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Total Net Take home:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="takehome"
            required="required"
            value={this.state.takehome}
            onChange={this.onChange.bind(this, 'takehome')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Remmitance Cost:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="remmitance1"
            required="required"
            value={this.state.remmitance1}
            onChange={this.onChange.bind(this, 'remmitance1')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="remmitance2"
            required="required"
            value={this.state.remmitance2}
            onChange={this.onChange.bind(this, 'remmitance2')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="remmitance3"
            required="required"
            value={this.state.remmitance3}
            onChange={this.onChange.bind(this, 'remmitance3')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="remmitance4"
            required="required"
            value={this.state.remmitance4}
            onChange={this.onChange.bind(this, 'remmitance4')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Other Expenses:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="expenses"
            required="required"
            value={this.state.expenses}
            onChange={this.onChange.bind(this, 'expenses')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Total Cost:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="cost"
            required="required"
            value={this.state.cost}
            onChange={this.onChange.bind(this, 'cost')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Total Sales:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="sales"
            required="required"
            value={this.state.sales}
            onChange={this.onChange.bind(this, 'sales')}
          />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Actual Margin:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="actual_margin"
            required="required"
            value={this.state.actual_margin}
            onChange={this.onChange.bind(this, 'actual_margin')}
          />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
        </form>
    )
  }
}
