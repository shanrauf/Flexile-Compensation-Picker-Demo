import React, { useContext, useState } from 'react'
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import 'reactjs-popup/dist/index.css';

import CompensationEditor from "../compensation_editor/compensation_editor";
import FlexileButton from '../flexile_button/flexile_button';
import { ActiveContractorContext } from '../../utils/ActiveContractorContext';
import './contractor_directory.css';
import '../popup.css';

function ContractorDirectory(props) {
  const [contractors, setContractors] = useState([...props.contractors])
  const {activeContractorInfo, setActiveContractorInfo} = useContext(ActiveContractorContext)

  const updateContractorData = (new_contractor_data) => {
    const new_contractors = [...props.contractors];
    const contractor_at_idx = {...new_contractors[activeContractorInfo.idx]};
    contractor_at_idx.hourly_rate = new_contractor_data.hourly_rate;
    contractor_at_idx.hours_per_week = new_contractor_data.hours_per_week;
    contractor_at_idx.weeks_per_year = new_contractor_data.weeks_per_year;
    contractor_at_idx.stock_options_percentage = new_contractor_data.stock_options_percentage;
    new_contractors[activeContractorInfo.idx] = contractor_at_idx;
    setContractors(new_contractors);

    setActiveContractorInfo(null)
    toast.success(
      "Successfully updated copmensation for " + contractor_at_idx.full_name,
      { position: toast.POSITION.BOTTOM_CENTER });
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
            <FlexileButton text="Edit" onClick={() => setActiveContractorInfo({contractor, idx})} />
          </div>
        </div>
      })}
    </div>
    {activeContractorInfo?.contractor && <Popup
      open={activeContractorInfo}
      closeOnDocumentClick
      onClose={() => setActiveContractorInfo(null)}
      modal>
        {close => (
          <CompensationEditor
          contractor={activeContractorInfo.contractor}
          close={close}
          onSubmit={updateContractorData} />
        )}
    </Popup>}
  </div>
  )
}

export default ContractorDirectory

