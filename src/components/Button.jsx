import { useRef } from 'react';
import { useMagnetic } from '../hooks/usePointerFx';

/** Pill link with the magnetic hover effect. `external` opens in a new tab. */
export default function Button({ variant = 'pink', external = false, className = '', children, ...rest }) {
  const ref = useRef(null);
  useMagnetic(ref);
  const newTab = external ? { target: '_blank', rel: 'noopener' } : {};

  return (
    <a ref={ref} className={`btn btn-${variant} ${className}`.trim()} {...newTab} {...rest}>
      {children}
    </a>
  );
}
