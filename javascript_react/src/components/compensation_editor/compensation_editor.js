import { useState } from 'react'
import { toast } from 'react-toastify';

import RoundedSwitch from "../rounded_switch/rounded_switch";
import RangeSlider from "../range_slider/range_slider";
import FlexileButton from '../flexile_button/flexile_button';
import './compensation_editor.css';

const minHourlyRate = 0
const maxHourlyRate = 1000
const minHoursPerWeek = 15;
const maxHoursPerWeek = 35;
const minWeeksPerYear = 26;
const maxWeeksPerYear = 52;
const minStockPercentage = 0;
const maxStockPercentage = 100;
const eightyMillion = 80000000; // A $100M valuation at a 20% discount
const hundredMillion = 100000000; // A $100M valuation

function calculateCashPerHour(hourlyRate, stockOptionsPercentage) {
  return (100 - stockOptionsPercentage) / 100 * hourlyRate
}
function calculateDollarValueOfOptionsPerHour(hourlyRate, stockOptionsPercentage) {
  return (stockOptionsPercentage / 100 * hourlyRate) / eightyMillion * hundredMillion
}

function CompensationEditor(props) {
  const [wantsSomeSalaryAsEquity, setWantsSomeSalaryAsEquity] = useState(props.contractor.stock_options_percentage > 0);
  const [hourlyRate, setHourlyRate] = useState(props.contractor.hourly_rate);
  const [hoursPerWeek, setHoursPerWeek] = useState(props.contractor.hours_per_week);
  const [weeksPerYear, setWeeksPerYear] = useState(props.contractor.weeks_per_year);
  const [stockOptionsPercentage, setStockOptionsPercentage] = useState(props.contractor.stock_options_percentage);

  const handleEquitySwitch = () => {
    if (wantsSomeSalaryAsEquity) {
      // Now you don't want equity; set stock options % to 0:
      setStockOptionsPercentage(0)
    }
    else {
      // Now you want equity; let's default to 50%
      setStockOptionsPercentage(50)
    }
    setWantsSomeSalaryAsEquity(!wantsSomeSalaryAsEquity)
  }

  const handleNumericalInput = (value, callback) => {
    if (value === "") callback(0)
    else if (value.startsWith("-")) return
    else if (!/^-?\d+$/.test(value)) return
    else callback(parseInt(value))
  }

  const handleSubmitCompensation = () => {
    const errors = []
    if (hourlyRate < minHourlyRate || hourlyRate > maxHourlyRate) {
      errors.push("Hourly rate ($)")
    }
    if (hoursPerWeek < minHourlyRate || hoursPerWeek > maxHourlyRate) {
      errors.push("Hours/wk")
    }
    if (weeksPerYear < minWeeksPerYear || weeksPerYear > maxWeeksPerYear) {
      errors.push("Weeks/yr")
    }
    if (stockOptionsPercentage < minStockPercentage || stockOptionsPercentage > maxStockPercentage) {
      errors.push("Stock %")
    }
    if (errors.length) {
      toast.error(
        "The following field(s) are invalid: " + errors.join(", "),
        { position: toast.POSITION.BOTTOM_CENTER });
    }
    else {
      props.onSubmit({
        hourly_rate: hourlyRate,
        hours_per_week: hoursPerWeek,
        weeks_per_year: weeksPerYear,
        stock_options_percentage: stockOptionsPercentage
      })
      toast.success(
        "Successfully updated copmensation for " + props.contractor.full_name,
        { position: toast.POSITION.BOTTOM_CENTER });
      props.close();
    }
  }

  const cashPerHour = calculateCashPerHour(hourlyRate, stockOptionsPercentage);
  const dollarValueOfOptionsPerHour = calculateDollarValueOfOptionsPerHour(hourlyRate, stockOptionsPercentage);
  const cashBonusToExerciseOptions = ((37/100) * dollarValueOfOptionsPerHour);
  const impliedHourlyRate = (cashPerHour + dollarValueOfOptionsPerHour + cashBonusToExerciseOptions);
  const impliedTotalComp = impliedHourlyRate * hoursPerWeek * weeksPerYear / 1000;

  return (
    <div className="modal" id={wantsSomeSalaryAsEquity ? null : "no-equity"}>
      <button className="close" onClick={props.close}>
        &times;
      </button>
      <h1 className="header">Calculate your salary</h1>
      <p className="input-label">Hourly rate ($)</p>
        <input
          className="hourly-rate-input"
          type="text"
          value={hourlyRate}
          onChange={e => handleNumericalInput(e.target.value, setHourlyRate)} />

      <p className="input-label">Hours per week</p>
      <div className="slider-and-input-container">
          <RangeSlider
            min={minHoursPerWeek}
            max={maxHoursPerWeek}
            value={hoursPerWeek}
            onChange={value => setHoursPerWeek(value)} />
          <input
            className="small-input"
            type="text"
            value={hoursPerWeek}
            onChange={e => handleNumericalInput(e.target.value, setHoursPerWeek)} />
      </div>
      <p className="input-label">Weeks per year</p>
      <div className="slider-and-input-container">
          <RangeSlider
            min={minWeeksPerYear}
            max={maxWeeksPerYear}
            value={weeksPerYear}
            onChange={value => setWeeksPerYear(value)}/>
          <input
            className="small-input"
            type="text"
            value={weeksPerYear}
            onChange={e => handleNumericalInput(e.target.value, setWeeksPerYear)} />
      </div>
        <div className="equity-switch-container">
          <RoundedSwitch checked={wantsSomeSalaryAsEquity} onChange={handleEquitySwitch} />
          <label className="equity-switch-label">Take some as equity</label>
      </div>
      {wantsSomeSalaryAsEquity && <div className="equity-container">
        <p><a target="_blank" rel="noreferrer" href="https://gumroad.notion.site/Getting-paid-1d0a875413444556953d044bc4502469">Gumroad's equity program</a> lets you trade some cash for equity. This is how it works:</p>
        <ul>
          <li>Trade cash for options at 20% discount to last round's valuation</li>
          <li>Receive cash bonus to exercise options</li>
          <li>Exercise at time of grant or up to ten years after you stop working</li>
        </ul>
        <p className="input-label">Amount of cash to swap for equity</p>
        <div className="slider-and-input-container">
          <RangeSlider
            percentage
            min={minStockPercentage}
            max={maxStockPercentage}
            value={stockOptionsPercentage}
            onChange={value => setStockOptionsPercentage(value)}/>
          <input
            className="small-input"
            id="small-input-percentage"
            type="text"
            value={stockOptionsPercentage}
            onChange={e => { handleNumericalInput(e.target.value, setStockOptionsPercentage) }} />
          
        </div>
        <div className="calculation-container">
          <label>Cash</label>
          <label>${cashPerHour.toFixed(2)}/hr</label>
        </div>
        <div className="calculation-container">
          <label>Options at $100M</label>
          <label>${dollarValueOfOptionsPerHour.toFixed(2)}/hr</label>
        </div>
        <div className="calculation-container">
          <label>Cash bonus at $37M</label>
          <label>${cashBonusToExerciseOptions.toFixed(2)}/hr</label>
        </div>
        <div className="calculation-container implied-hourly-rate-container">
           <label>Implied hourly rate</label>
          <label><strong>${impliedHourlyRate.toFixed(2)}/hr</strong></label>
        </div>
      </div>}
      <div className="total-comp-container">
        <h2>TOTAL COMP</h2>
        <h3>${impliedTotalComp.toFixed(1)}k/yr</h3>
          <FlexileButton
            text="Submit"
            onClick={handleSubmitCompensation} />
      </div>
    </div>
  )
}

export default CompensationEditor