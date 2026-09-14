import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import HowItWorks from '../components/HowItWorks';
import PrizeCalendar from '../components/PrizeCalendar';
import GrandTotal from '../components/GrandTotal';
import LiveDraw from '../components/LiveDraw';
import FullPaymentOffer from '../components/FullPaymentOffer';
import Terms from '../components/Terms';
import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';

export default function WinnersClub() {
  usePageTitle('WellMart Winners Club | Kasaragod');
  const reduce = prefersReducedMotion();
  const [loading, setLoading] = useState(!reduce);
  const [introPlaying, setIntroPlaying] = useState(reduce);
  const main = useRef(null);

  useGSAP(
    () => {
      if (!reduce) {
        gsap.utils.toArray('.rv').forEach((el) =>
          gsap.from(el, {
            y: 40,
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        );
      }
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: main }
  );

  return (
    <>
      {loading && <Loader onReveal={() => setIntroPlaying(true)} onDone={() => setLoading(false)} />}
      <main ref={main}>
        <Hero play={introPlaying} />
        <Ticker />
        <HowItWorks />
        <PrizeCalendar />
        <GrandTotal />
        <LiveDraw />
        <FullPaymentOffer />
        <Terms />
        <Contact />
      </main>
    </>
  );
}
