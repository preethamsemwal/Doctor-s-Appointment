import {Link} from 'react-router-dom'
import '../styles/DoctorCard.css'

function DoctorCard({doctor}) {
  return (
    <div className="card">
      <img src={doctor.image} alt={doctor.name} />
      <div>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p>Status: {doctor.status}</p>
      </div>
      <Link to={`/doctor/${doctor.id}`} className="view-btn">
        View Profile
      </Link>
    </div>
  )
}

export default DoctorCard
