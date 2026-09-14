import { gsap, useGSAP, prefersReducedMotion, canHover } from '../lib/gsap';

/** 3D tilt that follows the pointer. Disabled for touch and reduced motion. */
export function useTilt(ref, { x = 10, y = 8 } = {}) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !canHover()) return;

      gsap.set(el, { transformPerspective: 900 });
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });

      const move = (e) => {
        const r = el.getBoundingClientRect();
        rx(-((e.clientY - r.top) / r.height - 0.5) * y);
        ry(((e.clientX - r.left) / r.width - 0.5) * x);
      };
      const leave = () => {
        rx(0);
        ry(0);
      };

      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    },
    { scope: ref }
  );
}

/** Element drifts toward the pointer while hovered. */
export function useMagnetic(ref, { x = 0.18, y = 0.25 } = {}) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !canHover()) return;

      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });

      const move = (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * x);
        yTo((e.clientY - r.top - r.height / 2) * y);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    },
    { scope: ref }
  );
}
