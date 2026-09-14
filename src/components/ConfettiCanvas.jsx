import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/gsap';

const SHARD_COLORS = ['#E91D6E', '#FF5FA2', '#C9922E', '#F5C76A'];

/** Gold coins and pink confetti drifting upward, with gentle pointer parallax. */
export default function ConfettiCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let W = 0;
    let H = 0;
    let raf = 0;

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (anywhere) => {
      const coin = Math.random() < 0.35;
      return {
        coin,
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : H + 30,
        r: coin ? 5 + Math.random() * 7 : 3 + Math.random() * 5,
        vy: 0.25 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.04,
        depth: 0.4 + Math.random() * 0.8,
        sway: Math.random() * Math.PI * 2,
        col: coin ? null : SHARD_COLORS[Math.floor(Math.random() * SHARD_COLORS.length)],
      };
    };

    const drawCoin = (p, x, y) => {
      const squash = Math.max(0.15, Math.abs(Math.cos(p.rot)));
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(squash, 1);
      const g = ctx.createRadialGradient(-p.r * 0.3, -p.r * 0.3, p.r * 0.2, 0, 0, p.r);
      g.addColorStop(0, '#FFE9B8');
      g.addColorStop(0.6, '#F5C76A');
      g.addColorStop(1, '#B9822A');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(120,70,10,.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, p.r * 0.62, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const drawShard = (p, x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(p.rot);
      ctx.scale(1, Math.max(0.2, Math.abs(Math.sin(p.rot * 1.7))));
      ctx.fillStyle = p.col;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.roundRect(-p.r, -p.r * 0.55, p.r * 2, p.r * 1.1, 2);
      ctx.fill();
      ctx.restore();
    };

    const draw = (p) => {
      const x = p.x + mouse.x * 30 * p.depth;
      const y = p.y + mouse.y * 18 * p.depth;
      p.coin ? drawCoin(p, x, y) : drawShard(p, x, y);
    };

    resize();
    const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 14000));
    const parts = Array.from({ length: count }, () => spawn(true));

    if (prefersReducedMotion()) {
      parts.forEach(draw);
      window.addEventListener('resize', resize, { passive: true });
      return () => window.removeEventListener('resize', resize);
    }

    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.sway += 0.01;
        p.y -= p.vy * p.depth;
        p.x += p.vx + Math.sin(p.sway) * 0.25;
        p.rot += p.vr;
        draw(p);
        if (p.y < -30 || p.x < -40 || p.x > W + 40) parts[i] = spawn(false);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas id="confetti" ref={ref} aria-hidden="true" />;
}
