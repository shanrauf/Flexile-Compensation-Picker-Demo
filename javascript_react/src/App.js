import { useEffect, useState } from "react";
// import axios from 'axios';

import './App.css';
import ContractorDirectory from "./components/contractor_directory";

// const API_URL = "http://localhost:3000/api/v1/contractors";

// For demo purposes, I am just hard-coding the data even though the Rails API works fine.
// It's not worth the hassle of deploying the API & database to Heroku or wherever for a demo.
const contractor_data = [
  {
    id: 1,
    full_name: "Shan Rauf",
    role: "Engineer",
    location: "Fresno, CA",
    joined_on: "October 9th, 2023",
    hourly_rate: 105.0,
    hours_per_week: 20,
    weeks_per_year: 44,
    stock_options_percentage: 50.0
  },
  {
    id: 2,
    full_name: "Sahil Lavingia",
    role: "CEO",
    location: "Statue of Liberty",
    joined_on: "April 1st, 2011",
    hourly_rate: 105.0,
    hours_per_week: 35,
    weeks_per_year: 52,
    stock_options_percentage: 100.0
  },
  {
    id: 3,
    full_name: "Maya (Purple_Elf)",
    role: "Engineer",
    location: "Austria",
    joined_on: "January 1st, 2021",
    hourly_rate: 105.0,
    hours_per_week: 35,
    weeks_per_year: 52,
    stock_options_percentage: 50.0
  },
  {
    id: 4,
    full_name: "Alice Mccarthy",
    role: "Designer",
    location: "San Francisco, CA",
    joined_on: "February 2nd, 2021",
    hourly_rate: 105.0,
    hours_per_week: 25,
    weeks_per_year: 52,
    stock_options_percentage: 60.0
  },
  {
    id: 5,
    full_name: "Bob Hunt",
    role: "Designer",
    location: "Austin, TX",
    joined_on: "July 13th, 2021",
    hourly_rate: 105.0,
    hours_per_week: 30,
    weeks_per_year: 52,
    stock_options_percentage: 50.0
  },
  {
    id: 6,
    full_name: "Charlie Swanson",
    role: "Customer Support",
    location: "Mars",
    joined_on: "June 11th, 2021",
    hourly_rate: 105.0,
    hours_per_week: 25,
    weeks_per_year: 52,
    stock_options_percentage: 50.0
  },
  {
    id: 7,
    full_name: "Debbie Downer",
    role: "Engineer",
    location: "Mars",
    joined_on: "June 11th, 2021",
    hourly_rate: 300.0,
    hours_per_week: 35,
    weeks_per_year: 52,
    stock_options_percentage: 90.0
  }
];

// function getData() {
//   return axios.get(API_URL).then((response) => response.data);
// }

function App() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    let mounted = true;
    // getData().then((items) => {
    //   if (mounted && items.length) {
    //     setContractors(items)
    //   }
    // }).catch(_ => {
    //   console.log("API dead right now, get rekt.")
    // });
    if (mounted) {
      setContractors(contractor_data)
    }

    return () => (mounted = false);

    
  }, []);

  return (
    <div className="App">
      <h1>Contractor Directory</h1>
      <div className="container">
        <ContractorDirectory contractors={contractors} />
      </div>
    </div>
  );
  
}

export default App;
