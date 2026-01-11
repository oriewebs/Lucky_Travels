
import AboutUs from "./sections/Aboutus";
import AdventureSection from "./sections/AdventureSection";
import ContactUs from "./sections/ContactUs";
import CustomerReviews from "./sections/CustormerReview";
import Footer from "./sections/Footer";
import HeroSection from "./sections/hero";
import Navbar from "./sections/nav";

export default function Home() {
  return (
    <div>
      < Navbar />
      < HeroSection />
      < AdventureSection />
      < AboutUs />
      < CustomerReviews />
      <ContactUs/>
      <Footer />

    </div>
  );
}
