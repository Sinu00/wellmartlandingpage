import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMagnetic } from '../hooks/usePointerFx';

/** Pill link with the magnetic hover effect. `to` is in-app. `external` opens a new tab. */
export default function Button({ variant = 'pink', external = false, className = '', to, children, ...rest }) {
  const ref = useRef(null);
  useMagnetic(ref);
  const cls = `btn btn-${variant} ${className}`.trim();
  const newTab = external ? { target: '_blank', rel: 'noopener' } : {};

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a ref={ref} className={cls} {...newTab} {...rest}>
      {children}
    </a>
  );
}
