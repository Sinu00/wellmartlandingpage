import logo from '../assets/logo-pink.png';
import Icon from './Icon';
import { COMPANY, JOIN_LINK } from '../data';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <img src={logo} alt="WellMart" />
        <p className="legal">
          {COMPANY.legalName} · Golden Arcade Building, 2nd Floor, New Bus Stand, Kasaragod, Kerala 671121. Payments are
          non-refundable. Prizes are provided as determined by the company and cannot be exchanged for cash.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a className="fab" href={JOIN_LINK} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <Icon name="whatsapp" />
    </a>
  );
}
