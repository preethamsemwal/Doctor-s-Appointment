import {useLocation, Link} from 'react-router-dom'
import '../styles/Confirmation.css'

function Confirmation() {
  const {state} = useLocation()
  return (
    <div className="confirmation">
      <h2>Appointment Confirmed</h2>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Date & Time: {state.datetime}</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Confirmation
