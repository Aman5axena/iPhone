import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (targetRef, animationProps, scrollProps) => {
  // Ensure targetRef is properly referenced
  const target = targetRef.current;

  if (target) {
    gsap.to(target, {
      ...animationProps,
      scrollTrigger: {
        trigger: target,
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
        ...scrollProps,
      }
    });
  } else {
    console.error('GSAP target not found');
  }
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTargetRef, secondTargetRef, animationProps) => {
  const firstTarget = firstTargetRef.current;
  const secondTarget = secondTargetRef.current;

  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  });

  if (firstTarget) {
    timeline.to(
      firstTarget,
      {
        ...animationProps,
        ease: 'power2.inOut'
      },
      '<'
    );
  } 
  

  if (secondTarget) {
    timeline.to(
      secondTarget,
      {
        ...animationProps,
        ease: 'power2.inOut'
      },
      '<'
    );
  } 
}
