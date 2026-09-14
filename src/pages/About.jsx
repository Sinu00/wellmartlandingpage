import Button from '../components/Button';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { COMPANY, SHOP_LINK } from '../data';
import usePageTitle from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('About WellMart | Kasaragod showroom');
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A furniture and electronics showroom in Kasaragod."
        lede="WellMart Winners Club LLP sells home furniture and electronics from Golden Arcade, New Bus Stand. Walk in, call, or WhatsApp."
      />
      <section className="section">
        <div className="wrap about-grid">
          <article>
            <h2>What we sell</h2>
            <p>
              Sofas, dining sets, wardrobes, beds, and office furniture. TVs, air conditioners, washing machines,
              kitchen appliances, phones, and other home electronics. Stock changes, so ask before you travel.
            </p>
            <h2>The showroom</h2>
            <p>
              We are on the second floor of Golden Arcade, next to the new bus stand. Bring measurements if you are
              buying furniture. For electronics we can talk through size, power, and what fits the room.
            </p>
            <div className="cta">
              <Button href={SHOP_LINK} external>
                WhatsApp us
                <Icon name="arrow" />
              </Button>
              <Button href={`tel:${COMPANY.phone}`} variant="ghost">
                Call {COMPANY.phoneDisplay}
              </Button>
            </div>
          </article>
          <aside className="visit-card">
            <div>
              <b>Legal name</b>
              <span>{COMPANY.legalName}</span>
            </div>
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
          </aside>
        </div>
      </section>
    </main>
  );
}
