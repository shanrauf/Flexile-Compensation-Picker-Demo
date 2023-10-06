import React, { useRef, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import CompensationEditor from "../compensation_editor/compensation_editor";
import FlexileButton from '../flexile_button/flexile_button';
import './contractor_directory.css';

function ContractorDirectory(props) {
  const [contractors, setContractors] = useState([...props.contractors])
  const activeContractor = useRef(null);
  const activeContractorIdx = useRef(null);
  const [editorIsOpen, setEditorIsOpen] = useState(false);
  const openEditor = (contractor, idx) => {
    activeContractorIdx.current = idx;
    activeContractor.current = contractor;
    setEditorIsOpen(true)
  }
  const updateContractorData = (payload) => {
    const new_contractors = [...props.contractors];
    const contractor_at_idx = new_contractors[activeContractorIdx.current];
    contractor_at_idx.hourly_rate = payload.hourly_rate;
    contractor_at_idx.hours_per_week = payload.hours_per_week;
    contractor_at_idx.weeks_per_year = payload.weeks_per_year;
    contractor_at_idx.stock_options_percentage = payload.stock_options_percentage;
    setContractors(new_contractors);
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
      {contractors.map((contractor, idx) => {
        return <div className="row table-body-row" key={idx}>
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
            <FlexileButton text="Edit" onClick={() => {openEditor(contractor, idx)}} />
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
            contractor={activeContractor.current}
            close={close}
            onSubmit={updateContractorData} />}
    </Popup>
  </div>
  )
}

export default ContractorDirectory

