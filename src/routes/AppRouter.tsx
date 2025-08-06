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
const About = React.lazy(() => import('@/pages/About'));
const News = React.lazy(() => import('@/pages/News'));
const CaseStudies = React.lazy(() => import('@/pages/CaseStudies'));
const Careers = React.lazy(() => import('@/pages/Careers'));
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
            <Route path="/intelligent-transformation" element={<IntelligentTransformation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/government" element={<IndustryGovernment />} />
            <Route path="/industries/manufacturing" element={<IndustryManufacturing />} />
            <Route path="/industries/financial" element={<IndustryFinancial />} />
            <Route path="/industries/education" element={<IndustryEducation />} />
            <Route path="/industries/retail" element={<IndustryRetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
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