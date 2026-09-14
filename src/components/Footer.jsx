import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-pink.png';
import Icon from './Icon';
import { COMPANY, JOIN_LINK, SHOP_LINK } from '../data';

export function Footer() {
  const club = useLocation().pathname === '/winners-club';

  return (
    <footer>
      <div className="wrap">
        <Link to="/">
          <img src={logo} alt="WellMart" />
        </Link>
        <p className="legal">
          {COMPANY.legalName} · {COMPANY.addressLines.join(', ')}. Furniture and electronics showroom.
          {club
            ? ' Winners Club payments are non-refundable. Prizes are provided as determined by the company and cannot be exchanged for cash.'
            : null}
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  const club = useLocation().pathname === '/winners-club';
  return (
    <a
      className="fab"
      href={club ? JOIN_LINK : SHOP_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="whatsapp" />
    </a>
  );
}
