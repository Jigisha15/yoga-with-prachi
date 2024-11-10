import { useState } from 'react'
import './Register.css'

const Register = () => {
  const [reg, setReg] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setReg((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(reg)
  }

  return (
    <div className="register-container">
      {/* <p>
        {reg.name}, {reg.email}, {reg.contact}, {reg.message}
      </p> */}
      <div className="register">
        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="form-display">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={reg.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-display">
            <label htmlFor="">Email Id</label>
            <input
              type="email"
              name="email"
              value={reg.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-display">
            <label htmlFor="">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={reg.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-display">
            <label htmlFor="">Message</label>
            <textarea
              rows={5}
              name="message"
              value={reg.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register
