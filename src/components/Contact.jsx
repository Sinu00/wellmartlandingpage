import Button from './Button';
import Icon from './Icon';
import { COMPANY, JOIN_LINK } from '../data';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="rv">
          <p className="eyebrow">Join from Kasaragod or anywhere</p>
          <h2>Join WellMart Winners Club in Kasaragod.</h2>
          <p className="lede">
            Message us on WhatsApp or call the office. We will confirm the official payment details and add you to the
            member updates.
          </p>
          <div className="cta">
            <Button href={JOIN_LINK} variant="white" external>
              WhatsApp us
            </Button>
            <Button href={`tel:${COMPANY.phone}`} variant="outline">
              Call {COMPANY.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className="addr rv">
          <div className="row">
            <Icon name="pin" />
            <div>
              <div className="k">Office</div>
              <div className="v">
                {COMPANY.addressLines.map((l) => (
                  <span key={l}>
                    {l}
                    <br />
                  </span>
                ))}
                <a href={COMPANY.mapsUrl} target="_blank" rel="noopener">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <Icon name="call" />
            <div>
              <div className="k">Phone</div>
              <div className="v">
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </div>
            </div>
          </div>
          <div className="row">
            <Icon name="mail" />
            <div>
              <div className="k">Email</div>
              <div className="v">
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
