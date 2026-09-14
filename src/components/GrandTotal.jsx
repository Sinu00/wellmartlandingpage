import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { MONTHS, TOTAL_WINNERS, monthWinners } from '../data';

const PX_PER_WINNER = 6;

export default function GrandTotal() {
  const ref = useRef(null);
  const counter = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const value = { v: 0 };
      counter.current.textContent = '0';
      gsap.to(value, {
        v: TOTAL_WINNERS,
        duration: 2.2,
        ease: 'power3.out',
        onUpdate: () => {
          counter.current.textContent = Math.round(value.v);
        },
        scrollTrigger: { trigger: counter.current, start: 'top 80%', once: true },
      });

      gsap.from('.bar .fill', {
        scaleY: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.bars', start: 'top 85%', once: true },
      });
    },
    { scope: ref }
  );

  const [m1, m2, m3, m4] = MONTHS.map(monthWinners);

  return (
    <section className="section total-sec" ref={ref}>
      <div className="wrap">
        <p className="eyebrow rv">Grand total</p>
        <div className="big-num" ref={counter}>
          {TOTAL_WINNERS}
        </div>
        <h2 className="rv">winners across four draws</h2>
        <p className="rv">
          {m1} in month one, {m2} in month two, {m3} in month three and {m4} in the bumper month. Every completed plan
          is in every draw.
        </p>
        <div className="bars" role="img" aria-label={`Winners per month: ${MONTHS.map((m) => `${m.label} ${monthWinners(m)}`).join(', ')}`}>
          {MONTHS.map((m, i) => (
            <div key={m.id} className={`bar${m.bumper ? ' gold' : ''}`}>
              <div className="fill" style={{ '--h': `${monthWinners(m) * PX_PER_WINNER}px` }}>
                <b>{monthWinners(m)}</b>
              </div>
              <small>{m.bumper ? 'Bumper' : `Month ${i + 1}`}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
