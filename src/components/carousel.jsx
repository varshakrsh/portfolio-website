import { useState } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div style={{ marginBottom: '52px' }}>

      {/* Image container */}
      <div style={{ position: 'relative' }}>

        {/* Main image */}
        <img
          src={images[current].src}
          alt={images[current].caption}
          style={{
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '10px',
  border: '0.5px solid #333',
  display: 'block',
  backgroundColor: '#1a1a1a',
}}
        />

        {/* Left arrow is displayed only there's more than 1 image */}
        {images.length > 1 && (
          <button onClick={prev} style={{
            position: 'absolute', left: '14px', top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#ffffff', border: 'none',
            borderRadius: '50%', width: '40px', height: '40px',
            fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            ‹
          </button>
        )}

        {/* Right arrow */}
        {images.length > 1 && (
          <button onClick={next} style={{
            position: 'absolute', right: '14px', top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#ffffff', border: 'none',
            borderRadius: '50%', width: '40px', height: '40px',
            fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            ›
          </button>
        )}

        {/* Image counter displayed on top right */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#cccccc', fontSize: '12px',
            padding: '4px 10px', borderRadius: '99px',
          }}>
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Caption for the images */}
      <p style={{
        fontSize: '14px', color: '#aaaaaa',
        marginTop: '12px', lineHeight: 1.6,
        textAlign: 'center', fontStyle: 'italic',
      }}>
        {images[current].caption}
      </p>

      {/* Dot indicators for the images*/}
      {images.length > 1 && (
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '8px', marginTop: '12px',
        }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '20px' : '8px',
              height: '8px',
              borderRadius: '99px',
              backgroundColor: i === current ? '#ffffff' : '#444',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.2s',
              padding: 0,
            }} />
          ))}
        </div>
      )}

    </div>
  )
}