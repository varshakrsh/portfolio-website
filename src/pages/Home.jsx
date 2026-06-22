// main landing page that displays the hero section and 2 preview cards that link to the projects section
import Hero from '../components/hero'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Hero />
      {/* horizontal line dividing the hero section and the preview cards */}
      <div style={{ borderTop: '0.5px solid #333', maxWidth: '1100px', margin: '0 auto' }} />
      {/* preview cards section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px' }}>
        {/* intro text */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
          <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', marginBottom: '12px' }}>
            // what i've built
          </p>
          <h2 style={{ fontSize: '38px', fontWeight: 300, color: '#ffffff', marginBottom: '14px' }}>
            My works:
          </h2>
          <p style={{ fontSize: '17px', color: '#cccccc', lineHeight: 1.8, maxWidth: '440px', marginBottom: '48px' }}>
            I have worked on data analytics case studies that tell stories. I am also into vibe coding which helped me build this website.
            And you can also see my biomedical engineering projects that built my technical and analytical foundation.
          </p>
        </motion.div>
        {/* preview cards side by side using CSS grid*/}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* card 1 - coding and analytics */}
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}} viewport={{once:true}}>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div style={{ border: '0.5px solid #333', borderRadius: '12px', padding: '32px', backgroundColor: '#222', cursor: 'pointer' }}>
                <p style={{ fontSize: '12px', color: '#888', letterSpacing: '0.08em', marginBottom: '12px' }}>01 /</p>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                  Coding & Analytics
                </h3>
                <p style={{ fontSize: '15px', color: '#cccccc', lineHeight: 1.75, marginBottom: '20px' }}>
                  Case studies using R, SQL, Python, and Tableau. Click to view on GitHub.
                </p>
                <span style={{ fontSize: '14px', color: '#aaaaaa' }}>View projects →</span>
              </div>
            </Link>
          </motion.div>
           {/* card 2 - biomedical engineering */}
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.2}} viewport={{once:true}}>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div style={{ border: '0.5px solid #333', borderRadius: '12px', padding: '32px', backgroundColor: '#222', cursor: 'pointer' }}>
                <p style={{ fontSize: '12px', color: '#888', letterSpacing: '0.08em', marginBottom: '12px' }}>02 /</p>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                  Biomedical Engineering
                </h3>
                <p style={{ fontSize: '15px', color: '#cccccc', lineHeight: 1.75, marginBottom: '20px' }}>
                  Robots, sensors, instrumentation, biomaterials. Click for the full log.
                </p>
                <span style={{ fontSize: '14px', color: '#aaaaaa' }}>View projects →</span>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  )
}