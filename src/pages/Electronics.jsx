import PageHero from '../components/PageHero';
import ProductGrid from '../components/ProductGrid';
import useSeo from '../hooks/useSeo';

export default function Electronics() {
  useSeo({
    title: 'Electronics | WellMart Kasaragod',
    description: 'Electronics at WellMart, Kasaragod.',
    index: false,
  });
  return (
    <main>
      <PageHero
        eyebrow="Electronics"
        title="TVs, ACs, appliances, and phones."
        lede="Home electronics from the WellMart showroom in Kasaragod. Ask on WhatsApp before you visit if you need a specific size."
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid category="electronics" />
        </div>
      </section>
    </main>
  );
}
