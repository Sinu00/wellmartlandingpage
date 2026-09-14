import { useEffect, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import ConfettiCanvas from './ConfettiCanvas';
import Button from './Button';
import Icon from './Icon';
import bag from '../assets/bag-white.png';
import { JOIN_LINK, MONTHLY_FEE, MONTH_COUNT, PLAN_TOTAL, TOTAL_WINNERS, formatINR } from '../data';
import { onScrollTo } from '../lib/scroll';

const ORBS = [
  { cls: 'o1', label: <>1g<br />Gold</> },
  { cls: 'pink o2', label: '₹10k' },
  { cls: 'o3', label: 'Thar' },
  { cls: 'pink o4', label: 'iPhone' },
];

/** `play` flips to true when the loader curtain starts lifting. */
export default function Hero({ play }) {
  const ref = useRef(null);
  const intro = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      const introEls = gsap.utils.toArray('[data-intro]').filter((el) => el.tagName !== 'H1');

      tl.from('.line > span', { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.09 }, 0)
        .from(introEls, { y: 26, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 0.15)
        .from('.hero-art', { scale: 0.8, autoAlpha: 0, duration: 1.1, ease: 'power3.out' }, 0.1)
        .from('.orb', { scale: 0, duration: 0.7, ease: 'back.out(2)', stagger: 0.08 }, 0.5);
      intro.current = tl;

      if (prefersReducedMotion()) {
        tl.progress(1);
        return;
      }

      // Idle float for the orbs and the bag mark.
      gsap.utils.toArray('.orb').forEach((orb, i) =>
        gsap.to(orb, { y: i % 2 ? 10 : -10, duration: 2.2 + i * 0.3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      );
      gsap.to('.hero-art .bag', { y: -12, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    },
    { scope: ref }
  );

  useEffect(() => {
    if (play) intro.current?.play();
  }, [play]);

  return (
    <section className="hero" id="top" ref={ref}>
      <ConfettiCanvas />
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow" data-intro>
            Kasaragod · {MONTH_COUNT}-month lucky draw · {TOTAL_WINNERS} winners
          </p>
          <h1 data-intro>
            <span className="line">
              <span>
                Pay <span className="rupee">₹</span>
                {MONTHLY_FEE} a month.
              </span>
            </span>
            <span className="line">
              <span>
                Win an <em>iPhone</em>, gold,
              </span>
            </span>
            <span className="line">
              <span>
                a <span className="gold">Thar</span>… or a <span className="gold">house</span>.
              </span>
            </span>
          </h1>
          <p className="lede" data-intro>
            Four monthly draws held in public at the WellMart office and streamed live on YouTube. Every member who
            completes the {formatINR(PLAN_TOTAL)} plan is in every draw.
          </p>
          <div className="cta" data-intro>
            <Button href={JOIN_LINK} external>
              Join the club
              <Icon name="arrow" />
            </Button>
            <Button href="#/winners-club" variant="ghost" onClick={onScrollTo('prizes')}>
              See all prizes
            </Button>
          </div>
          <div className="stats" data-intro>
            <div className="stat">
              <b className="num">{TOTAL_WINNERS}</b>
              <small>Winners in {MONTH_COUNT} months</small>
            </div>
            <div className="stat">
              <b className="num">{MONTH_COUNT}</b>
              <small>Live monthly draws</small>
            </div>
            <div className="stat">
              <b className="num">
                <span className="rupee">₹</span>
                {MONTHLY_FEE}
              </b>
              <small>Per month, {MONTH_COUNT} months</small>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="ring" />
          <div className="ring r2" />
          <div className="ring r3" />
          {ORBS.map((o) => (
            <div key={o.cls} className={`orb ${o.cls}`}>
              {o.label}
            </div>
          ))}
          <div className="bag">
            <img src={bag} alt="WellMart shopping bag mark" />
          </div>
        </div>
      </div>
    </section>
  );
}
