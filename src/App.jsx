import React, { useEffect } from "react";
import "./App.css";

import Lenis from "lenis";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";

import { LeadProvider, useLead } from "./context/LeadContext";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LeadModal from "./components/common/LeadModal";
import WhatsAppButton from "./components/common/WhatsAppButton";
import MobileBottomBar from "./components/common/MobileBottomBar";

/* =========================================================
   PAGES
========================================================= */

import Home from "./pages/Home";
import SubsidyPage from "./pages/SubsidyPage";
import ResidentialSolarPage from "./pages/ResidentialSolarPage";
import CommercialSolarPage from "./pages/CommercialSolarPage";
import IndustrialSolarPage from "./pages/IndustrialSolarPage";
import SolarSolutions from "./pages/SolarSolutions";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";

import AdvancedCalculator from "./components/calculator/AdvancedCalculator";

import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import PartnerPage from "./pages/PartnerPage";
import CityLandingPage from "./pages/CityLandingPage";

import { X, ArrowRight, Zap, IndianRupee, Leaf } from "lucide-react";

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

/* =========================================================
   DYNAMIC CITY PAGE
========================================================= */

function CityRoute() {
  const { cityKey } = useParams();

  return <CityLandingPage cityKey={cityKey || "gurugram"} />;
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal() {
  const { selectedProject, setSelectedProject, openLeadModal } = useLead();

  if (!selectedProject) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-blue-900/70
        p-4
        backdrop-blur-md
      "
    >
      <div
        className="
          relative
          my-8
          w-full
          max-w-3xl
          overflow-hidden
          rounded-[28px]
          border
          border-[#E2E2E2]
          bg-white
          shadow-[0_30px_90px_rgba(16,24,40,0.25)]
        "
      >
        {/* Image */}
        <div className="relative h-64 sm:h-72">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="size-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/40
              via-transparent
              to-transparent
            "
          />

          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="
              absolute
              right-4
              top-4
              flex
              size-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-blue-900/70
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-blue-900
            "
          >
            <X className="size-4" />
          </button>

          {/* Capacity */}
          <span
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              bg-white/95
              px-3
              py-1.5
              text-xs
              font-semibold
              text-blue-900
              backdrop-blur-md
            "
          >
            {selectedProject.capacity} • {selectedProject.systemType}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-indigo-600
            "
          >
            {selectedProject.clientSector} · {selectedProject.city}
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-blue-900
            "
          >
            {selectedProject.title}
          </h2>

          {/* Stats */}
          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {/* Output */}
            <div
              className="
                rounded-2xl
                border
                border-[#E6E6E6]
                bg-[#FAFAFA]
                p-4
              "
            >
              <Zap className="size-4 text-indigo-600" />

              <p className="mt-3 text-[10px] text-[#585858]">Annual Output</p>

              <p className="mt-1 text-sm font-semibold text-blue-900">
                {selectedProject.annualGeneration}
              </p>
            </div>

            {/* Savings */}
            <div
              className="
                rounded-2xl
                border
                border-emerald-100
                bg-emerald-50/60
                p-4
              "
            >
              <IndianRupee className="size-4 text-emerald-600" />

              <p className="mt-3 text-[10px] text-emerald-700">
                Annual Savings
              </p>

              <p className="mt-1 text-sm font-semibold text-emerald-700">
                {selectedProject.annualSavings}
              </p>
            </div>

            {/* CO2 */}
            <div
              className="
                rounded-2xl
                border
                border-[#E6E6E6]
                bg-[#FAFAFA]
                p-4
              "
            >
              <Leaf className="size-4 text-indigo-600" />

              <p className="mt-3 text-[10px] text-[#585858]">CO₂ Reduced</p>

              <p className="mt-1 text-sm font-semibold text-blue-900">
                {selectedProject.co2Reduction}
              </p>
            </div>
          </div>

          {/* Details */}
          <div
            className="
              mt-6
              space-y-4
              text-sm
              leading-7
              text-[#585858]
            "
          >
            <p>
              <strong className="font-semibold text-blue-900">
                The Challenge:
              </strong>{" "}
              {selectedProject.challenge}
            </p>

            <p>
              <strong className="font-semibold text-blue-900">
                Engineering Solution:
              </strong>{" "}
              {selectedProject.solution}
            </p>

            <p>
              <strong className="font-semibold text-blue-900">
                Equipment Deployed:
              </strong>{" "}
              {selectedProject.equipmentUsed}
            </p>

            <p>
              <strong className="font-semibold text-blue-900">
                Verified Result:
              </strong>{" "}
              {selectedProject.verifiedResult}
            </p>
          </div>

          {/* Bottom */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-4
              border-t
              border-[#E6E6E6]
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-xs text-[#585858]">
              Completion Timeline:{" "}
              <strong className="font-semibold text-blue-900">
                {selectedProject.completionTime}
              </strong>
            </p>

            <button
              type="button"
              onClick={() => {
                const project = selectedProject;

                setSelectedProject(null);

                openLeadModal({
                  propertyType: project.category
                    ?.toLowerCase()
                    .includes("industrial")
                    ? "industrial"
                    : project.category?.toLowerCase().includes("residential")
                      ? "residential"
                      : "commercial",

                  systemPreference: project.systemType,
                });
              }}
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-indigo-600
                px-6
                py-3
                text-xs
                font-semibold
                text-white
                transition-colors
                hover:bg-indigo-700
                sm:w-auto
              "
            >
              Get Similar Solar Proposal
              <ArrowRight
                className="
                  size-3.5
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ARTICLE MODAL
========================================================= */

function ArticleModal() {
  const { selectedArticle, setSelectedArticle } = useLead();

  if (!selectedArticle) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-blue-900/70
        p-4
        backdrop-blur-md
      "
    >
      <div
        className="
          relative
          my-8
          w-full
          max-w-3xl
          overflow-hidden
          rounded-[28px]
          border
          border-[#E2E2E2]
          bg-white
          shadow-[0_30px_90px_rgba(16,24,40,0.25)]
        "
      >
        {/* Image */}
        <div className="relative h-56 sm:h-64">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="size-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />

          <button
            type="button"
            onClick={() => setSelectedArticle(null)}
            className="
              absolute
              right-4
              top-4
              flex
              size-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-blue-900/70
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-blue-900
            "
          >
            <X className="size-4" />
          </button>

          <span
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              bg-white/95
              px-3
              py-1.5
              text-[11px]
              font-semibold
              text-blue-900
            "
          >
            {selectedArticle.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          <div
            className="
              text-xs
              font-medium
              text-[#585858]
            "
          >
            {selectedArticle.date} • {selectedArticle.readTime} • By{" "}
            {selectedArticle.author}
          </div>

          <h2
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-blue-900
            "
          >
            {selectedArticle.title}
          </h2>

          <div
            className="
              mt-6
              whitespace-pre-line
              text-sm
              leading-7
              text-[#4E4E4E]
            "
          >
            {selectedArticle.content}
          </div>

          <div
            className="
              mt-7
              flex
              justify-end
              border-t
              border-[#E6E6E6]
              pt-5
            "
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="
                rounded-full
                bg-indigo-600
                px-6
                py-3
                text-xs
                font-semibold
                text-white
                transition-colors
                hover:bg-indigo-700
              "
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP LAYOUT
========================================================= */

function AppLayout() {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-white
        pb-16
        font-sans
        text-blue-900
        selection:bg-indigo-600
        selection:text-white
        lg:pb-0
      "
    >
      <ScrollToTop />

      <Header />

      <main className="flex-1">
        <Routes>
          {/* =============================
              MAIN
          ============================== */}

          <Route path="/" element={<Home />} />

          <Route path="/subsidies" element={<SubsidyPage />} />

          {/* =============================
              SOLAR SOLUTIONS
          ============================== */}

          <Route path="/solutions" element={<SolarSolutions />} />

          <Route path="/solar/residential" element={<ResidentialSolarPage />} />

          <Route path="/solar/commercial" element={<CommercialSolarPage />} />

          <Route path="/solar/industrial" element={<IndustrialSolarPage />} />

          {/* =============================
              COMPANY
          ============================== */}

          <Route path="/about" element={<AboutUs />} />

          <Route path="/services" element={<Services />} />

          <Route path="/products" element={<Products />} />

          <Route path="/projects" element={<Projects />} />

          {/* =============================
              TOOLS
          ============================== */}

          <Route path="/calculator" element={<AdvancedCalculator />} />

          {/* =============================
              CONTENT
          ============================== */}

          <Route path="/resources" element={<ResourcesPage />} />

          {/* =============================
              BUSINESS
          ============================== */}

          <Route path="/partner" element={<PartnerPage />} />

          <Route path="/contact" element={<ContactPage />} />

          {/* =============================
              CITY LANDING PAGES
          ============================== */}

          <Route path="/solar-city/:cityKey" element={<CityRoute />} />

          {/* Optional SEO-friendly direct aliases */}

          <Route
            path="/solar-in-gurugram"
            element={<CityLandingPage cityKey="gurugram" />}
          />

          <Route
            path="/solar-in-delhi"
            element={<CityLandingPage cityKey="delhi" />}
          />

          <Route
            path="/solar-in-rewari"
            element={<CityLandingPage cityKey="rewari" />}
          />

          {/* =============================
              404
          ============================== */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modal */}
      <LeadModal />

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Mobile Bottom Bar */}
      <MobileBottomBar />

      {/* Project Modal */}
      <ProjectModal />

      {/* Article Modal */}
      <ArticleModal />
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  /* =============================================
      LENIS SMOOTH SCROLL
  ============================================== */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,

      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);

      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);

      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <LeadProvider>
        <AppLayout />
      </LeadProvider>
    </BrowserRouter>
  );
}
