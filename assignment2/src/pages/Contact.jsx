import {useState} from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const validateForm = () => {
    const newErrors = {};

    if(!formData.name.trim()) {
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if(validateForm()) {
      alert('Message submitted successfully')
      setFormData({name: '', email: '', message: ''})

      setErrors({})
    }
  }
  return (
    <section id="contact" className="sec-padding">
      <h2 className="sec-title">Get In Touch</h2>
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

        </div>

        <button 
          type="submit" 
          className="btn-send" 
          disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}>Send Message</button>
      </form>
    </section>
  )
}

export default Contact;