// Home page that shows introcution, education, skills and contact info
// With framer motion, each section fades in as the user scrolls 
import { motion } from 'framer-motion'

// education timeline
const education = [
  { year: '2026–2027', degree: 'M.Sc Business Analytics (MSBA)', institution: 'National University of Singapore' },
  { year: '2022–2026', degree: 'B.Tech Biomedical Engineering',   institution: 'SRM Institute of Science and Technology' },
]

// skills categorised into groups
const skillGroups = [
  { category: 'Data Analytics', skills: ['Python', 'R', 'SQL', 'Tableau', 'Google Sheets'] },
  { category: 'Biomedical',       skills: ['Arduino','Biomedical Instrumentation', 'Signal Processing', 'Biomaterials'] },
]

const fade = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, transition:{duration:0.6}, viewport:{once:true} }

export default function About() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 32px' }}>
      {/* Header section featuring name */}
      <motion.div {...fade}>
        <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', marginBottom: '16px' }}>// about me</p>
        <h1 style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, color: '#ffffff', marginBottom: '56px', lineHeight: 1.1 }}>
          Varsha<br /><span style={{ fontWeight: 300 }}>Krishnamoorthy.</span>
        </h1>
      </motion.div>
      {/* Background section with a vertical line on the left of the text*/}
      <motion.div {...fade} style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Background</p>
        <div style={{ borderLeft: '2px solid #444', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: 1.85 }}>I am Varsha Krishnamoorthy. I have completed by B.tech in biomedical engineering at SRMIST. During my academic journey, I worked on projects across various domains like signal processing, instrumentation, and biomaterials. While I did enjoy building prototypes, the part that I was drawn to most was the results section, where I could interpret what the data meant, extract meaningful insights, and communicate them.</p>
          <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: 1.85 }}>After taking the Data Analytics course offered by Google, I developed a love for the art of understanding and interpreting data and knitting a compelling story to communicate findings to stakeholders, ultimately driving business decisions.</p>
          <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: 1.85 }}>I am now joining the M.Sc Business Analytics programme at NUS, where I aim to refine my analytical and business skills to grow into a professional who can bridge the gap between technical insights and business decision and create both societal and business value.</p>
        </div>
      </motion.div>
        {/* Education section in timeline style with year on the left and details on the right */}
      <motion.div {...fade} style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>Education</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {education.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: '24px' }}>
              <div style={{ fontSize: '13px', color: '#aaaaaa', width: '110px', flexShrink: 0, paddingTop: '3px' }}>{e.year}</div>
              <div>
                <p style={{ fontSize: '17px', fontWeight: 500, color: '#ffffff', marginBottom: '4px' }}>{e.degree}</p>
                <p style={{ fontSize: '15px', color: '#cccccc', marginBottom: '4px' }}>{e.institution}</p>
                <span style={{ fontSize: '13px', color: '#aaaaaa' }}>{e.note}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Skills section with categories and skills in each category */}
      <motion.div {...fade} style={{ marginBottom: '56px' }}>
        <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>Skills</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {skillGroups.map((g, i) => (
            <div key={i}>
              <p style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff', marginBottom: '14px' }}>{g.category}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {g.skills.map(s => (
                  <span key={s} style={{ fontSize: '14px', padding: '5px 16px', border: '0.5px solid #444', borderRadius: '99px', color: '#cccccc' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
        {/* Contact section with email link */}
      <motion.div {...fade}>
        <p style={{ fontSize: '13px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Get in touch</p>
        <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: 1.8, marginBottom: '28px' }}>
          I am open to internship and full-time opportunities in data analytics and business intelligence roles.
        </p>
        <a href='mailto:varshakrsh@gmail.com' style={{
          display: 'inline-block', fontSize: '15px',
          padding: '13px 28px', backgroundColor: '#ffffff',
          color: '#111', borderRadius: '8px',
          textDecoration: 'none', fontWeight: 600,
        }}>
          varshakrsh@gmail.com
        </a>
      </motion.div>

    </main>
  )
}