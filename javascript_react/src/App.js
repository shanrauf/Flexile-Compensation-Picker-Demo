import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ActiveContractorContext } from "./utils/ActiveContractorContext";
import "./App.css";
import ContractorDirectory from "./components/contractor_directory/contractor_directory";
import { contractor_data } from "./utils/data";
import { useEffect, useState } from "react";

function App() {
  // eslint-disable-next-line
  const [activeContractorInfo, setActiveContractorInfo] = useState(null)

  // Disable scrolling of the table (mainly for mobile) when popup enabled
  useEffect(() => {
    if (activeContractorInfo?.contractor) document.body.classList.add('scrolling-disabled')
    else document.body.classList.remove('scrolling-disabled')
  }, [activeContractorInfo])

  return (
    <ActiveContractorContext.Provider value={{activeContractorInfo, setActiveContractorInfo}}>
      <div className="App">
        <h1>Flexile Contractor Directory</h1>
        <div className="container">
          <ContractorDirectory contractors={contractor_data} />
        </div>
        <div>
          <h2>
            Github:{" "}
            <a
              className="github-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shanrauf/Flexile-Compensation-Picker-Demo"
            >
              https://github.com/shanrauf/Flexile-Compensation-Picker-Demo
            </a>
          </h2>
        </div>
        <ToastContainer />
      </div>
    </ActiveContractorContext.Provider>
  );
}

export default App;
