import { useEffect, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import bag from '../assets/bag-white.png';

/**
 * Pink curtain with the bag mark. Calls onReveal as the curtain starts lifting
 * (so the hero intro overlaps it) and onDone once it has fully cleared.
 */
export default function Loader({ onReveal, onDone }) {
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Failsafe: never trap the visitor behind the curtain.
    const failsafe = setTimeout(() => {
      onReveal();
      onDone();
    }, 5000);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(failsafe);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useGSAP(
    () => {
      gsap
        .timeline({ onComplete: onDone })
        .from('.bag', { scale: 0.6, autoAlpha: 0, duration: 0.7, ease: 'back.out(1.8)' })
        .from('.word', { y: 14, autoAlpha: 0, duration: 0.5 }, '-=.35')
        .to('.bag', { y: -10, yoyo: true, repeat: 1, duration: 0.3, ease: 'sine.inOut' }, '+=.1')
        .to(ref.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '+=.15')
        .add(onReveal, '-=.55');
    },
    { scope: ref }
  );

  return (
    <div id="loader" ref={ref} aria-hidden="true">
      <img className="bag" src={bag} alt="" />
      <div className="word">Winners Club</div>
    </div>
  );
}
