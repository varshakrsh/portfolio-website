// intro section on the homepage
// makes use of gsap for animations and react-router-dom for navigation

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'


export default function Hero() {
  // ref attached to the section so that gsap can target the elements inside it
  const ref = useRef(null)

  useEffect(() => {
  // gsap context allows us to target elements inside the ref without affecting other parts of the page
    const ctx = gsap.context(() => {
      gsap.from('.hi', {
        opacity: 0, y: 40, duration: 0.8,
        stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    // cleanup removes the gsap context when the component unmounts
    return () => ctx.revert()
  }, [])

  return (
    // outer section
    <section ref={ref} style={{
      maxWidth: '1100px', margin: '0 auto',
      padding: '80px 32px 60px',
    }}>
      <p className='hi' style={{
        fontSize: '14px', color: '#aaaaaa',
        letterSpacing: '0.06em', marginBottom: '20px',
      }}> 
      </p>

      <h1 className='hi' style={{
        fontSize: 'clamp(44px, 6vw, 76px)',
        fontWeight: 300, lineHeight: 1.05,
        color: '#ffffff', marginBottom: '20px',
        letterSpacing: '-0.02em',
      }}>
        Hi, I'm<br />
      {/* name appears bolder than rest of the text */}
  <span style={{ fontWeight: 700 }}>Varsha.</span>
      </h1>
{/* brief description about yourself */}
      <p className='hi' style={{
        fontSize: '18px', color: '#cccccc',
        lineHeight: 1.8, maxWidth: '500px', marginBottom: '32px',
      }}>
        Biomedical engineer transitioning into data analytics.
        On a journey to master the art of turning messy data into powerful stories.
      </p>

      <div className='hi' style={{ display: 'flex', gap: '12px' }}>
        {/* primary button for projects page */}
        <Link to='/projects' style={{
          fontSize: '15px', padding: '13px 28px',
          backgroundColor: '#ffffff', color: '#111',
          borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
        }}>
          My projects
        </Link>
        {/* secondary button for about page */}
        <Link to='/about' style={{
          fontSize: '15px', padding: '13px 28px',
          backgroundColor: 'transparent', color: '#cccccc',
          borderRadius: '8px', textDecoration: 'none',
          border: '0.5px solid #444',
        }}>
          About me
        </Link>
      </div>
    </section>
  )
}