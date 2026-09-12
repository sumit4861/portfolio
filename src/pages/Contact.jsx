import {useState} from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  })

  const [errors, setErrors] = useState({})
  const [serverMessage, setServerMessage] = useState('')
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const validateForm = () => {
    const newErrors = {};

    if(formData.name.trim() === '') {
      newErrors.name = 'Name is required'
    }

    if(!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if(!formData.email.trim()) {
      newErrors.email = 'Email is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setServerMessage('')
    setServerError('')

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setServerMessage(data.message)
      setFormData({
        name: '', email: '', message: ''
      })

      setErrors({})
    } catch (err) {
      console.error(error)
      setServerError(error.message)
    }
  }
  return (
    <section id="contact" className="sec-padding">
      <h2 className="sec-title">Get In Touch</h2>
      {serverMessage && (
        <p>{serverMessage}</p>
      )}

      {serverError && (
        <p>{serverError}</p>
      )}

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="usr-name">Your Name</label>
          <input 
            type="text" 
            id="usr-name" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="usr-email">Email Address</label>
          <input 
            type="email" 
            id="usr-email" 
            name="email" 
            placeholder="xxxx@gmail.com" 
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="usr-msg">Message</label>
          <textarea
            id="usr-msg"
            name="message"
            rows="4"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="errors">{errors.message}</p>
          )}

        </div>

        <button 
          type="submit" 
          className="btn-send" 
        >Send Message</button>
      </form>
    </section>
  )
}

export default Contact;