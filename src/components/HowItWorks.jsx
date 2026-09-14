import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import Icon from './Icon';
import { STEPS } from '../data';

export default function HowItWorks() {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.step', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.steps', start: 'top 80%', once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section className="section" id="how" ref={ref}>
      <div className="wrap">
        <div className="section-head rv">
          <p className="eyebrow">How it works</p>
          <h2>How WellMart Winners Club works.</h2>
          <p>
            The plan runs for four months. Stay paid up and you are automatically entered into every monthly draw,
            including the bumper draw in month four.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <article className="step" key={s.title}>
              <div className="ic">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="tag">{s.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
