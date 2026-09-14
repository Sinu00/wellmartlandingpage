import Button from '../components/Button';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { COMPANY, EMI_LINK } from '../data';
import useSeo from '../hooks/useSeo';

export default function Emi() {
  useSeo({
    title: 'Monthly payments | WellMart Kasaragod',
    description: 'Ask WellMart in Kasaragod about monthly payments.',
    index: false,
  });
  return (
    <main>
      <PageHero
        eyebrow="Monthly payments"
        title="Buy now, pay across months."
        lede="Ask at the showroom or on WhatsApp about monthly payment options on furniture and electronics. Terms depend on the product and your documents."
      />
      <section className="section">
        <div className="wrap emi-grid">
          <article className="emi-card">
            <h2>How it works here</h2>
            <p>
              Come to Golden Arcade with your ID and bank details, or message us first. We will tell you what monthly
              payment options are available for the item you want. We do not list bank or NBFC partners on this site.
            </p>
            <ul className="emi-list">
              <li>Ask before you buy. Not every item has the same plan.</li>
              <li>Bring identity proof and a bank passbook or statement if we ask for them.</li>
              <li>Final approval sits with the finance partner, not with a page on this website.</li>
            </ul>
            <div className="cta">
              <Button href={EMI_LINK} external>
                Ask about monthly payments
                <Icon name="arrow" />
              </Button>
              <Button href={`tel:${COMPANY.phone}`} variant="ghost">
                Call {COMPANY.phoneDisplay}
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
