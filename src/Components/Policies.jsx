
import "../Css/Policies.css";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Policies= () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="policies">
      <h1>Policies</h1>
      <section id="shipping-policy" className="shipping-policy">
        <h2>Shipping Policy</h2>
        <p>  At Alberto Watches, we aim to deliver your orders promptly and securely. </p>
        <ul>
        <li> - Order Processing: All orders are processed within 1-3 business days. You’ll receive a confirmation email with tracking details once your order is shipped.</li>
        <li> - Shipping Options: We offer standard and express shipping options. Delivery times may vary depending on your location.</li>
        <li> - International Shipping: Duties and taxes for international shipments are the responsibility of the customer.</li>
        <li> - Shipping Delays: While we strive to meet delivery timelines, unforeseen delays may occur. We’ll notify you in case of any significant changes.</li>
        </ul>
      </section>
      <section id="return-policy" className="return-policy">
         <h2>  Return Policy</h2>
        <p>   We want you to be completely satisfied with your purchase. If you’re not, here’s how returns work:</p>
        <ul>
        <li> - Return Window: You can return your watch within 30 days of purchase in its original, unused condition.</li>
        <li> - Shipping Options: We offer standard and express shipping options. Delivery times may vary depending on your location.</li>
        <li> - Return Process: Contact our support team to initiate a return. Include proof of purchase and original packaging.</li>
        <li> - Refunds: Refunds will be processed to the original payment method within 7-10 business days after the returned item is received and inspected.</li>
        </ul>
      </section>
      <section id="privacy-policy" className="privacy-policy">
      <h2>Privacy Policy</h2>
        <p>   At Alberto Watches, protecting your privacy is our priority.</p>
        <ul>
        <li> - Data Collection: We collect personal data such as name, email, and address solely to process orders and improve your experience.</li>
        <li> - Shipping Options: We offer standard and express shipping options. Delivery times may vary depending on your location.</li>
        <li> - Data Usage: Your information is used for order fulfillment, customer support, and promotional offers (with your consent).</li>
        <li> - Third-Party Sharing: We do not sell or share your information with third parties, except for essential services like shipping.</li>
        </ul>
      </section>
      <section id="terms-of-service" className="terms-of-service">
        <h2>Terms of Service</h2>
        <p>By using our website, you agree to the following terms</p>
           <ul>
        <li> - Product Information: We strive to provide accurate descriptions of our products. However, minor variations may occur.</li>
        <li> - User Responsibilities: You agree to use our website for lawful purposes and not engage in activities that harm our operations.</li>
        <li> - Pricing and Availability: Prices and product availability are subject to change without prior notice.</li>
        <li> - Limitation of Liability: Alberto Watches is not responsible for damages caused by misuse of our products.</li>
        </ul>
      </section>
      <section id="warranty-policy">
        <h2>Warranty Policy</h2>
        <p>At Alberto Watches, we stand behind the quality of our products with a comprehensive warranty:</p>
        <ul>
          <li>Warranty Coverage: All watches are covered by a 2-year limited warranty from the date of purchase.</li>
          <li>Covered Issues: The warranty covers manufacturing defects such as movement, hands, and dial failures.</li>
          <li>Exclusions: The warranty does not cover damage caused by misuse, accidents, unauthorized repairs, or normal wear and tear (e.g., scratches, battery life).</li>
          <li>How to Claim: Contact our customer support team with proof of purchase and details of the issue. Our team will guide you through the warranty claim process.</li>
        </ul>
      </section>
    </div>
  );
};

export default Policies;



