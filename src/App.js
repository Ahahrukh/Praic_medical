import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Appointment from './components/Appointment';
import '../src/styles/base.scss'
import { BillingPanel } from './components/Billings/BillingPanel';
import PrescriptionPanel from './components/prescription/prescriptionComponents/PrescriptionPanel';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/billing' element={<BillingPanel/>} />
        <Route path='/prescription' element={<PrescriptionPanel/>} />
      </Routes>
    </div>
  );
}

export default App;
