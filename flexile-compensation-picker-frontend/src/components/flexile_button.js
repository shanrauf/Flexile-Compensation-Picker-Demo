import React from 'react'

import '../flexile_button.css';

function FlexileButton(props) {
  return (
    <button
      className="flexile-button"
      onClick={props.onClick}>{props.text}</button >
  )
}

export default FlexileButton
