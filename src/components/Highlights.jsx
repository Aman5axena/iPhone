import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 2, stagger: 1 })
  }, [])

  return (
    <section
      id="highlights"
      style={{
        width: '100vw',             // Equivalent to `w-screen`
        overflow: 'hidden',         // Equivalent to `overflow-hidden`
        height: '100%',             // Equivalent to `h-full`
        padding: 'var(--common-padding)', // Equivalent to `common-padding` (assuming this is a custom CSS variable)
        backgroundColor: '#0f0f0f',  // Equivalent to `bg-zinc` (assuming it’s a shade of gray, replace with exact color code)
      }}
    >
      <div className="screen-max-width">
        <div
          style={{
            marginBottom: '3rem',      // Equivalent to `mb-12`
            width: '100%',             // Equivalent to `w-full`
            display: 'flex',           // Equivalent to `md:flex`
            alignItems: 'flex-end',    // Equivalent to `items-end`
            justifyContent: 'space-between', // Equivalent to `justify-between`
          }}
        >
          <h1
            id="title"
            style={{
              color: '#6B7280',               // Equivalent to `text-gray`
              fontSize: window.innerWidth >= 1024 ? '3rem' : window.innerWidth >= 768 ? '3rem' : '1.875rem', // `lg:text-6xl`, `md:text-5xl`, `text-3xl`
              marginTop: '50px',
              marginBottom: window.innerWidth >= 1024 ? '0' : '1.25rem', // `lg:mb-0`, `mb-5`
              fontWeight: 500,                // Equivalent to `font-medium`
              opacity: 0,                     // Equivalent to `opacity-0`
              transform: 'translateY(5rem)',  // Equivalent to `translate-y-20`
              transition: 'opacity 0.3s ease, transform 0.3s ease', // Optional: Add transition for smooth appearance
            }}
          >
            Get the highlights.
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: '1.25rem',
            }}
          >
            <p
              className="link" // Add className here
              style={{
                color: '#2997FF',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.25rem',
                opacity: 1,
                transform: 'translateY(20px)',
                transition: 'text-decoration 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = 'none';
              }}
            >
              Watch the film
              <img
                src={watchImg}
                alt="watch"
                style={{
                  marginLeft: '0.5rem',
                }}
              />
            </p>

            <p
              className="link" // Add className here
              style={{
                color: '#2997FF',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.25rem',
                opacity: 1,
                transform: 'translateY(20px)',
                transition: 'text-decoration 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = 'none';
              }}
            >
              Watch the event
              <img
                src={rightImg}
                alt="right"
                style={{
                  marginLeft: '0.5rem',
                }}
              />
            </p>
          </div>

        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights