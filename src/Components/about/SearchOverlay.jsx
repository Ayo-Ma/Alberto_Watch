/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/SearchOverlay.css";
import { LuSearch, LuX, LuArrowRight } from "react-icons/lu";

const SearchOverlay = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const hint = useMemo(() => {
    if (!searchTerm.trim()) return "Try “vintage”, “smart”, or a product name.";
    return `Showing matches for “${searchTerm.trim()}”`;
  }, [searchTerm]);

  useEffect(() => {
    if (!isVisible) {
      setSearchTerm("");
      setFilteredResults([]);
      setLoading(false);
    }
  }, [isVisible]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isVisible) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible, onClose]);

  useEffect(() => {
    const fetchProducts = async () => {
      const term = searchTerm.trim();
      if (!term) {
        setFilteredResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch("/products.json");
        const data = await response.json();

        const allProducts = Object.entries(data).flatMap(([category, products]) =>
          products.map((product) => ({ ...product, category }))
        );

        const lower = term.toLowerCase();
        const results = allProducts
          .filter(
            (product) =>
              product.name.toLowerCase().includes(lower) ||
              product.category.toLowerCase().includes(lower)
          )
          .slice(0, 8);

        setFilteredResults(results);
      } catch (error) {
        console.error("Error fetching products for search:", error);
        setFilteredResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      onClick={onClose}
      className={isVisible ? "siteSearch siteSearch--open" : "siteSearch"}
      aria-hidden={!isVisible}
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <div onClick={(e) => e.stopPropagation()} className="siteSearch__panel">
        <div className="siteSearch__top">
          <div className="siteSearch__titleWrap">
            <h2 className="siteSearch__title">Search products</h2>
            <p className="siteSearch__sub">{hint}</p>
          </div>

          <button className="siteSearch__close" onClick={onClose} aria-label="Close search">
            <LuX />
          </button>
        </div>

        <div className="siteSearch__inputWrap">
          <LuSearch className="siteSearch__icon" />
          <input
            autoFocus
            type="text"
            placeholder="Search by name or category…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Empty state */}
        {!searchTerm.trim() && (
          <div className="siteSearch__empty">
            <p className="siteSearch__emptyTitle">Quick picks</p>
            <div className="siteSearch__chips">
              {["luxury", "vintage", "sports", "smart"].map((c) => (
                <button
                  key={c}
                  className="siteSearch__chip"
                  onClick={() => handleNavigate(`/products/${c}`)}
                  type="button"
                >
                  {c}
                  <LuArrowRight />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="siteSearch__state">
            <div className="siteSearch__skeletonRow" />
            <div className="siteSearch__skeletonRow" />
            <div className="siteSearch__skeletonRow" />
          </div>
        )}

        {/* Results */}
        {!loading && filteredResults.length > 0 && (
          <ul className="siteSearch__results" role="listbox">
            {filteredResults.map((result) => (
              <li
                key={`${result.category}-${result.id}`}
                className="siteSearch__result"
                role="option"
                tabIndex={0}
                onClick={() => handleNavigate(`/products/${result.category}/${result.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleNavigate(`/products/${result.category}/${result.id}`);
                }}
              >
                <img className="siteSearch__thumb" src={result.image} alt={result.name} />
                <div className="siteSearch__meta">
                  <p className="siteSearch__name">{result.name}</p>
                  <p className="siteSearch__cat">{result.category} • ${Number(result.price).toFixed(0)}</p>
                </div>
                <LuArrowRight className="siteSearch__go" />
              </li>
            ))}
          </ul>
        )}

        {/* No results */}
        {!loading && searchTerm.trim() && filteredResults.length === 0 && (
          <div className="siteSearch__state">
            <p className="siteSearch__noTitle">No matches found.</p>
            <p className="siteSearch__noSub">Try a shorter keyword or search by category (e.g., “vintage”).</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
