import "../../Css/About-Highlight.css";
import WatchGridItem from "./WatchGridItem";
import imge1 from "../../assets/about-grid-1.avif";
import imge2 from "../../assets/about-grid-2.avif";
import imge3 from "../../assets/image-grid-3.webp";
import imge4 from "/images/smart/smartWatch1.webp";
import { Link } from "react-router-dom";



const watchData = [
	{
		image:imge1,
		title: "Luxury Watch",
		description: "Elegant design for timeless style.",
		link: "products/luxury",
	  },
	  {
		image:imge2,
		title: "Vintage Watch",
		description: "Classic pieces that never go out of style.",
		link: "products/vintage",
	  },
	  {
		image: imge3,
		title: "Smart Watch",
		description: "Advanced features for modern living.",
		link: "products/smart",
	  },
	  {
		image: imge4,
		title: "Sport Watch",
		description: "Durable and stylish for active lifestyles.",
		link: "products/sports",
	  },
]

const About = () => {
  return (
    <section className="About-Highlight">
      <div className="about-intro">
        <h1>ABOUT US</h1>
        <p>
          Timeless Designs, Unmatches creaftmanship, and a legacy of excellence
          since 1985
        </p>
	
      </div>
	  <div className="split-col">
	  <div className="More-Details">
		<h3>Who We Are</h3>
		<p> <span className="emp">Alberto Watch Company</span> is your trusted destination for luxury watches, offering top brands and exceptional services.</p>
		<div className="what-sets-us-apart">
			<h3>What Sets Us Apart</h3>
			<p>Curated collections of brands like Rolex, Michael Kors, and Bulova.</p>
			<p>Expert watch repair and appraisal services.</p>
			<p>A legacy of innovation and timeless elegance.</p>
			<h4 className="italic">Luxury. Precision. Legacy.</h4>

		<Link to="/about" className="about-us-links">Explore Our Story</Link>
		</div>
	  </div>

	  <div className="watches-image-grid">
  {watchData.map((watch,index)=> (
	<WatchGridItem key={index} image={watch.image} title={watch.title} description={watch.description} link={watch.link} />
  ))}
</div>
</div>

    </section>
  );
};

export default About;
