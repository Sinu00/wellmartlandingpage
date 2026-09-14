import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from './lib/gsap';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import HowItWorks from './components/HowItWorks';
import PrizeCalendar from './components/PrizeCalendar';
import GrandTotal from './components/GrandTotal';
import LiveDraw from './components/LiveDraw';
import FullPaymentOffer from './components/FullPaymentOffer';
import Terms from './components/Terms';
import Contact from './components/Contact';
import { Footer, WhatsAppFab } from './components/Footer';

export default function App() {
  const reduce = prefersReducedMotion();
  const [loading, setLoading] = useState(!reduce);
  const [introPlaying, setIntroPlaying] = useState(reduce);
  const main = useRef(null);

  // Runs after the child sections' effects, so the prize calendar's pin spacing
  // already exists when these reveal triggers measure their positions.
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
      // Web fonts change line heights, so re-measure once they arrive.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: main }
  );

  return (
    <>
      {loading && <Loader onReveal={() => setIntroPlaying(true)} onDone={() => setLoading(false)} />}
      <Nav />
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
      <Footer />
      <WhatsAppFab />
    </>
  );
}
