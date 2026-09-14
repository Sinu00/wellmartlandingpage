import { useRef } from 'react';
import { useTilt } from '../hooks/usePointerFx';
import Icon from './Icon';
import logo from '../assets/logo-white.png';
import { CHANNELS, MONTHLY_FEE, MONTH_COUNT, PLAN_TOTAL, TOTAL_WINNERS, formatINR } from '../data';

function MemberTicket() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <div className="ticket-card" ref={ref}>
      <div className="row">
        <img className="brand" src={logo} alt="WellMart" />
        <span className="k">Member</span>
      </div>
      <div className="dash" />
      <div className="row">
        <div>
          <div className="k">Plan</div>
          <div className="v">
            {formatINR(MONTHLY_FEE)} × {MONTH_COUNT}
          </div>
        </div>
        <div className="end">
          <div className="k">Total</div>
          <div className="v">{formatINR(PLAN_TOTAL)}</div>
        </div>
      </div>
      <div className="row">
        <div>
          <div className="k">Draws entered</div>
          <div className="v">
            {MONTH_COUNT} of {MONTH_COUNT}
          </div>
        </div>
        <div className="end">
          <div className="k">Winners</div>
          <div className="v">{TOTAL_WINNERS}</div>
        </div>
      </div>
      <div className="dash" />
      <div className="barcode" aria-hidden="true" />
    </div>
  );
}

export default function LiveDraw() {
  return (
    <section className="section live" id="draw">
      <div className="wrap">
        <div className="section-head rv">
          <p className="eyebrow">Transparent by design</p>
          <h2>Every draw happens in front of you.</h2>
        </div>
        <div className="live-grid">
          <div className="live-card main rv">
            <span className="live-badge">Monthly · Live</span>
            <h3>Drawn at the WellMart office, in the presence of participants and the public.</h3>
            <p>
              The draw is also broadcast on YouTube Live, so members anywhere can watch it as it happens. Winners and
              updates are then posted on WhatsApp and Instagram.
            </p>
            <div className="channels">
              {CHANNELS.map((c) => (
                <div className={`channel ${c.key}`} key={c.key}>
                  <div className="ic">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <b>{c.name}</b>
                    <span>{c.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="live-card ticket rv">
            <MemberTicket />
          </div>
        </div>
      </div>
    </section>
  );
}
