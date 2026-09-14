import { useState } from 'react';
import { TERMS } from '../data';

/** Accordion that keeps exactly one term open at a time. */
export default function Terms() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="terms">
      <div className="wrap terms-grid">
        <div className="sticky rv">
          <p className="eyebrow">Terms &amp; conditions</p>
          <h2 className="terms-title">WellMart Winners Club terms, in plain words.</h2>
          <p>
            Please read these before you join. Payments are non-refundable, and only members who complete all four
            months are eligible for prizes.
          </p>
        </div>
        <div className="acc rv">
          {TERMS.map((t, i) => (
            <details key={t.title} open={open === i}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === i ? -1 : i);
                }}
              >
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                {t.title}
                <span className="plus" />
              </summary>
              <div className="body">{t.body}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
