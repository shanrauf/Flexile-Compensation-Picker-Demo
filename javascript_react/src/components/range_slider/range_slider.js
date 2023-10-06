import "./range_slider.css";

// A fancy fn required to get the effect Sahil wants (partially filled slider)
function partialSliderStyle(sliderValue, min, max) {
  return `linear-gradient(to right, #fa92e6 0%, #fa92e6 ${(sliderValue-min)/(max-min)*100}%, #e8e8e8 ${(sliderValue-min)/(max-min)*100}%, #e8e8e8 100%)`
}

function RangeSlider(props) {
  return (
    <div className="range-container">
      <input
        type="range"
        style={{background: partialSliderStyle(props.value, props.min, props.max)}}
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
