import Navbar from "@/components/src/Navbar";
import HeroSection from "@/components/src/HeroSection";
import ServicesSection from "@/components/src/ServicesSection";
import BookCallCTA from "@/components/src/BookCallCTA";
import AboutSection from "@/components/src/AboutSection";
import LiveSessionsSection from "@/components/src/LiveSessionsSection";
import CollaborateSection from "@/components/src/CollaborateSection";
import MentorshipProcessSection from "@/components/src/MentorshipProcessSection";
import TimelineSection from "@/components/src/TimelineSection";
import PortfolioSection from "@/components/src/PortfolioSection";
import BrandCollaborationSection from "@/components/src/BrandCollaborationSection";
import CertificationsSection from "@/components/src/CertificationsSection";
import ContactSection from "@/components/src/ContactSection";
import Footer from "@/components/src/Footer";
import GallerySection from "@/components/src/GallerySection";


const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <BookCallCTA />
    <AboutSection />
    <CollaborateSection />
    <MentorshipProcessSection />
    <BookCallCTA />
    <LiveSessionsSection />
    <TimelineSection />
    <PortfolioSection />
    <GallerySection />
    <BrandCollaborationSection />
    <BookCallCTA />
    <CertificationsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
