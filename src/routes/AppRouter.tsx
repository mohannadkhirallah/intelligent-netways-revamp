import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Pages
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

// Lazy load other pages for better performance
const IntelligentTransformation = React.lazy(() => import('@/pages/IntelligentTransformation'));
const Services = React.lazy(() => import('@/pages/Services'));
const Solutions = React.lazy(() => import('@/pages/Solutions'));
const Industries = React.lazy(() => import('@/pages/Industries'));
const IndustryGovernment = React.lazy(() => import('@/pages/IndustryGovernment'));
const IndustryManufacturing = React.lazy(() => import('@/pages/IndustryManufacturing'));
const IndustryFinancial = React.lazy(() => import('@/pages/IndustryFinancial'));
const IndustryEducation = React.lazy(() => import('@/pages/IndustryEducation'));
const IndustryRetail = React.lazy(() => import('@/pages/IndustryRetail'));
const IndustryTelecom = React.lazy(() => import('@/pages/IndustryTelecom'));
const IndustryHealthcare = React.lazy(() => import('@/pages/IndustryHealthcare'));
const About = React.lazy(() => import('@/pages/About'));
const News = React.lazy(() => import('@/pages/News'));
const CaseStudies = React.lazy(() => import('@/pages/CaseStudies'));
const Partners = React.lazy(() => import('@/pages/Partners'));
const Careers = React.lazy(() => import('@/pages/Careers'));
const Locations = React.lazy(() => import('@/pages/Locations'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const Contact = React.lazy(() => import('@/pages/Contact'));

const AppRouter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <React.Suspense 
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intelligent" element={<IntelligentTransformation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/government" element={<IndustryGovernment />} />
            <Route path="/manufacture" element={<IndustryManufacturing />} />
            <Route path="/financialservices" element={<IndustryFinancial />} />
            <Route path="/education" element={<IndustryEducation />} />
            <Route path="/retail" element={<IndustryRetail />} />
            <Route path="/telecom" element={<IndustryTelecom />} />
            <Route path="/healthcare" element={<IndustryHealthcare />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/newslisting" element={<News />} />
            <Route path="/case-studies-listing" element={<CaseStudies />} />
            <Route path="/our-partners" element={<Partners />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/findlocation" element={<Locations />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/contactus" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;