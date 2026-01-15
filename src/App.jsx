import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./Components/homepage/Header";
import Footer from "./Components/homepage/Footer";
import Products from "./Pages/Products";
import Support from "./Pages/Support";
import Page404 from "./Pages/Page404";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreLocator from "./Pages/StoreLocator";
import CategoryProducts from "./Components/CategoryProducts";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/Cart";
import Breadcrumbs from "./Components/Breadcrumbs";
import Blogs from "./Components/Blogs";
import BlogDetails from "./Components/BlogDetails";
import Policies from "./Components/Policies";
import Ticker from "./Components/Ticker";
import LiveActivity from "./Components/LiveActivity";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
      <LiveActivity />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<CategoryProducts />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <Footer />
        <Ticker />
      </BrowserRouter>
    </>
  );
}

export default App;
