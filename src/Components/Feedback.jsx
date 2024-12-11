
import '../Css/Feedback.css';

const Feedback = () => (
  <form className="feedback-form">
    <label>
      Rate Us
      <select>
        <option value="">--Select Rating--</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
    </label>
    <label>
      Comments
      <textarea placeholder="Your Feedback" rows="5" />
    </label>
    <button type="submit">Submit Feedback</button>
  </form>
);

export default Feedback;
