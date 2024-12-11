import '../Css/StoreLocator.css';
import { LuCalendar , LuMapPin , LuPhone } from "react-icons/lu";



const StoreLocator = () => {
  

  return (
    <>
      <section className="store-locator-container">
        <div className="store-location">
          <h2>Alberto Watch Company</h2>

        <ul className="store-info">
          <li className="store-opening-hours">
            <div className="days">
            <LuCalendar className="store-icon" />
              <h5>Mondays - Fridays</h5>
            </div>  
            <p>8.00am - 5:30pm</p>
          </li>



          <li className="store-opening-hours">
            <div className="location">
            <LuMapPin className="store-icon" />
              <h5>106 Close, Banana Island, Eti Osa 101003, Lagos</h5>
            </div>  
            <p>Event Address</p>
          </li>



          <li className="store-opening-hours">
            <div className="phone">
            <LuPhone className="store-icon" />
              <h5>+234-8033566520</h5>
            </div>
            <p>Phone Number</p>  
          </li>


        </ul>


        </div>
        <div className="g-map">
          
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=106%20Close,%20Banana%20Island,%20Eti%20Osa%20101003,%20Lagos+(Alberto_Watches_Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
        </div>
      </section>
    </>
  );
};

export default StoreLocator;
