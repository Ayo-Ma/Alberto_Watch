import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Css/ProductDetails.css";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React Icons
import {
  GiCompass,
  GiWaterSplash,
  GiStopwatch,
  GiMountainCave,
  GiDivingHelmet,
  GiLeatherBoot,
  GiFlashlight,
  GiCutDiamond,
  GiGoldBar,
  GiDiamondRing,
  GiSwissArmyKnife,
  GiHealthCapsule,
  GiGymBag,
  GiRetroController,
  GiWaterDrop,
  GiStarMedal,
} from "react-icons/gi";
import {
  MdTrendingUp,
  MdNightsStay,
  MdSmartDisplay,
  MdNfc,
  MdSettings,
  MdWatch,
  MdWaterDrop,
  MdFace,
} from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RiEmotionSadLine } from "react-icons/ri";
import {
  FaBluetoothB,
  FaBatteryThreeQuarters,
  FaBatteryFull,
  FaRunning,
} from "react-icons/fa";

const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const formatPrice = useMemo(
    () => (value) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(Number(value)),
    []
  );

  const notify = (name) => {
    toast.success(`Added “${name}” to your bag.`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const found = (data[category] || []).find((item) => item.id === parseInt(id));
        setProduct(found || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      }
    };

    fetchProductDetails();
  }, [category, id]);

  const iconMap = {
    GiCompass: <GiCompass />,
    GiWaterSplash: <GiWaterSplash />,
    GiRetroController: <GiRetroController />,
    GiStarMedal: <GiStarMedal />,
    GiHealthCapsule: <GiHealthCapsule />,
    GiWaterDrop: <GiWaterDrop />,
    GiGymBag: <GiGymBag />,
    MdFace: <MdFace />,
    GiStopwatch: <GiStopwatch />,
    FaRunning: <FaRunning />,
    FaBatteryFull: <FaBatteryFull />,
    GiMountainCave: <GiMountainCave />,
    GiDivingHelmet: <GiDivingHelmet />,
    GiLeatherBoot: <GiLeatherBoot />,
    GiFlashlight: <GiFlashlight />,
    GiCutDiamond: <GiCutDiamond />,
    GiGoldBar: <GiGoldBar />,
    GiDiamondRing: <GiDiamondRing />,
    GiSwissArmyKnife: <GiSwissArmyKnife />,
    MdTrendingUp: <MdTrendingUp />,
    MdNightsStay: <MdNightsStay />,
    MdSmartDisplay: <MdSmartDisplay />,
    MdNfc: <MdNfc />,
    MdSettings: <MdSettings />,
    MdWaterDrop: <MdWaterDrop />,
    MdWatch: <MdWatch />,
    FiHeart: <FiHeart />,
    RiEmotionSadLine: <RiEmotionSadLine />,
    FaBluetoothB: <FaBluetoothB />,
    FaBatteryThreeQuarters: <FaBatteryThreeQuarters />,
  };

  if (!product) {
    return (
      <main className="pdp">
        <div className="pdp__container">
          <div className="pdp__loading">
            <div className="pdp__sk pdp__sk--media" />
            <div className="pdp__sk pdp__sk--title" />
            <div className="pdp__sk pdp__sk--text" />
            <div className="pdp__sk pdp__sk--text" />
            <div className="pdp__sk pdp__sk--btn" />
          </div>
        </div>
      </main>
    );
  }

  // Fallback rating/reviews if JSON doesn't have them yet
  const rating = product.rating ?? (4.3 + ((product.id * 7) % 6) / 10);
  const reviews = product.reviews ?? (40 + (product.id * 13) % 260);

  const highlights = (product.technologies || []).slice(0, 3).map((t) => t.name);

  const handleAdd = () => {
    addToCart(product);
    notify(product.name);
  };

  return (
    <main className="pdp">
      <div className="pdp__container">
        <div className="pdp__breadcrumbs">
          <Link to="/products" className="pdp__crumb">Products</Link>
          <span className="pdp__sep">/</span>
          <Link to={`/products/${category}`} className="pdp__crumb">{category}</Link>
          <span className="pdp__sep">/</span>
          <span className="pdp__crumb pdp__crumb--current">{product.name}</span>
        </div>

        <section className="pdp__top">
          <div className="pdp__media">
            <img src={product.image} alt={product.name} loading="eager" />
          </div>

          <aside className="pdp__buyBox" aria-label="Purchase options">
            <p className="pdp__eyebrow">Alberto Watch Company</p>

            <h1 className="pdp__title">{product.name}</h1>

            <div className="pdp__rating" aria-label={`Rated ${rating} out of 5`}>
              <span className="pdp__stars" aria-hidden="true">
                {"★★★★★".slice(0, Math.round(rating))}
                <span className="pdp__starsMuted">
                  {"★★★★★".slice(Math.round(rating))}
                </span>
              </span>
              <span className="pdp__ratingText">{rating.toFixed(1)} • {reviews} reviews</span>
            </div>

            <p className="pdp__price">{formatPrice(product.price)}</p>

            <p className="pdp__desc">{product.description}</p>

            {highlights.length > 0 && (
              <div className="pdp__highlights" aria-label="Key highlights">
                {highlights.map((h, i) => (
                  <span key={i} className="pdp__chip">{h}</span>
                ))}
              </div>
            )}

            <div className="pdp__trust">
              <span>Fast delivery</span>
              <span className="dot" aria-hidden="true">•</span>
              <span>Free returns</span>
              <span className="dot" aria-hidden="true">•</span>
              <span>Secure checkout</span>
            </div>

            <button className="pdp__cta" onClick={handleAdd} type="button">
              Add to bag
            </button>

            <p className="pdp__micro">
              Ships in 24–48 hours. Unworn returns accepted within 14 days.
            </p>
          </aside>
        </section>

        <section className="pdp__details">
          <div className="pdp__detailsHeader">
            <h2 className="pdp__sectionTitle">Designed for real life</h2>
            <p className="pdp__sectionSubtitle">
              Features that matter, explained simply — so you know exactly what you’re buying.
            </p>
          </div>

          <div className="pdp__specGrid">
            {(product.technologies || []).map((tech, index) => (
              <div key={index} className="pdp__specCard">
                <div className="pdp__specIcon" aria-hidden="true">
                  {iconMap[tech.icon] ?? <MdSettings />}
                </div>
                <div className="pdp__specBody">
                  <h3 className="pdp__specTitle">{tech.name}</h3>
                  <p className="pdp__specText">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    
      <div className="pdp__sticky" role="region" aria-label="Quick add to bag">
        <div className="pdp__stickyInner">
          <div className="pdp__stickyInfo">
            <p className="pdp__stickyName">{product.name}</p>
            <p className="pdp__stickyPrice">{formatPrice(product.price)}</p>
          </div>
          <button className="pdp__stickyBtn" onClick={handleAdd} type="button">
            Add
          </button>
        </div>
      </div>

      <ToastContainer />
    </main>
  );
};

export default ProductDetails;
