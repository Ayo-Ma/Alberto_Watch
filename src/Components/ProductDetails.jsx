import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/ProductDetails.css";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";

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
  GiStarMedal
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

  const notify = () => {
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = (data[category] || []).find(
          (item) => item.id === parseInt(id)
        );
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [category, id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  // Map the icon strings to React Icons components
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

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <button
          onClick={() => {
            addToCart(product);
            notify();
          }}
        >
          Add to Cart
        </button>
      </div>
      <div className="technologies">
        <h2>Key Technologies</h2>
        <div className="technology-cards">
          {product.technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{iconMap[tech.icon]}</div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
