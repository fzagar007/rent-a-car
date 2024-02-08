import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Cars from "../src/Pages/Cars";
import Team from "../src/Pages/Team";
import Contact from "../src/Pages/Contact";
import Blogs from "../src/Pages/Blogs";
import BlogsDetails from "../src/components/BlogsDetails";
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogsDetails />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
