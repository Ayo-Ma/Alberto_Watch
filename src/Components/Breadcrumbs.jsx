import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../Css/Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const { category, id } = useParams();
  const [productName, setProductName] = useState("");

  const paths = location.pathname.split("/").filter((path) => path);

 
  useEffect(() => {
    const fetchProductName = async () => {
      if (id) {
        try {
          const response = await fetch("/products.json");
          const data = await response.json();
          const product = (data[category] || []).find(
            (item) => item.id === parseInt(id)
          );
          if (product) {
            setProductName(product.name);
          }
        } catch (error) {
          console.error("Error fetching product details for breadcrumb:", error);
        }
      }
    };

    fetchProductName();
  }, [category, id]);

  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          let displayText = path.replace(/-/g, " ").toUpperCase();
          if (path === id && productName) {
            displayText = productName; 
          }

          return (
            <li key={to} className={isLast ? "breadcrumb-active" : ""}>
              {isLast ? (
                displayText
              ) : (
                <Link to={to}>{displayText}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
