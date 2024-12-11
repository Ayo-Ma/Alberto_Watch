import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        const foundBlog = data.blogs.find((blog) => blog.id === parseInt(id));
        setBlog(foundBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
