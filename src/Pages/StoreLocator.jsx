import "../Css/StoreLocator.css";
import { Link } from "react-router-dom";
import { LuCalendar, LuMapPin, LuPhone, LuArrowUpRight } from "react-icons/lu";

const StoreLocator = () => {
  const address = "106 Close, Banana Island, Eti Osa 101003, Lagos";
  const phone = "+2348033566520";

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="store">
      <div className="store__container">
        <header className="store__header">
          <p className="store__eyebrow">Store locator</p>
          <h2 className="store__title">Visit the Alberto showroom</h2>
          <p className="store__subtitle">
            Try on pieces in person, get sizing help, and speak with a specialist. Walk-ins are welcome —
            appointments get priority.
          </p>
        </header>

        <div className="store__layout">
          {/* Left: Info Card */}
          <div className="store__card" aria-label="Store information">
            <div className="store__cardHeader">
              <h3 className="store__cardTitle">Alberto Watch Company</h3>
              <p className="store__cardHint">Lagos • Flagship store</p>
            </div>

            <ul className="store__list">
              <li className="store__item">
                <div className="store__itemTop">
                  <span className="store__icon" aria-hidden="true">
                    <LuCalendar />
                  </span>
                  <div>
                    <p className="store__label">Opening hours</p>
                    <p className="store__value">Mon – Fri, 8:00am – 5:30pm</p>
                  </div>
                </div>
                <p className="store__help">Closed on public holidays.</p>
              </li>

              <li className="store__item">
                <div className="store__itemTop">
                  <span className="store__icon" aria-hidden="true">
                    <LuMapPin />
                  </span>
                  <div>
                    <p className="store__label">Address</p>
                    <p className="store__value">{address}</p>
                  </div>
                </div>
                <a className="store__link" href={mapsLink} target="_blank" rel="noreferrer">
                  Get directions <LuArrowUpRight aria-hidden="true" />
                </a>
              </li>

              <li className="store__item">
                <div className="store__itemTop">
                  <span className="store__icon" aria-hidden="true">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="store__label">Phone</p>
                    <p className="store__value">{phone.replace("+234", "+234 ")}</p>
                  </div>
                </div>
                <a className="store__link" href={`tel:${phone}`}>
                  Call the store <LuArrowUpRight aria-hidden="true" />
                </a>
              </li>
            </ul>

            <div className="store__actions">
              <a className="store__btn store__btn--primary" href={mapsLink} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>

              <Link to="/support#book-visit" className="store__btn store__btn--ghost" href="/contact">
                Book a visit
              </Link>
            </div>

            <p className="store__micro">
              Tip: If you’re coming for a specific model, book ahead so we can reserve it for you.
            </p>
          </div>

          {/* Right: Map */}
          <div className="store__mapWrap" aria-label="Map">
            <iframe
              title="Alberto Watch Company location"
              width="100%"
              height="420"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&height=420&hl=en&q=106%20Close,%20Banana%20Island,%20Eti%20Osa%20101003,%20Lagos+(Alberto%20Watch%20Company)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
