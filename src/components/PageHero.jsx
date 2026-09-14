export default function PageHero({ eyebrow, title, lede }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
