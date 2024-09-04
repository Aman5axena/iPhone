import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section style={{
      width: '100%',          // Equivalent to `w-full`
      height: 'var(--nav-height)', // This is a placeholder; replace with the actual value for `nav-height`
      backgroundColor: '#000000', // Equivalent to `bg-black`
      position: 'relative',   // Equivalent to `relative`
    }}>
      <div style={{
        height: 'calc(83vh - 100px)',       // Adjusted height to ensure the video div does not overlap with button
        width: '100%',           // Equivalent to `w-full`
        display: 'flex',         // Applies Flexbox layout
        flexDirection: 'column', // Equivalent to `flex-col`
        alignItems: 'center',    // Centers items horizontally in Flexbox
        justifyContent: 'center', // Centers items vertically in Flexbox
        position: 'relative',    // Ensures stacking order is managed
        zIndex: 1,              // Ensure it's below the button container
      }}>
        <p id="hero" style={{
          textAlign: 'center',
          marginTop: window.innerWidth > 750 ? '130px' : '30px',
          fontWeight: '600',
          fontSize: '2.5rem',
          color: 'gray',
          opacity: 0,
          position: 'absolute',         // Added for overlapping
          top: '0%',                  // Center vertically
          left: '50%',                 // Center horizontally
          transform: 'translate(-50%, -50%)', // Center exactly
          zIndex: 10,                  // Ensure it's above the video
        }}>iPhone 15 Pro</p>
        <div
          style={{
            width: window.innerWidth >= 720 ? '50%' : '25%',
            // margin: '0 auto',
            marginTop: '160px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 100px)',
            position: 'relative',        // Ensure stacking order is managed
            zIndex: 0,                  // Ensure it's below the text
          }}
        >
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
            style={{
              transform: 'scale(0.5)',
              transformOrigin: 'center',
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        style={{
          display: 'flex',                   // Equivalent to `flex`
          marginTop: '120px',
          flexDirection: 'column',           // Equivalent to `flex-col`
          alignItems: 'center',              // Equivalent to `items-center`
          opacity: 0,                        // Sets opacity to 1 (visible)
          transform: 'translateY(20px)',    // Moves the element down by 20 pixels
          position: 'relative',              // Ensure relative positioning
          zIndex: 10,                        // Ensure it’s above other content
        }}
      >

        <a
          href="#highlights"
          style={{
            display: 'inline-block',                // Equivalent to Tailwind's `inline-block`
            padding: '0.5rem 1.25rem',              // Equivalent to `px-5 py-2`
            borderRadius: '9999px',                 // Equivalent to `rounded-3xl`
            backgroundColor: '#2997FF',             // Default background color
            color: '#ffffff',                       // Default text color
            textDecoration: 'none',                 // Removes underline
            border: '2px solid transparent',        // Default border
            textAlign: 'center',                    // Centers text
            fontWeight: 'bold',                     // Font weight
            cursor: 'pointer',                      // Pointer cursor on hover
            transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease', // Transitions
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'transparent'; // Changes background on hover
            e.target.style.color = '#2997FF';              // Changes text color on hover
            e.target.style.border = '2px solid #2997FF';   // Changes border color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2997FF';   // Reverts background color
            e.target.style.color = '#ffffff';             // Reverts text color
            e.target.style.border = '2px solid transparent'; // Reverts border color
          }}
        >
          Buy
        </a>

        <p style={{
          fontWeight: 400,      // Equivalent to `font-normal`
          padding: '10px',
          fontSize: '1.25rem',  // Equivalent to `text-xl`
          pointerEvents: 'none', // Equivalent to `pointer-events-none`
          color: 'gray',
        }}
        >
          From $199/ month or $999
        </p>
      </div>
    </section>
  )
}

export default Hero
