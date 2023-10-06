import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import ContractorDirectory from "./components/contractor_directory/contractor_directory";
import { contractor_data } from "./utils/data";

function App() {
  return (
    <div className="App">
      <h1>Flexile Contractor Directory</h1>
      <div className="container">
        <ContractorDirectory contractors={contractor_data} />
      </div>
      <div>
        <h2>Github: <a target="_blank" rel="noreferrer" href="https://github.com/shanrauf/Flexile-Compensation-Picker-Demo" >https://github.com/shanrauf/Flexile-Compensation-Picker-Demo</a></h2>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
