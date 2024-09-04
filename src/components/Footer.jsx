import React from 'react';

// Sample footer links array
const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds'];

const Footer = () => {
    return (
        <footer style={{
            padding: '1.25rem 1.25rem', // py-5 sm:px-10 px-5
            backgroundColor: '#0F0F0F'  // Assuming a light background color
        }}>
            <div style={{
                maxWidth: '1200px', // screen-max-width (adjust as needed)
                margin: '0 auto'
            }}>
                <div>
                    <p style={{
                        fontWeight: '600', // font-semibold
                        color: '#6b7280', // text-gray
                        fontSize: '0.75rem' // text-xs
                    }}>
                        More ways to shop:{' '}
                        <a href="https://www.apple.com/retail/" 
                           style={{
                               textDecoration: 'underline', // underline
                               color: '#1d4ed8' // text-blue
                           }} 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Find an Apple Store{' '}
                        </a>
                        or{' '}
                        <a href="https://www.apple.com/retail/" 
                           style={{
                               textDecoration: 'underline', // underline
                               color: '#1d4ed8' // text-blue
                           }} 
                           target="_blank" 
                           rel="noopener noreferrer">
                            other retailer
                        </a>{' '}
                        near you.
                    </p>
                    <p style={{
                        fontWeight: '600', // font-semibold
                        color: '#6b7280', // text-gray
                        fontSize: '0.75rem' // text-xs
                    }}>
                        Or call 000800-040-1966
                    </p>
                </div>

                <div style={{
                    backgroundColor: '#4b5563', // bg-neutral-700
                    margin: '1.25rem 0', // my-5
                    height: '1px',
                    width: '100%'
                }} />

                <div style={{
                    display: 'flex',
                    flexDirection: window.innerWidth >= 768 ? 'row' : 'column', // md:flex-row
                    alignItems: window.innerWidth >= 768 ? 'center' : 'flex-start', // md:items-center
                    justifyContent: 'space-between' // justify-between
                }}>
                    <p style={{
                        fontWeight: '600', // font-semibold
                        color: '#6b7280', // text-gray
                        fontSize: '0.75rem' // text-xs
                    }}>
                        Copyright @ 2024 Apple Inc. All rights reserved.
                    </p>
                    <div style={{
                        display: 'flex'
                    }}>
                        {footerLinks.map((link, i) => (
                            <p key={link} style={{
                                fontWeight: '600', // font-semibold
                                color: '#6b7280', // text-gray
                                fontSize: '0.75rem' // text-xs
                            }}>
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span style={{
                                        margin: '0 0.5rem' // mx-2
                                    }}>
                                        |
                                    </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
