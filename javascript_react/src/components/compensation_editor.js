import React, { useState } from 'react'

import RoundedSwitch from "./rounded_switch";
import RangeSlider from "./range_slider";
import '../compensation_editor.css';
import FlexileButton from './flexile_button';

const minHourlyRate = 0
const maxHourlyRate = 1000
const minHoursPerWeek = 15;
const maxHoursPerWeek = 35;
const minWeeksPerYear = 26;
const maxWeeksPerYear = 52;
const minStockPercentage = 0;
const maxStockPercentage = 100;

function CompensationEditor(props) {
  const [wantsSomeSalaryAsEquity, setWantsSomeSalaryAsEquity] = useState(props.contractor.stock_options_percentage > 0);
  const [hourlyRate, setHourlyRate] = useState(props.contractor.hourly_rate);
  const [hoursPerWeek, setHoursPerWeek] = useState(props.contractor.hours_per_week);
  const [weeksPerYear, setWeeksPerYear] = useState(props.contractor.weeks_per_year);
  const [stockOptionsPercentage, setStockOptionsPercentage] = useState(props.contractor.stock_options_percentage);
  const handleSwitchChange = (value) => {
    setWantsSomeSalaryAsEquity(value);
  };
  const handleNumericalInput = (value, callback) => {
    if (!/^-?\d+$/.test(value)) return;

    const number = parseInt(value);
    callback(number)
  }

  const handleSubmitCompensation = (parentCallback) => {
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
      console.log(errors)
    }
    else {
      parentCallback({
        errors,
        hourlyRate,
        hoursPerWeek,
        weeksPerYear,
        stockOptionsPercentage
      })
      props.close();
    }
  }

  return (
    <div className="modal">
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
          <RoundedSwitch checked={wantsSomeSalaryAsEquity} onChange={handleSwitchChange} />
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
            type="text"
            value={stockOptionsPercentage}
            onChange={e => handleNumericalInput(e.target.value, setStockOptionsPercentage)} />
        </div>
        <label>Cash</label>
        <label>Options at $100M</label>
        <label>Cash bonus at $37M</label>
        <label>Implied hourly rate</label>
      </div>}
      <div className="total-comp-container">
        <h2>Total Comp</h2>
        <h3>$238k/yr</h3>
          <FlexileButton
            text="Submit"
            onClick={handleSubmitCompensation} />
      </div>
    </div>
  )
}

export default CompensationEditor