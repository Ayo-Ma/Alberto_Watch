import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Css/BlogDetails.css";
import { LuArrowLeft, LuClock3, LuShare2 } from "react-icons/lu";

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const BlogDetailsSkeleton = () => (
  <div className="bd bd--skeleton" aria-hidden="true">
    <div className="bd__heroSk" />
    <div className="bd__wrap">
      <div className="bd__metaSk" />
      <div className="bd__titleSk" />
      <div className="bd__lineSk" />
      <div className="bd__lineSk" />
      <div className="bd__lineSk bd__lineSk--short" />
    </div>
  </div>
);

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        setStatus("loading");
        const res = await fetch("/blogs.json");
        const data = await res.json();
        if (!isMounted) return;

        setBlogs(data.blogs || []);
        setStatus("ready");
      } catch (e) {
        console.error(e);
        if (isMounted) setStatus("error");
      }
    };

    fetchBlogs();
    return () => (isMounted = false);
  }, []);

  const blog = useMemo(
    () => (blogs || []).find((b) => Number(b.id) === Number(id)),
    [blogs, id]
  );

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (el.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: blog?.title || "Alberto Journal",
      text: blog?.excerpt || "",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied.");
      }
    } catch {
      // ignore
    }
  };

  if (status === "loading") return <BlogDetailsSkeleton />;

  if (status === "error" || !blog) {
    return (
      <div className="bd">
        <div className="bd__wrap">
          <p className="bd__errTitle">Article not available.</p>
          <p className="bd__errText">Go back to the journal and pick another one.</p>
          <Link className="bd__back" to="/blog">
            <LuArrowLeft aria-hidden="true" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bd">
      <div className="bd__progress" style={{ width: `${progress}%` }} />

      <header className="bd__hero">
        <img src={blog.image} alt={blog.title} />
        <div className="bd__heroOverlay" />
        <div className="bd__heroInner">
          <p className="bd__kicker">{blog.category}</p>
          <h1 className="bd__title">{blog.title}</h1>
          <p className="bd__sub">{blog.excerpt}</p>

          <div className="bd__meta">
            <span className="bd__metaItem">{formatDate(blog.publishedAt)}</span>
            <span className="bd__dot" aria-hidden="true">•</span>
            <span className="bd__metaItem">
              <LuClock3 aria-hidden="true" /> {blog.readTime} min read
            </span>
            <span className="bd__dot" aria-hidden="true">•</span>
            <span className="bd__metaItem">By {blog.author}</span>
          </div>
        </div>
      </header>

      <div className="bd__wrap">
        <div className="bd__actions">
          <Link className="bd__back" to="/blog">
            <LuArrowLeft aria-hidden="true" /> Back to Blog
          </Link>

          <button className="bd__share" onClick={handleShare} type="button">
            <LuShare2 aria-hidden="true" /> Share
          </button>
        </div>

        <div className="bd__content">
          {blog.content.split("\n").map((line, idx) =>
            line.trim() ? <p key={idx}>{line}</p> : <br key={idx} />
          )}
        </div>

        {blog.tags?.length ? (
          <div className="bd__tags">
            {blog.tags.map((t) => (
              <span key={t} className="bd__tag">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default BlogDetails;
