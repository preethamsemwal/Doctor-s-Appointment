import {useState, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {AppointmentContext} from '../context/AppointmentContext'
import '../styles/BookAppointment.css'

function BookAppointment() {
  const {id} = useParams()
  const navigate = useNavigate()
  const {addAppointment} = useContext(AppointmentContext)

  const [formData, setFormData] = useState({name: '', email: '', datetime: ''})

  const handleChange = e => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const appointment = {...formData, doctorId: id}
    addAppointment(appointment)
    navigate('/confirmation', {state: appointment})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        onChange={handleChange}
      />
      <input
        name="datetime"
        type="datetime-local"
        required
        onChange={handleChange}
      />
      <button type="submit">Confirm</button>
    </form>
  )
}

export default BookAppointment
