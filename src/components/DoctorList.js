import {useState} from 'react'
import DoctorCard from './DoctorCard'
import doctors from '../data/doctors.json'
import '../styles/DoctorList.css'

function DoctorList() {
  const [search, setSearch] = useState('')

  const filtered = doctors.filter(
    doc =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="doctor-list">
      <input
        type="text"
        className="search"
        placeholder="Search by name or specialization"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  )
}

export default DoctorList
