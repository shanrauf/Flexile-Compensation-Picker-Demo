import React from 'react'

import "../range_slider.css";
function RangeSlider(props) {
  return (
    <div className="range-container">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        className="slider" />
      <ul className="slider-bounds-container">
        <li>{props.min}{props?.percentage && "%"}</li>
        <li>{props.max}{props?.percentage && "%"}</li>
      </ul>
    </div>
  )
}

export default RangeSlider
