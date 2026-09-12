import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="sec-padding">
      <h2 className="sec-title">404 - Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        ← Back to Home
      </Link>
    </section>
  )
}

export default NotFound