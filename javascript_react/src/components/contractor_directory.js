import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import CompensationEditor from "./compensation_editor";
import '../contractor_directory.css';
import FlexileButton from './flexile_button';

function ContractorDirectory(props) {
  const [editorIsOpen, setEditorIsOpen] = useState(false);
  const [activeContractor, setActiveContractor] = useState(null)
  const openEditor = (contractor) => {
    setActiveContractor(contractor)
    setEditorIsOpen(true)
  }
  const onSubmit = (payload) => {
    if (!payload?.errors?.length) {
      const newContractor = {}
    }
  }

  return (
  <div className="table-container">
    <div className="table">
      <div className="row header">
        <div className="cell">Full Name</div>
        <div className="cell">Role</div>
        <div className="cell">Location</div>
        <div className="cell">Joined On</div>
        <div className="cell">$/hr</div>
        <div className="cell">Hours/wk</div>
        <div className="cell">Weeks/yr</div>
        <div className="cell">Stock %</div>
        <div className="cell">Action</div>
        
        </div>
        {props.contractors.map((contractor) => {
          return <div className="row" key={contractor.id}>
            <div className="cell" data-title="Full Name">
              {contractor.full_name}
            </div>
            <div className="cell" data-title="Role">
              {contractor.role}
            </div>
            <div className="cell" data-title="Location">
              {contractor.location}
            </div>
            <div className="cell" data-title="Joined On">
              {contractor.joined_on}
            </div>
            <div className="cell" data-title="Hourly Rate">
              {contractor.hourly_rate}
            </div>
            <div className="cell" data-title="Hours Per Week">
              {contractor.hours_per_week}
            </div>
            <div className="cell" data-title="Weeks Per Year">
              {contractor.weeks_per_year}
            </div>
            <div className="cell" data-title="Stock %">
              {contractor.stock_options_percentage}%
            </div>
            <div className="cell" data-title="Action">
              <FlexileButton text="Edit" onClick={() => {openEditor(contractor)}} />
            </div>
          </div>
        })}
    </div>
    <Popup
      open={editorIsOpen}
      closeOnDocumentClick
      onClose={() => setEditorIsOpen(false)}
      modal>
        {close =>
          <CompensationEditor
            contractor={activeContractor}
            close={close}
            onSubmit={onSubmit} />}
    </Popup>
  </div>
  )
}

export default ContractorDirectory

