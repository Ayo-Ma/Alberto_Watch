import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { LuChevronRight, LuHome } from "react-icons/lu";
import "../Css/Breadcrumbs.css";

const titleCase = (str) =>
  str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Breadcrumbs = () => {
  const location = useLocation();
  const { category, id } = useParams();
  const [productName, setProductName] = useState("");

  const paths = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname]
  );

  useEffect(() => {
    let isMounted = true;

    const fetchProductName = async () => {
      if (!id || !category) return;

      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = (data[category] || []).find(
          (item) => item.id === Number(id)
        );

        if (isMounted) setProductName(product?.name || "");
      } catch (error) {
        console.error("Error fetching product details for breadcrumb:", error);
      }
    };

    fetchProductName();
    return () => {
      isMounted = false;
    };
  }, [category, id]);

  return (
    <nav className="bc" aria-label="Breadcrumb">
      <ol className="bc__list">
        <li className="bc__item">
          <Link className="bc__link bc__home" to="/" aria-label="Home">
            <LuHome className="bc__icon" />
            <span className="bc__homeText">Home</span>
          </Link>
        </li>

        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          let label = titleCase(path);

          // If current chunk is the product id, show product name
          if (id && path === id && productName) label = productName;

          return (
            <li key={to} className="bc__item">
              <LuChevronRight className="bc__sep" aria-hidden="true" />

              {isLast ? (
                <span className="bc__current" aria-current="page" title={label}>
                  {label}
                </span>
              ) : (
                <Link className="bc__link" to={to}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
