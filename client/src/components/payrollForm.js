import React, { Component } from 'react';
import './header.css';
export default class PayrollForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        country: "",
        rate: '',
        days_salary: "",
        gross_margin: "",
        gross_salary: "",
        gross_onsite: "",
        emp_ded: "",
        net_salary: "",
        empr_decp: "",
        empr_ded1: "",
        empr_ded2: "",
        empr_ded3: "",
        empr_ded4: "",
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
      this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ country: this.props.title });
    this.setState({ gross_onsite: this.props.formData.gross_onsite });
    this.setState({ emp_ded: this.props.formData.emp_ded });
    this.setState({ net_salary: this.props.formData.net_salary });
    this.setState({ empr_ded2: this.props.formData.empr_ded2 });
    this.setState({ remmitance2: this.props.formData.gross_onsite });
    this.setState({ remmitance3: this.props.formData.empr_ded2 });
    this.setState({ ctc: Number(this.props.formData.gross_onsite) + Number(this.props.formData.empr_ded2) });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rate: '' });
    this.setState({ days: '' });
    this.setState({ days_salary: '' });
    this.setState({ gross_margin: '' });
    this.setState({ gross_salary: '' });
    this.setState({ empr_decp: '' });
    this.setState({ empr_ded1: '' });
    this.setState({ empr_ded2: '' });
    this.setState({ empr_ded3: '' });
    this.setState({ empr_ded4: '' });
    this.setState({ allowances: '' });
    this.setState({ takehome: '' });
    this.setState({ remmitance1: '' });
    this.setState({ remmitance4: '' });
    this.setState({ expenses: '' });
    this.setState({ cost: '' });
    this.setState({ sales: '' });
    this.setState({ actual_margin: '' });
    this.setState({ country: nextProps.title });
    this.setState({ gross_onsite: nextProps.formData.gross_onsite });
    this.setState({ emp_ded: nextProps.formData.emp_ded });
    this.setState({ net_salary: nextProps.formData.net_salary });
    this.setState({ empr_ded2: nextProps.formData.empr_ded2 });
    this.setState({ ctc: Number(nextProps.formData.gross_onsite) + Number(nextProps.formData.empr_ded2) });
    this.setState({ remmitance2: nextProps.formData.gross_onsite });
    this.setState({ remmitance3: nextProps.formData.empr_ded2 });
}

  onSubmit = (e) => {
    e.preventDefault();
    let self = this;
    fetch('/api/report', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(self.state),
      }).then(res => res.json())
      .then(response => window.open(response.path))
      .catch(error => console.error('Error:', error));
  };

  onChange(state, e) {
    this.setState({ [state]: e.target.value });
    if (state === "days" && this.state.rate) {
      this.setState({ days_salary: e.target.value*this.state.rate });
      this.setState({ sales: e.target.value*this.state.rate });
      this.setState({ remmitance4:  e.target.value*40});
    }
    if (state === "gross_margin" && e.target.value && this.state.days_salary) {
      let value = this.state.days_salary - this.state.days_salary/e.target.value;
      this.setState({ gross_salary: value });
    }
    if (state === "gross_margin" && !e.target.value) {
      this.setState({ gross_salary: '' });
    }
    if (state === "empr_decp" && this.state.days_salary) {
      let value = this.state.days_salary*e.target.value/100;
      this.setState({ empr_ded3: value });
    }
    if (state === "empr_ded4" && this.state.empr_ded3 && this.state.empr_ded2 && this.state.gross_salary) {
      let value = this.state.empr_ded3 + Number(this.state.empr_ded2) + Number(e.target.value);
      let allowances = this.state.gross_salary - this.props.formData.gross_onsite - value;
      let takehome = Number(this.props.formData.net_salary) + allowances;
      this.setState({ empr_ded1:  value });
      this.setState({ allowances:  allowances });
      this.setState({ takehome: takehome });
      this.setState({ expenses: allowances });
      this.setState({ remmitance1: Number(this.state.remmitance2) + Number(this.state.remmitance3) + Number(this.state.remmitance4) });
      this.setState({ cost: Number(this.state.remmitance2) + Number(this.state.remmitance3) + Number(this.state.remmitance4) + allowances });
      this.setState({ actual_margin: Number(this.state.sales) - (Number(this.state.remmitance2) + Number(this.state.remmitance3) + Number(this.state.remmitance4) + Number(allowances))});
    }
  };

  render() {
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
          <label className="control-label col-sm-2" >For Days:</label>
          <div className="col-sm-1">
          <input
          className="form-control"
            type="text"
            name="days"
            value={this.state.days}
            required="required"
            onChange={this.onChange.bind(this, 'days')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="days_salary"
            disabled
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
          <label className="control-label col-sm-2" >Employer Deduction %:</label>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="empr_decp"
            required="required"
            value={this.state.empr_decp}
            onChange={this.onChange.bind(this, 'empr_decp')}
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
            disabled
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
            disabled
            value={this.state.empr_ded3}
            onChange={this.onChange.bind(this, 'empr_ded3')}
          />
          </div>
          <div className="col-sm-2">
          <input
          className="form-control"
            type="text"
            name="empr_ded4"
            required="required"
            value={this.state.empr_ded4}
            onChange={this.onChange.bind(this, 'empr_ded4')}
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
