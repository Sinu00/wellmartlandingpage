import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ProductGrid from '../components/ProductGrid';
import { COMPANY, SHOP_LINK } from '../data';
import { FEATURED } from '../data/products';
import showroom from '../assets/products/hero-showroom.png';
import sofa from '../assets/products/sofa.png';
import tv from '../assets/products/tv.png';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('WellMart | Furniture and electronics, Kasaragod');
  return (
    <main>
      <section className="shop-hero">
        <div className="wrap shop-hero-grid">
          <div>
            <p className="eyebrow">Furniture and electronics · Kasaragod</p>
            <h1>Furniture and electronics for homes in Kasaragod.</h1>
            <p className="lede">
              WellMart is a showroom at Golden Arcade, New Bus Stand. Come in for sofas, wardrobes, TVs, ACs, and home
              appliances, or message us on WhatsApp.
            </p>
            <div className="cta">
              <Button href={SHOP_LINK} external>
                WhatsApp the shop
                <Icon name="arrow" />
              </Button>
              <Button href={COMPANY.mapsUrl} variant="ghost" external>
                Open in Maps
              </Button>
            </div>
            <p className="shop-address">
              {COMPANY.addressLines.join(', ')} · {COMPANY.phoneDisplay}
            </p>
          </div>
          <div className="shop-hero-art">
            <img src={showroom} alt="WellMart showroom with furniture and electronics on display" />
          </div>
        </div>
      </section>

      <section className="section cats">
        <div className="wrap">
          <div className="section-head">
            <h2>Shop by category.</h2>
          </div>
          <div className="cat-grid">
            <Link to="/furniture" className="cat-tile">
              <img src={sofa} alt="" />
              <div>
                <h3>Furniture</h3>
                <p>Sofas, dining, wardrobes, beds, and office chairs.</p>
              </div>
            </Link>
            <Link to="/electronics" className="cat-tile">
              <img src={tv} alt="" />
              <div>
                <h3>Electronics</h3>
                <p>TVs, ACs, washing machines, phones, and kitchen appliances.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="wrap">
          <div className="section-head">
            <h2>In the showroom now.</h2>
            <p>Ask on WhatsApp for current stock, size, and price. What you see here is a sample of what we keep.</p>
          </div>
          <ProductGrid featured={FEATURED} />
        </div>
      </section>

      <section className="section visit">
        <div className="wrap visit-grid">
          <div>
            <p className="eyebrow">Visit us</p>
            <h2>Golden Arcade, New Bus Stand.</h2>
            <p>
              Walk in during shop hours or call ahead. We will confirm what is in stock and help you choose furniture
              and electronics for the house.
            </p>
            <div className="cta">
              <Button href={`tel:${COMPANY.phone}`} variant="ghost">
                Call {COMPANY.phoneDisplay}
              </Button>
              <Button href={COMPANY.mapsUrl} variant="ghost" external>
                Google Maps
              </Button>
            </div>
          </div>
          <address className="visit-card">
            <div>
              <b>Showroom</b>
              {COMPANY.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <div>
              <b>Phone</b>
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
            </div>
            <div>
              <b>Email</b>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
          </address>
        </div>
      </section>

      <section className="section club-note">
        <div className="wrap club-note-card">
          <div>
            <h2>WellMart also runs a member savings scheme.</h2>
            <p>The Winners Club is a separate 4-month plan with monthly draws. Read the terms before you join.</p>
          </div>
          <Button to="/winners-club" variant="ghost">
            Winners Club
            <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </main>
  );
}
