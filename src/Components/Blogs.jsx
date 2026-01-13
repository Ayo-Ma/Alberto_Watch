import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Blogs.css";
import { LuSearch, LuClock3, LuTag } from "react-icons/lu";

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const BlogCardSkeleton = () => (
  <div className="blogs__card blogs__card--skeleton" aria-hidden="true">
    <div className="blogs__imgSk" />
    <div className="blogs__body">
      <div className="blogs__metaSk" />
      <div className="blogs__titleSk" />
      <div className="blogs__textSk" />
      <div className="blogs__textSk blogs__textSk--short" />
    </div>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        setStatus("loading");
        const response = await fetch("/blogs.json");
        const data = await response.json();
        if (!isMounted) return;

        setBlogs(data.blogs || []);
        setStatus("ready");
      } catch (error) {
        console.error("Error fetching blogs:", error);
        if (isMounted) setStatus("error");
      }
    };

    fetchBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set((blogs || []).map((b) => b.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [blogs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (blogs || [])
      .filter((b) => (category === "All" ? true : b.category === category))
      .filter((b) => {
        if (!q) return true;
        return (
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.tags?.some((t) => String(t).toLowerCase().includes(q))
        );
      })
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }, [blogs, query, category]);

  return (
    <div className="blogs">
      <header className="blogs__hero">
        <div className="blogs__heroInner">
          <p className="blogs__eyebrow">Insights</p>
          <h1 className="blogs__title">The Alberto Journal</h1>
          <p className="blogs__subtitle">
            Practical guides, care tips, and watch knowledge—written for people who
            actually wear their timepieces.
          </p>

          <div className="blogs__controls">
            <div className="blogs__search">
              <LuSearch className="blogs__searchIcon" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, tags, or topics..."
                aria-label="Search blog posts"
              />
            </div>

            <div className="blogs__filter">
              <LuTag className="blogs__filterIcon" aria-hidden="true" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Filter by category"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="blogs__wrap">
        {status === "loading" && (
          <div className="blogs__grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="blogs__state">
            <p className="blogs__stateTitle">Couldn’t load articles.</p>
            <p className="blogs__stateText">Check your connection and try again.</p>
          </div>
        )}

        {status === "ready" && filtered.length === 0 && (
          <div className="blogs__state">
            <p className="blogs__stateTitle">No results found.</p>
            <p className="blogs__stateText">
              Try a different keyword or switch categories.
            </p>
          </div>
        )}

        {status === "ready" && filtered.length > 0 && (
          <div className="blogs__grid">
            {filtered.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="blogs__card"
                aria-label={`Read: ${blog.title}`}
              >
                <div className="blogs__imgWrap">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </div>

                <div className="blogs__body">
                  <div className="blogs__meta">
                    <span className="blogs__pill">{blog.category}</span>
                    <span className="blogs__dot" aria-hidden="true">
                      •
                    </span>
                    <span className="blogs__date">{formatDate(blog.publishedAt)}</span>
                    <span className="blogs__dot" aria-hidden="true">
                      •
                    </span>
                    <span className="blogs__time">
                      <LuClock3 aria-hidden="true" /> {blog.readTime} min read
                    </span>
                  </div>

                  <h2 className="blogs__cardTitle">{blog.title}</h2>
                  <p className="blogs__excerpt">{blog.excerpt}</p>

                  <div className="blogs__cta">
                    <span className="blogs__ctaText">Read article</span>
                    <span className="blogs__ctaArrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Blogs;
