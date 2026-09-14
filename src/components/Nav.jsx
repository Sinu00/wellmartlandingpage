import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo-pink.png';
import Button from './Button';
import Icon from './Icon';
import { JOIN_LINK, SHOP_LINK } from '../data';
import { onScrollTo } from '../lib/scroll';

const SHOP_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/furniture', label: 'Furniture' },
  { to: '/electronics', label: 'Electronics' },
  { to: '/emi', label: 'EMI' },
  { to: '/offers', label: 'Offers' },
  { to: '/winners-club', label: 'Winners Club' },
];

const CLUB_LINKS = [
  { href: '#how', id: 'how', label: 'How it works' },
  { href: '#prizes', id: 'prizes', label: 'Prizes' },
  { href: '#draw', id: 'draw', label: 'Live draw' },
  { href: '#terms', id: 'terms', label: 'Terms' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

function ShopLinks({ onNavigate }) {
  return SHOP_LINKS.map((l) => (
    <li key={l.to}>
      <NavLink to={l.to} end={l.to === '/'} onClick={onNavigate}>
        {l.label}
      </NavLink>
    </li>
  ));
}

function ClubLinks({ onNavigate }) {
  return (
    <>
      <li>
        <Link to="/" onClick={onNavigate}>
          Shop
        </Link>
      </li>
      {CLUB_LINKS.map((l) => (
        <li key={l.id}>
          <a
            href="#/winners-club"
            onClick={(e) => {
              onScrollTo(l.id)(e);
              onNavigate?.();
            }}
          >
            {l.label}
          </a>
        </li>
      ))}
    </>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const club = pathname === '/winners-club';
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" to="/" aria-label="WellMart home">
          <img src={logo} alt="WellMart" />
        </Link>
        <ul className="nav-links">{club ? <ClubLinks /> : <ShopLinks />}</ul>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <Button href={club ? JOIN_LINK : SHOP_LINK} external>
          <Icon name="whatsapp" />
          {club ? 'Join on WhatsApp' : 'WhatsApp us'}
        </Button>
      </div>
      {open && (
        <ul className="nav-mobile is-open" id="mobile-nav">
          {club ? <ClubLinks onNavigate={close} /> : <ShopLinks onNavigate={close} />}
          <li>
            <a href={club ? JOIN_LINK : SHOP_LINK} target="_blank" rel="noopener" onClick={close}>
              {club ? 'Join on WhatsApp' : 'WhatsApp us'}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
