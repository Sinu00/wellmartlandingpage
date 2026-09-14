import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { useTilt } from '../hooks/usePointerFx';
import Icon from './Icon';
import { MONTHS, monthWinners } from '../data';

function MonthCard({ month, index, count }) {
  const ref = useRef(null);
  useTilt(ref);
  const { headline, bumper } = month;
  const drawLabel = bumper ? `Bumper draw · ${index + 1} of ${count}` : `Draw ${index + 1} of ${count}`;

  return (
    <article className={`month${bumper ? ' bumper' : ''}`} ref={ref}>
      <div className="month-top">
        <span className="pill">{month.label}</span>
        <span className="total">
          <b className="num">{monthWinners(month)}</b> winners
        </span>
      </div>

      <div className="headline-prize">
        <div className="art">
          <Icon name={headline.icon} />
        </div>
        <div>
          <div className="k">{headline.kicker}</div>
          <h3>
            {headline.name}
            {headline.alt && (
              <>
                {' '}
                <span className="choice">or</span> {headline.alt}
              </>
            )}
          </h3>
          <div className="w">{headline.note ?? `${headline.winners} winner`}</div>
        </div>
      </div>

      <ul className="prize-list">
        {month.prizes.map((p) => (
          <li key={p.name}>
            <Icon name={p.icon} />
            <span>{p.name}</span>
            <b>
              {p.winners} {p.winners === 1 ? 'winner' : 'winners'}
            </b>
          </li>
        ))}
      </ul>

      <div className="month-foot">
        <span className="draw">Live draw at WellMart office</span>
        <span>{drawLabel}</span>
      </div>
    </article>
  );
}

/** Scroll-pinned horizontal timeline on desktop, stacked cards on phones. */
export default function PrizeCalendar() {
  const ref = useRef(null);
  const track = useRef(null);
  const bars = useRef([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: '(min-width: 900px)', reduce: '(prefers-reduced-motion: reduce)' },
        (ctx) => {
          const { desktop, reduce } = ctx.conditions;
          if (reduce) return;

          if (!desktop) {
            gsap.from('.month', {
              y: 40,
              opacity: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: { trigger: track.current, start: 'top 85%', once: true },
            });
            return;
          }

          const segments = MONTHS.length - 1;
          const distance = () => track.current.scrollWidth - window.innerWidth;
          gsap.to(track.current, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: ref.current,
              pin: true,
              scrub: 0.8,
              start: 'top top',
              end: () => `+=${distance()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              snap: { snapTo: 1 / segments, duration: { min: 0.2, max: 0.6 }, ease: 'power1.inOut' },
              onUpdate(self) {
                const p = self.progress * segments;
                bars.current.forEach((b, i) => b?.style.setProperty('--p', Math.max(0, Math.min(1, p - i + 1))));
              },
            },
          });
          return () => bars.current.forEach((b) => b?.style.removeProperty('--p'));
        },
        ref.current
      );
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="months" id="prizes" ref={ref}>
      <div className="months-inner">
        <div className="wrap months-head rv">
          <div>
            <p className="eyebrow">Prize calendar</p>
            <h2>
              WellMart Winners Club prizes.
              <br />
              Four months. Four draws.
            </h2>
            <p>
              Every month has its own headline prize plus gold coins, 5G phones, cash and appliance kits. Month four is
              the bumper draw.
            </p>
          </div>
          <div className="progress" aria-hidden="true">
            {MONTHS.map((m, i) => (
              <i key={m.id} className={m.bumper ? 'gold' : undefined} ref={(el) => (bars.current[i] = el)} />
            ))}
          </div>
        </div>

        <div className="months-track" ref={track}>
          {MONTHS.map((m, i) => (
            <MonthCard key={m.id} month={m} index={i} count={MONTHS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
