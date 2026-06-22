// Main projects page with 2 sections
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { analyticsProjects, bmeProjects } from '../data/Projects'

function ProjectCard({ project, variant }) {
  const navigate = useNavigate()
  const isAnalytics = variant === 'analytics'

  // Clicking on analytics projects will redirect to GitHub, clicking on BME projects will navigate internally
  function handleClick() {
    if (project.githubUrl) { window.open(project.githubUrl, '_blank') }
    else { navigate(`/projects/${project.slug}`) }
  }

  return (
    <motion.div onClick={handleClick}
      initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}} viewport={{once:true}}
      style={{ border:'0.5px solid #333', borderRadius:'12px', padding:'28px', backgroundColor:'#222', cursor:'pointer' }}
    >
      {/* blue for analytics, green for biomedical */}
      <span style={{
        fontSize: '12px', letterSpacing: '0.08em',
        padding: '4px 12px', borderRadius: '4px',
        display: 'inline-block', marginBottom: '16px',
        backgroundColor: isAnalytics ? '#0c2044' : '#042c1a',
        color: isAnalytics ? '#7eb8f7' : '#5dcc8a',
        fontWeight: 500,
      }}>
        {isAnalytics ? 'ANALYTICS' : 'BIOMEDICAL'}
      </span>
       {/* project title  */}
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>
        {project.title}
      </h3>
      {/* project subtitle, only if defined in projects.js */}
      {project.subtitle && (
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '12px' }}>
          {project.subtitle}
        </p>
      )}
       {/* project description */}
      <p style={{ fontSize: '15px', color: '#cccccc', lineHeight: 1.75, marginBottom: '20px' }}>
        {project.description}
      </p>
      {/* footer row with tools and GitHub/log link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {project.tools.map(t => (
            <span key={t} style={{ fontSize: '13px', color: '#aaaaaa' }}>{t}</span>
          ))}
        </div>
        <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 500, flexShrink: 0 }}>
          {project.githubUrl ? 'GitHub ↗' : 'log →'}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px' }}>
      {/* Section 1: Coding & Analytics */}
      <div style={{ marginBottom: '80px' }}>
        <p style={{ fontSize: '13px', color: '#888', letterSpacing: '0.08em', marginBottom: '10px' }}>01 /</p>
        <h2 style={{ fontSize: '36px', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>
          Coding & Analytics
        </h2>
        <p style={{ fontSize: '16px', color: '#cccccc', marginBottom: '36px' }}>
        
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {analyticsProjects.map(p => <ProjectCard key={p.id} project={p} variant='analytics' />)}
        </div>
      </div>
       {/* divider line between sections */}
      <div style={{ borderTop: '0.5px solid #333', marginBottom: '80px' }} />
      {/* Section 2: Biomedical Engineering */}
      <div>
        <p style={{ fontSize: '13px', color: '#888', letterSpacing: '0.08em', marginBottom: '10px' }}>02 /</p>
        <h2 style={{ fontSize: '36px', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>
          Biomedical Engineering
        </h2>
        <p style={{ fontSize: '16px', color: '#cccccc', marginBottom: '36px' }}>
         
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {bmeProjects.map(p => <ProjectCard key={p.id} project={p} variant='bme' />)}
        </div>
      </div>

    </main>
  )
}