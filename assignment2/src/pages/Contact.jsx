function Contact() {
  return (
    <section id="contact" class="sec-padding">
      <h2 class="sec-title">Get In Touch</h2>
      <form class="form-card" action="#" method="post">
        <div class="form-row">
          <label for="usr-name">Your Name</label>
          <input type="text" id="usr-name" name="name" placeholder="Enter your name" required />
        </div>

        <div class="form-row">
          <label for="usr-email">Email Address</label>
          <input type="email" id="usr-email" name="email" placeholder="xxxx@gmail.com" required />
        </div>

        <div class="form-row">
          <label for="usr-msg">Message</label>
          <textarea id="usr-msg" name="message" rows="4" placeholder="Your message..." required></textarea>
        </div>

        <button type="submit" class="btn-send">Send Message</button>
      </form>
    </section>
  )
}

export default Contact;