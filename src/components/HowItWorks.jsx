import React, { useRef, useState, useEffect } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
    const videoRef = useRef();
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 540);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 740);
    const [isTabletScreen, setIsTabletScreen] = useState(window.innerWidth < 1100);

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        });

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 540);
            setIsMobile(window.innerWidth < 720);
            setIsNarrowScreen(window.innerWidth < 740);
            setIsTabletScreen(window.innerWidth < 1100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div
                    id="chip"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: '5rem',
                        marginBottom: '5rem'
                    }}
                >
                    <img src={chipImg} alt="chip" />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        paddingTop: '5px',
                        marginTop: '40px',
                        marginBottom: '20px'
                    }}
                >
                    <h2
                        style={{
                            fontSize: isMobile ? '2.25rem' : '4.5rem', // Responsive font size
                            fontWeight: '600',
                            textAlign: 'center',
                            margin: '0'
                        }}
                    >
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>

                    <p
                        style={{
                            color: '#6b7280',
                            fontWeight: '600',
                            fontSize: isMobile ? '1.25rem' : '1.5rem', // Responsive font size
                            textAlign: 'center',
                            paddingTop: '2.5rem',
                            paddingBottom: '2.5rem'
                        }}
                    >
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>

                <div
                    style={{
                        marginTop: '2.5rem',
                        marginBottom: '3.5rem'
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={frameImg}
                                alt="frame"
                                style={{
                                    width: isMobile ? '82%' : '100%',
                                    height: 'auto',
                                    backgroundColor: 'transparent',
                                    position: 'relative',
                                    zIndex: 10,
                                    marginRight: isTabletScreen ? '250px' : '0',
                                    // marginRight: isSmallScreen ? '500px' : '0',
                                    marginLeft: isNarrowScreen ? '60px' : '0'  // Shift frame if screen is narrow
                                }}
                            />
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                width: isNarrowScreen ? '78%' : '95%',
                                height: isNarrowScreen ? '90%' : '90%',
                                borderRadius: isNarrowScreen ? '40px' : '56px',
                                paddingLeft: isSmallScreen ? '400px' : '0',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <video
                                style={{
                                    pointerEvents: 'none'
                                }}
                                playsInline
                                preload="none"
                                muted
                                autoPlay
                                ref={videoRef}
                            >
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p
                        style={{
                            color: '#6b7280',
                            fontWeight: '600',
                            textAlign: 'center',
                            marginTop: '0.75rem'
                        }}
                    >
                        Honkai: Star Rail
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: isTabletScreen ? 'column' : 'row', // 'md:flex-row' for screens 768px and above
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '6rem'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <p
                            className="g_fadeIn"
                            style={{
                                color: '#6b7280',
                                paddingLeft: isNarrowScreen ? '15px' : '0',
                                paddingBottom: '10px',
                                fontSize: isNarrowScreen ? '1.25rem' : '1.5rem', // Responsive font size
                                fontWeight: isNarrowScreen ? '400' : '600', // Responsive font weight
                            }}
                        >
                            A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span
                                style={{
                                    color: 'white'
                                }}
                            >
                                best graphic performance by far
                            </span>.
                        </p>

                        <p
                            className="g_fadeIn"
                            style={{
                                color: '#6b7280',
                                paddingLeft: isNarrowScreen ? '15px' : '0',
                                fontSize: isNarrowScreen ? '1.25rem' : '1.5rem', // Responsive font size
                                fontWeight: isNarrowScreen ? '400' : '600', // Responsive font weight
                            }}
                        >
                            Mobile {' '}
                            <span
                                style={{
                                    color: 'white'
                                }}
                            >
                                games will look and feel so immersive
                            </span>,
                            with incredibly detailed environments and characters.
                        </p>
                    </div>

                    <div
                        style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                        className="g_fadeIn" // Keep any animations or other classes
                    >
                        <p
                            style={{
                                color: '#6b7280',
                                paddingLeft: isNarrowScreen ? '15px' : '0',
                                fontSize: isNarrowScreen ? '1.5rem' : '1.5rem', // Responsive font size
                                fontWeight: isNarrowScreen ? '400' : '600', // Responsive font weight
                            }}
                        >
                            New
                        </p>
                        <p
                            style={{
                                color: 'white',
                                paddingLeft: isNarrowScreen ? '15px' : '0',
                                fontSize: isNarrowScreen ? '1.875rem' : '3.125rem', // Responsive font size
                                fontWeight: isNarrowScreen ? '400' : '600', // Responsive font weight
                                margin: '0.5rem 0'
                            }}
                        >
                            Pro-class GPU
                        </p>
                        <p
                            style={{
                                color: '#6b7280',
                                paddingLeft: isNarrowScreen ? '15px' : '0',
                                fontSize: isNarrowScreen ? '1.25rem' : '1.5rem', // Responsive font size
                                fontWeight: isNarrowScreen ? '400' : '600', // Responsive font weight
                                paddingBottom: '100px',
                            }}
                        >
                            with 6 cores
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
