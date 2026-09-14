const line = (width = 1.8) => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: width,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});
const solid = { fill: 'currentColor' };

const WHATSAPP_PATH =
  'M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.1.6 2.8.5a2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.5-.3z';

const ICONS = {
  // prize list (24)
  coin: { props: line(), body: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /></> },
  mobile: { props: line(), body: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10 18h4" /></> },
  tablet: { props: line(), body: <><rect x="3.5" y="4" width="17" height="16" rx="2.5" /><path d="M10 17h4" /></> },
  cash: { props: line(), body: <><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="3" /></> },
  appliance: { props: line(), body: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M5 11h14M9 7h2M9 15h2" /></> },
  scooter: {
    props: line(),
    body: <><circle cx="6.5" cy="17" r="2.5" /><circle cx="17.5" cy="17" r="2.5" /><path d="M9 17h6M6.5 14.5L10 8h4l2.5 6.5M3 12h3" /></>,
  },

  // headline prizes (64)
  iphone: {
    vb: '0 0 64 64',
    props: line(2.4),
    body: (
      <>
        <rect x="18" y="6" width="28" height="52" rx="7" />
        <rect x="24" y="10" width="16" height="4" rx="2" fill="currentColor" stroke="none" />
        <circle cx="26" cy="20" r="3" />
        <circle cx="34" cy="20" r="3" />
        <path d="M28 52h8" />
      </>
    ),
  },
  house: {
    vb: '0 0 64 64',
    props: line(2.4),
    body: <><path d="M8 30L32 10l24 20" /><path d="M14 26v28h36V26" /><rect x="26" y="38" width="12" height="16" rx="1.5" /><path d="M40 12h6v8" /></>,
  },

  // how it works
  card: { props: line(), body: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18M7 15h4" /></> },
  play: {
    props: line(),
    body: <><rect x="2" y="4" width="20" height="14" rx="3" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /><path d="M8 21h8" /></>,
  },
  trophy: {
    props: line(),
    body: <><path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0z" /><path d="M6 6H3a3 3 0 0 0 3 4M18 6h3a3 3 0 0 1-3 4" /></>,
  },

  // channels & contact
  whatsapp: { props: solid, body: <path d={WHATSAPP_PATH} /> },
  youtube: {
    props: solid,
    body: (
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l6 3z" />
    ),
  },
  instagram: {
    props: line(2),
    body: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>,
  },
  arrow: { props: line(2.2), body: <path d="M5 12h14M13 6l6 6-6 6" /> },
  pin: { props: line(), body: <><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></> },
  call: { props: line(), body: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /> },
  mail: { props: line(), body: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></> },
};

export default function Icon({ name, ...rest }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg viewBox={icon.vb ?? '0 0 24 24'} aria-hidden="true" focusable="false" {...icon.props} {...rest}>
      {icon.body}
    </svg>
  );
}
