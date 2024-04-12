import { Routes, Route } from "react-router-dom";
import Home from "../Components/Features/Home";
import About from "../Components/Features/About";
import Service from "../Components/Features/Service";
import BlogGrid from "../Components/Features/BlogGrid";
import Details from "../Components/Features/Details";
import Price from "../Components/Features/Price";
import Feature from "../Components/Features/Feature";
import Team from "../Components/Features/Team";
import Testimonial from "../Components/Features/Testimonial";
import Quote from "../Components/Features/Quote";
import Contact from "../Components/Features/Contact";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="blog-grid" element={<BlogGrid />} />
        <Route path="details" element={<Details />} />
        <Route path="price" element={<Price />} />
        <Route path="feature" element={<Feature />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="quote" element={<Quote />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
