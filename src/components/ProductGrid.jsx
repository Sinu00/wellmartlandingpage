import { PRODUCTS } from '../data/products';
import { SHOP_LINK } from '../data';

export default function ProductGrid({ category, featured }) {
  const items = featured ?? PRODUCTS.filter((p) => (category ? p.category === category : true));

  return (
    <ul className="product-grid">
      {items.map((p) => (
        <li key={p.id}>
          <a className="product-card" href={SHOP_LINK} target="_blank" rel="noopener">
            <div className="product-card-img">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <span>Ask on WhatsApp</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
