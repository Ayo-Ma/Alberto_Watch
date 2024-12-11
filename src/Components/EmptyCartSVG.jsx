import '../Css/EmptyCartSVG.css'
const EmptyCartSVG = () => {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="100"
          height="100"
          fill="#ccc"
        >
          <path d="M7 4V2H5v2H2v2h1.11l.84 7.61c.04.33.21.63.45.84.24.21.56.33.9.33H17c.34 0 .66-.12.9-.33.24-.21.41-.51.45-.84L19.89 6H7zM17 12H8l-.69-6h10.39L17 12zm2 8c.55 0 1-.45 1-1s-.45-1-1-1c-.55 0-1 .45-1 1s.45 1 1 1zM8 20c.55 0 1-.45 1-1s-.45-1-1-1c-.55 0-1 .45-1 1s.45 1 1 1z" />
        </svg>
        <h2 style={{ color: "#777", marginTop: "20px" }}>Your cart is empty</h2>
        <p style={{ color: "#aaa" }}>
          Looks like you haven’t added anything to your cart yet.
        </p>
      </div>
    );
  };
  
  export default EmptyCartSVG;
  