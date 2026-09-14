import Button from '../components/Button';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { SHOP_LINK } from '../data';
import usePageTitle from '../hooks/usePageTitle';

export default function Offers() {
  usePageTitle('Offers | WellMart Kasaragod');
  return (
    <main>
      <PageHero
        eyebrow="Offers"
        title="Current prices are in the shop."
        lede="Discounts change with stock and season. WhatsApp us or visit Golden Arcade for the price on a sofa, TV, or appliance today."
      />
      <section className="section">
        <div className="wrap">
          <div className="offer-plain">
            <p>
              We do not publish a fixed percentage off on the website. If something is on offer this week, the showroom
              team will tell you when you ask.
            </p>
            <Button href={SHOP_LINK} external>
              WhatsApp for today’s prices
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
