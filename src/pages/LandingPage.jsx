import Navbar from '../components/common/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SocialProofBar from '../components/landing/SocialProofBar';
import ProblemSolution from '../components/landing/ProblemSolution';
import ValueProposition from '../components/landing/ValueProposition';
import HowItWorks from '../components/landing/HowItWorks';
import LearningPaths from '../components/landing/LearningPaths';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/common/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSolution />
      <ValueProposition />
      <HowItWorks />
      <LearningPaths />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;