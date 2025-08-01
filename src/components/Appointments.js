import {useContext} from 'react'
import {AppointmentContext} from '../context/AppointmentContext'
import '../styles/Appointments.css'

function Appointments() {
  const {appointments} = useContext(AppointmentContext)

  return (
    <div className="appointments-page">
      <h2>🗓️ Your Booked Appointments</h2>
      {appointments.length === 0 ? (
        <p className="empty-message">
          You have not booked any appointments yet.
        </p>
      ) : (
        <div className="appointment-list">
          {appointments.map(appt => (
            <div className="appointment-card">
              <div className="doctor-info">
                <img
                  src={appt.image}
                  alt={appt.doctorName}
                  className="doctor-avatar"
                />
                <div>
                  <h3>{appt.doctorName}</h3>
                  <p className="specialization">{appt.specialization}</p>
                </div>
              </div>
              <p>
                <strong>Appointment Date & Time:</strong>{' '}
                {new Date(appt.datetime).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Appointments
