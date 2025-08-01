import {useContext} from 'react'
import {AppointmentContext} from '../context/AppointmentContext'
import '../styles/Appointments.css'

function Appointments() {
  const {appointments} = useContext(AppointmentContext)

  return (
    <div className="appointments">
      <h2>Booked Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul>
          {appointments.map(appt => (
            <li className="appointment-card">
              <p>
                <strong>Name:</strong> {appt.name}
              </p>
              <p>
                <strong>Email:</strong> {appt.email}
              </p>
              <p>
                <strong>Date & Time:</strong> {appt.datetime}
              </p>
              <p>
                <strong>Doctor ID:</strong> {appt.doctorId}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Appointments
