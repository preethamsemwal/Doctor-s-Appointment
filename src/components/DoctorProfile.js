import {useParams, Link} from 'react-router-dom'
import doctors from '../data/doctors.json'
import '../styles/DoctorProfile.css'

function DoctorProfile() {
  const {id} = useParams()
  const doctor = doctors.find(d => d.id === id)

  return (
    <div className="profile">
      <img src={doctor.image} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Status: {doctor.status}</p>
      <h4>Schedule:</h4>
      <ul>
        {doctor.schedule.length ? (
          doctor.schedule.map(s => <li key={s}>{s}</li>)
        ) : (
          <li>No slots</li>
        )}
      </ul>
      <Link to={`/book/${doctor.id}`} className="book-btn">
        Book Appointment
      </Link>
    </div>
  )
}

export default DoctorProfile
