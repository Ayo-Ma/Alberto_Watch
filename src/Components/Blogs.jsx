import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
