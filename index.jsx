const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attendees, setAttendees] = useState("")
  const [dietary, setDietary] = useState("")
  const [checked, setChecked] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleBtn = (e) => {
    e.preventDefault();

    if(!checkEmail(email) || !email.trim()){
      alert("Valid email is required!")
      return
    }
    setSubmitted(true)
  }

  const checkEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <>
      <form onSubmit={handleBtn}>
        <label>
          Name: 
          <br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          required/>
          <br/>
        </label>
        
        <label>
          Email:
          <br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br/>
        </label>
        
        <label>
          Number of Attendees:
          <br/>
          <input type="number" value={attendees} min="1" onChange={(e) => setAttendees(e.target.value)} required />
          <br/>
        </label>
        
        <label>
          Dietary Preferences: 
          <br/>
          <input type="text"  value={dietary} placeholder="Dietary Preferences: (Optional)" onChange={(e) => setDietary(e.target.value)}/>
          <br/>
        </label>
        
        <label>
          Bringing additional guests?
          <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
          <br/>
        </label>

        <button type="submit">Submit RSVP</button>
      </form> 

      {submitted && 
        (<div>
          <h1>RSVP Submitted!</h1>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>Dietary preferences: {dietary ? dietary : "None"}</p>
          <p>Bringing additional guests: {checked ? "Yes " : "No"}</p>
        </div>)
      }
    </>
  )
}
