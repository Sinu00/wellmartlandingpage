import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import Button from './Button';
import { FULL_PAY_LINK, PLAN_TOTAL, formatINR } from '../data';

export default function FullPaymentOffer() {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.to('.lid', {
        rotation: -8,
        y: -10,
        duration: 1.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        transformOrigin: '20% 100%',
      });
      gsap.to('.spark', { scale: 1.6, opacity: 0.3, duration: 1, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.3 });
    },
    { scope: ref }
  );

  return (
    <section className="section offer" ref={ref}>
      <div className="wrap">
        <div className="offer-card rv">
          <div>
            <p className="eyebrow gold">Pay in full, get more</p>
            <h2>Pay the full {formatINR(PLAN_TOTAL)} in one go and unwrap a surprise gift.</h2>
            <p>
              Members who clear all four months in a single payment receive a special surprise gift from WellMart, on top
              of entry into every draw.
            </p>
            <div className="cta">
              <Button href={FULL_PAY_LINK} variant="gold" external>
                Ask about full payment
              </Button>
              <Button href="#terms" variant="ghost">
                Read the terms
              </Button>
            </div>
          </div>
          <div className="gift" aria-hidden="true">
            <div className="box" />
            <div className="ribbon-v" />
            <div className="ribbon-h" />
            <div className="lid" />
            <div className="q">?</div>
            <span className="spark s1" />
            <span className="spark s2" />
            <span className="spark s3" />
          </div>
        </div>
      </div>
    </section>
  );
}
