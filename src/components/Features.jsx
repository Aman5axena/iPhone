import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        animateWithGsap('#features_title', { y: 0, opacity: 1 })
        animateWithGsap(
            '.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrub: 5.5 }
        );
        animateWithGsap(
            '.g_text',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
        )
    }, []);

    return (
        <section
            style={{
                height: '100%',                          // Corresponds to h-full
                padding: '2rem',                         // Example padding (common-padding)
                backgroundColor: '#0F0F0F',              // Replaces bg-zinc with the dark zinc black color
                position: 'relative',                    // Corresponds to relative
                overflow: 'hidden'                       // Corresponds to overflow-hidden
            }}
        >
            <div className="screen-max-wdith">
                <div
                    style={{
                        marginBottom: '3rem',   // Corresponds to mb-12 (12 * 0.25rem = 3rem)
                        width: '100%'           // Corresponds to w-full
                    }}
                >
                    <h1
                        id="features_title"
                        style={{
                            color: '#6B7280',             // Corresponds to text-gray
                            fontSize: '4rem',         // Base size corresponding to text-3xl
                            paddingLeft: '1rem',    // Corresponds to mb-24 (24 * 0.25rem = 6rem)
                            lineHeight: '2.25rem',        // Line height for text-3xl
                            // marginBottom: '1.25rem',      // Base margin-bottom corresponding to mb-5
                            fontWeight: 500,              // Corresponds to font-medium
                            // opacity: 0,                   // Corresponds to opacity-0
                            transform: 'translateY(5rem)',// Corresponds to translate-y-20 (20 * 0.25rem = 5rem)

                            // Responsive styles for larger screens
                            '@media (min-width: 768px)': { // md:text-5xl
                                fontSize: '3rem',           // Corresponds to text-5xl
                                lineHeight: '1',            // Adjusted for text-5xl
                            },
                            '@media (min-width: 1024px)': { // lg:text-6xl and lg:mb-0
                                fontSize: '3.75rem',        // Corresponds to text-6xl
                                lineHeight: '1',            // Adjusted for text-6xl
                                marginBottom: 0,            // Corresponds to lg:mb-0
                            }
                        }}
                    >
                        Explore the full story.
                    </h1>
                </div>

                <div
                    style={{
                        display: 'flex',           // Corresponds to flex
                        flexDirection: 'column',   // Corresponds to flex-col
                        justifyContent: 'center',  // Corresponds to justify-center
                        alignItems: 'left',      // Corresponds to items-center
                        overflow: 'hidden'         // Corresponds to overflow-hidden
                    }}
                >
                    <div
                        style={{
                            marginTop: '8rem',         // Corresponds to mt-32 (32 * 0.25rem = 8rem)
                            marginBottom: '6rem',      // Corresponds to mb-24 (24 * 0.25rem = 6rem)
                            paddingLeft: '1rem',        // Corresponds to pl-24 (24 * 0.25rem = 6rem)
                        }}
                    >
                        <h2

                            id="features_title"
                            style={{
                                fontSize: '3.5rem',        // Corresponds to text-5xl
                                fontWeight: 300,         // Corresponds to font-semibold

                                // Responsive styles
                                '@media (min-width: 1024px)': { // lg:text-7xl
                                    fontSize: '4.5rem',    // Corresponds to text-7xl
                                }
                            }}
                        >
                            iPhone.
                        </h2>
                        <h2
                            style={{
                                fontSize: '3rem',        // Corresponds to text-5xl
                                fontWeight: 600,         // Corresponds to font-semibold

                                // Responsive styles
                                '@media (min-width: 1024px)': { // lg:text-7xl
                                    fontSize: '4.5rem',    // Corresponds to text-7xl
                                }
                            }}
                        >
                            Forged in titanium.
                        </h2>
                    </div>

                    <div
                        style={{
                            display: 'flex',              // Corresponds to flex-center (assuming it's a utility for display: flex)
                            justifyContent: 'center',     // Assuming flex-center aligns items in the center along the main axis
                            alignItems: 'center',         // Assuming flex-center aligns items in the center along the cross axis
                            flexDirection: 'column',      // Corresponds to flex-col
                            paddingLeft: '0',             // Default padding for non-sm screens
                            paddingRight: '0',            // Default padding for non-sm screens

                            // Responsive styles
                            '@media (min-width: 640px)': { // sm:px-10
                                paddingLeft: '2.5rem',       // Corresponds to px-10 (10 * 0.25rem = 2.5rem)
                                paddingRight: '2.5rem',      // Corresponds to px-10
                            }
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',         // Corresponds to relative
                                height: '50vh',               // Corresponds to h-[50vh]
                                width: '100%',                // Corresponds to w-full
                                display: 'flex',              // Corresponds to flex
                                alignItems: 'center'          // Corresponds to items-center
                            }}
                        >
                            <video
                                playsInline
                                id="exploreVideo"
                                style={{
                                    width: '100%',              // Corresponds to w-full
                                    height: '100%',             // Corresponds to h-full
                                    objectFit: 'cover',         // Corresponds to object-cover
                                    objectPosition: 'center'    // Corresponds to object-center
                                }}
                                preload="none"
                                muted
                                autoPlay
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div
                            style={{
                                display: 'flex',                // Use flexbox to align children horizontally
                                justifyContent: 'center',       // Center images horizontally
                                alignItems: 'center',           // Center images vertically
                                width: '100%',                  // Full width of the container
                                flexWrap: 'wrap',               // Allow wrapping when space is insufficient
                            }}
                        >
                            <img
                                src={explore1Img}
                                alt="Image 1"
                                className="image-hover g_grow"
                                style={{
                                    height: '500px',             // Set a fixed height for both images
                                    width: '500px',               // Maintain aspect ratio
                                    margin: '0 10px'             // Adjust margin
                                }}
                            />
                            <img
                                src={explore2Img}
                                alt="Image 2"
                                className="image-hover g_grow"
                                style={{
                                    height: '500px',             // Set a fixed height for both images
                                    width: '500px',               // Maintain aspect ratio
                                    margin: '0 10px'             // Adjust margin
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',                // Use flexbox to align children vertically
                                flexDirection: 'column',        // Stack children vertically
                                alignItems: 'center',           // Center text horizontally
                                gap: '1rem',                    // Space between text elements
                                width: '100%',                  // Full width of the container
                            }}
                        >
                            <p
                                className="textR g_text"
                            >
                                iPhone 15 Pro is {' '}
                                <span>
                                    the first iPhone to feature an aerospace-grade titanium design
                                </span>,
                                using the same alloy that spacecrafts use for missions to Mars.
                            </p>
                            <p
                                className="textR2 g_text"
                            >
                                Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                <span>
                                    lightest Pro models ever.
                                </span>
                                You'll notice the difference the moment you pick one up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features