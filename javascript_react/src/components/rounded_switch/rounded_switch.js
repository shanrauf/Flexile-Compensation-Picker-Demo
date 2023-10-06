// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
import "./rounded_switch.css";

function RoundedSwitch(props) {
  return (
    <label className="switch">
      <input className="switch-input" type="checkbox" checked={props.checked} onChange={e => props.onChange(e.target.checked)} />
      <span className="switch-slider round"></span>
    </label>
  )
}

export default RoundedSwitch
