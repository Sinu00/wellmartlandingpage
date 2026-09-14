import logo from '../assets/logo-white.png';
import Button from './Button';
import Icon from './Icon';
import { JOIN_LINK } from '../data';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#prizes', label: 'Prizes' },
  { href: '#draw', label: 'Live draw' },
  { href: '#terms', label: 'Terms' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="WellMart home">
          <img src={logo} alt="WellMart" />
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <Button href={JOIN_LINK} external>
          <Icon name="whatsapp" />
          Join on WhatsApp
        </Button>
      </div>
    </header>
  );
}
