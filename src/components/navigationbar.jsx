// Navigation bar that appears on top of every page, allowing users to switch between pages
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  // useLocation gives us the current URL path
  const location = useLocation()
  // returns true if the given path matches the current URL path, used to highlight the active page in the navigation bar
  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: '#1a1a1a',
      borderBottom: '0.5px solid #333',
    }}>
      {/* inner container */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '18px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        {/* clicking on the name takes you back to the home page */}
        <Link to='/' style={{
          fontWeight: 600, fontSize: '18px',
          color: '#ffffff', textDecoration: 'none',
        }}>
          Varsha
        </Link>
        {/* navigation links on the right */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
  { label: 'Home',     path: '/'         },
  { label: 'About',    path: '/about'    },
  { label: 'Projects', path: '/projects' },
].map(({ label, path }) => (
  <Link key={path} to={path} style={{
    fontSize: '15px', textDecoration: 'none',
    // active page is highlighted with white and bold text, inactive pages are grey
    color: isActive(path) ? '#ffffff' : '#aaaaaa',
    fontWeight: isActive(path) ? 600 : 400,
    transition: 'color 0.2s',
  }}>
    {label}
  </Link>
))}
        </div>
      </div>
    </nav>
  )
}