// Appears at the bottom of every page, dispalying links and contact information

export default function Footer() {
  return (
    // outer footer element
    <footer style={{ borderTop: '0.5px solid #333', marginTop: '80px' }}>
      {/* inner container */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '28px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        {/* Left side with name */}
        <p style={{ fontSize: '15px', color: '#aaaaaa' }}>Varsha Krishnamoorthy</p>
        {/* Right side with links */}
        <div style={{ display: 'flex', gap: '28px' }}>
          {[
            { label: 'Email',    href: 'mailto:varshakrsh@gmail.com' },
            { label: 'GitHub',   href: 'https://github.com/varshakrsh' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/varsha-krsh/' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel='noreferrer'
              style={{ fontSize: '15px', color: '#aaaaaa', textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}