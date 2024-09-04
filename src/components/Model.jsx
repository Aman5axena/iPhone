import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations.js";

const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    });

    // camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            });
        }

        // if (size === 'small') {
        //     animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        //         transform: 'translateX(0)',
        //         duration: 2
        //     });
        // }
    }, [size]);

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 });
    }, []);

    return (
        <section
            style={{
                paddingTop: '5rem',          // Equivalent to `py-20`
                paddingBottom: '5rem',       // Equivalent to `py-20`
                paddingLeft: '1.25rem',      // Equivalent to `px-5`
                paddingRight: '1.25rem',     // Equivalent to `px-5`
                '@media (minWidth: 640px)': {
                    paddingTop: '8rem',        // Equivalent to `sm:py-32`
                    paddingBottom: '8rem',     // Equivalent to `sm:py-32`
                    paddingLeft: '2.5rem',     // Equivalent to `sm:px-10`
                    paddingRight: '2.5rem'     // Equivalent to `sm:px-10`
                }
            }}
        >
            <div className="screen-max-width">
                <h1
                    id="heading"
                    style={{
                        color: '#6b7280',                // Equivalent to `text-gray`
                        fontSize: '3rem',            // Default size equivalent to `text-3xl`
                        marginBottom: '1.25rem',         // Default margin equivalent to `mb-5`
                        fontWeight: 500,                 // Equivalent to `font-medium`
                        opacity: 0,                      // Equivalent to `opacity-0`
                        transform: 'translateY(5rem)',  // Equivalent to `translate-y-20`
                        maxWidth: '1120px',              // Assuming `screen-max-width` has a max-width
                        marginInlineStart: 'auto',       // Assuming `screen-max-width` includes auto margins
                        marginInlineEnd: 'auto',         // Assuming `screen-max-width` includes auto margins
                        position: 'relative'             // Assuming `screen-max-width` includes relative positioning
                    }}
                >
                    Take a closer look.
                </h1>

                <div
                    style={{
                        display: 'flex',           // Equivalent to `flex`
                        flexDirection: 'column',   // Equivalent to `flex-col`
                        alignItems: 'center',      // Equivalent to `items-center`
                        marginTop: '1.25rem'       // Equivalent to `mt-5`
                    }}
                >
                    <div style={{
                        width: '100%',                    // Equivalent to `w-full`
                        height: '75vh',                   // Default height equivalent to `h-[75vh]`
                        overflow: 'hidden',               // Equivalent to `overflow-hidden`
                        position: 'relative'              // Equivalent to `relative`
                    }}>
                        {/* Canvas for THREE.js rendering */}
                        <Canvas
                            style={{
                                width: '100%',    // Equivalent to `w-full`
                                height: '100%',   // Equivalent to `h-full`
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                        >
                            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                            <OrbitControls
                                ref={cameraControlSmall}
                                enableZoom={false}
                                enablePan={false}
                                rotateSpeed={0.4}
                            />
                            {/* <ModelView
                                index={1}
                                groupRef={small}
                                gsapType="view1"
                                controlRef={cameraControlSmall}
                                setRotationState={setSmallRotation}
                                item={model}
                                size={size}
                            /> */}

                            <ModelView
                                index={2}
                                groupRef={large}
                                gsapType="view2"
                                controlRef={cameraControlLarge}
                                setRotationState={setLargeRotation}
                                item={model}
                                size={size}
                            />
                        </Canvas>
                    </div>

                    <div
                        style={{
                            marginInlineStart: 'auto',   // Equivalent to `mx-auto` (centers the element horizontally)
                            marginInlineEnd: 'auto',     // Equivalent to `mx-auto` (centers the element horizontally)
                            width: '100%'                // Equivalent to `w-full`
                        }}
                    >
                        <p style={{
                            fontSize: '0.875rem',   // Equivalent to `text-sm` (small text size)
                            fontWeight: 300,        // Equivalent to `font-light` (light font weight)
                            textAlign: 'center',    // Equivalent to `text-center` (centered text)
                            marginBottom: '1.25rem' // Equivalent to `mb-5` (bottom margin)
                        }}>{model.title}</p>

                        <div
                            style={{
                                display: 'flex',           // Applies Flexbox layout
                                justifyContent: 'center',  // Centers content horizontally
                                alignItems: 'center'       // Centers content vertically
                            }}
                        >
                            <ul
                                style={{
                                    display: 'flex',              // Equivalent to `flex`
                                    alignItems: 'center',         // Equivalent to `items-center`
                                    justifyContent: 'center',     // Equivalent to `justify-center`
                                    padding: '1rem',              // Equivalent to `px-4 py-4` (padding on all sides)
                                    borderRadius: '9999px',       // Equivalent to `rounded-full`
                                    backgroundColor: '#0F0F0F',   // Equivalent to `bg-gray-300`
                                    backdropFilter: 'blur(10px)'  // Equivalent to `backdrop-blur`
                                }}
                            >
                                {models.map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            width: '1.5rem',            // Equivalent to `w-6`
                                            height: '1.5rem',           // Equivalent to `h-6`
                                            borderRadius: '9999px',     // Equivalent to `rounded-full`
                                            marginInline: '0.5rem',     // Equivalent to `mx-2`
                                            cursor: 'pointer',          // Equivalent to `cursor-pointer`
                                            backgroundColor: item.color[0] // Inline style to set background color
                                        }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>

                            {/* <button
                                style={{
                                    // Assuming typical styles for a button container; update these as per your actual CSS
                                    padding: '0.5rem 1rem',       // Example padding, adjust as necessary
                                    borderRadius: '0.25rem',      // Example border radius
                                    backgroundColor: '#f3f4f6',   // Example background color
                                    cursor: 'pointer',            // Changes the cursor to a pointer on hover
                                    display: 'inline-flex',       // Aligns items in a row
                                    alignItems: 'center',         // Centers items vertically
                                    justifyContent: 'center'      // Centers items horizontally
                                }}
                            >
                                {sizes.map(({ label, value }) => (
                                    <span
                                        key={label}
                                        style={{
                                            padding: '0.5rem 1rem',                      // Example padding, adjust as needed
                                            borderRadius: '0.25rem',                     // Example border radius, adjust as needed
                                            backgroundColor: size === value ? 'white' : 'transparent', // Dynamic background color
                                            color: size === value ? 'black' : 'white',   // Dynamic text color
                                            cursor: 'pointer',                           // Changes cursor to pointer on hover
                                            display: 'inline-block',                     // Ensures the span behaves like a block-level element
                                            textAlign: 'center'                          // Centers text horizontally
                                        }}
                                        onClick={() => setSize(value)}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Model;
