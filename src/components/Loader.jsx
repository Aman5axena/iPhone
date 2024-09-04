import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    return (
        <Html>
            <div
                style={{
                    position: 'absolute',       // Equivalent to `absolute`
                    top: 0,                     // Equivalent to `top-0`
                    left: 0,                    // Equivalent to `left-0`
                    width: '100%',              // Equivalent to `w-full`
                    height: '100%',             // Equivalent to `h-full`
                    display: 'flex',            // Equivalent to `flex`
                    justifyContent: 'center',   // Equivalent to `justify-center`
                    alignItems: 'center'        // Equivalent to `items-center`
                }}
            >
                <div style={{
                    width: '10vw',              // Equivalent to `w-[10vw]`
                    height: '10vw',             // Equivalent to `h-[10vw]`
                    borderRadius: '9999px'      // Equivalent to `rounded-full`
                }}>
                    Loading...
                </div>
            </div>
        </Html>
    )
}

export default Loader