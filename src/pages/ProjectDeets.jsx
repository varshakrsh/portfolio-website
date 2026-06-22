// log page designed for biomedical engineering projects.
// reads the slug from the URL and matches it to the data in bmeProjects

import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { bmeProjects } from '../data/Projects'
import Carousel from '../components/carousel'

export default function ProjectDeets() {
  // useParams reads the slug from the URL
  const { slug } = useParams()
  // finds the project whose slug matches the URL
  const project   = bmeProjects.find(p => p.slug === slug)
  const ref        = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from('.log', { opacity:0, y:28, duration:0.6, stagger:0.1, ease:'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [slug])
 // if the slug does not match, display a message and a link back to the projects page
  if (!project) return (
    <div style={{ padding:'80px 32px', color:'#aaaaaa' }}>
      <p>Project not found.</p>
      <Link to='/projects' style={{ color:'#ffffff' }}>← Back to projects</Link>
    </div>
  )

  return (
    <main ref={ref} style={{ maxWidth:'680px', margin:'0 auto', padding:'80px 32px' }}>
     {/* back link */}
      <Link className='log' to='/projects' style={{ display:'inline-block', marginBottom:'40px', fontSize:'15px', color:'#aaaaaa', textDecoration:'none' }}>
        ← Back to projects
      </Link>
      {/* biomedical projects with green tint to distinguish from other projects */}
      <div className='log'>
        <span style={{ fontSize:'12px', letterSpacing:'0.08em', padding:'4px 12px', borderRadius:'4px', display:'inline-block', marginBottom:'20px', backgroundColor:'#042c1a', color:'#5dcc8a', fontWeight:500 }}>
          BIOMEDICAL
        </span>
      </div>
      {/* project title and subtitle */}
      <h1 className='log' style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:300, color:'#ffffff', lineHeight:1.1, marginBottom:'8px' }}>
        {project.title}
      </h1>
      <p className='log' style={{ fontSize:'14px', color:'#aaaaaa', marginBottom:'28px' }}>
        {project.subtitle}
      </p>
      {/* project tools */}
      <div className='log' style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginBottom:'52px' }}>
        {project.tools.map(t => (
          <span key={t} style={{ fontSize:'14px', padding:'5px 16px', border:'0.5px solid #444', borderRadius:'99px', color:'#cccccc' }}>{t}</span>
        ))}
      </div>
      {/* project live site link, only if defined in projects.js */}
      {project.liveUrl && (
  <div className='log' style={{ marginBottom:'32px', display:'flex', gap:'12px' }}>
    <a href={project.liveUrl} target='_blank' rel='noreferrer' style={{
      display: 'inline-block',
      fontSize: '15px',
      padding: '11px 24px',
      backgroundColor: '#ffffff',
      color: '#111',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 600,
    }}>
      View site ↗
    </a>
  </div>
)}
{/* images carousel, only if defined in projects.js and has atleast one image */}
{project.images && project.images.length > 0 && (
  <div className='log'>
    <Carousel images={project.images} />
  </div>
)}

      {/* project overview */}
      <div className='log' style={{ marginBottom:'48px' }}>
        <p style={{ fontSize:'16px', color:'#cccccc', lineHeight:1.85 }}>{project.overview}</p>
      </div>
      {/* project sections */}
      {project.sections.map((section, i) => (
        <div key={i} className='log' style={{ marginBottom:'44px' }}>
          <p style={{ fontSize:'12px', color:'#aaaaaa', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>
            {section.title}
          </p>
          {/* left accent line */}
          <div style={{ borderLeft:'2px solid #444', paddingLeft:'22px' }}>
            {/* section content and items */}
            {section.content && (
              <p style={{ fontSize:'16px', color:'#cccccc', lineHeight:1.85 }}>{section.content}</p>
            )}
            {section.items && (
              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'10px' }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ display:'flex', gap:'14px', fontSize:'16px', color:'#cccccc' }}>
                    <span style={{ color:'#ffffff', flexShrink:0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

    </main>
  )
}