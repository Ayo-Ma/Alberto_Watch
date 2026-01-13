import "../Css/Page404.css";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuHome, LuSearch } from "react-icons/lu";

const TornBag = () => {
  return (
    <div className="bagFloat" aria-hidden="true">
      <svg
        className="tornBagSvg"
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
  
        <ellipse cx="160" cy="262" rx="78" ry="18" className="bagShadow" />

     
        <g className="bagGroup">
          <path
            d="M100 112C100 103.163 107.163 96 116 96H204C212.837 96 220 103.163 220 112V236C220 246.493 211.493 255 201 255H119C108.507 255 100 246.493 100 236V112Z"
            className="bagBody"
          />

  
          <path
            d="M100 124C100 117.373 105.373 112 112 112H208C214.627 112 220 117.373 220 124V140H100V124Z"
            className="bagTop"
          />

          <path
            d="M128 112L140 124L156 110L170 126L186 112L204 128V140H128V112Z"
            className="bagTear"
          />

         
          <path
            d="M132 112C132 90.9086 145.909 76 160 76C174.091 76 188 90.9086 188 112"
            className="bagHandle"
          />
         
          <path
            d="M138 112C138 94.8792 149.194 82 160 82C170.806 82 182 94.8792 182 112"
            className="bagHandle2"
          />

        
          <path d="M146 150C140 176 140 210 146 236" className="bagCrease" />
          <path d="M176 150C182 176 182 210 176 236" className="bagCrease" />

         
          <g className="bagTag">
            <path
              d="M208 160C208 156.686 210.686 154 214 154H235C238.314 154 241 156.686 241 160V182C241 185.314 238.314 188 235 188H214C210.686 188 208 185.314 208 182V160Z"
              className="tagBody"
            />
            <circle cx="214.8" cy="160.8" r="2.4" className="tagHole" />
          </g>

         
          <path
            d="M232 108L240 116L234 122L226 114L232 108Z"
            className="bagParticle"
          />
        </g>
      </svg>
    </div>
  );
};

const Page404 = () => {
  return (
    <main className="page404" role="main">
      <section className="page404Card">
        <div className="page404Top">
          <span className="page404Badge">404</span>
          <span className="page404Meta">We couldn’t find that page</span>
        </div>

        <TornBag />

        <h1 className="page404Title">Looks like your bag tore mid-checkout.</h1>
        <p className="page404Sub">
          The page you’re trying to reach doesn’t exist (or it got moved). Use the buttons below to get back on track.
        </p>

        <div className="page404Actions">
          <Link to="/" className="btnPrimary">
            <LuHome /> Back to Home
          </Link>

          <Link to="/products" className="btnGhost">
            <LuSearch /> Browse Products
          </Link>

          <button className="btnLink" onClick={() => window.history.back()} type="button">
            <LuArrowLeft /> Go Back
          </button>
        </div>

        <p className="page404Hint">
          Tip: If you typed the URL manually, double-check the spelling.
        </p>
      </section>
    </main>
  );
};

export default Page404;
