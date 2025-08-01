import {Routes, Route} from 'react-router-dom'
import {AppointmentProvider} from './context/AppointmentContext'
import Header from './components/Header'
import DoctorList from './components/DoctorList'
import DoctorProfile from './components/DoctorProfile'
import BookAppointment from './components/BookAppointment'
import Confirmation from './components/Confirmation'
import Appointments from './components/Appointments'

function App() {
  return (
    <AppointmentProvider>
      <Header />
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/appointment" element={<Appointments />} />
      </Routes>
    </AppointmentProvider>
  )
}

export default App
