import React, { useEffect, useRef, useState } from "react";
import { useLead } from "../../context/LeadContext";

import {
  Sun,
  Phone,
  Menu,
  X,
  ChevronDown,
  Home as HomeIcon,
  Building2,
  Factory,
  Calculator,
  BriefcaseBusiness,
} from "lucide-react";

export default function Header() {
  const { activePage, navigateTo, openLeadModal, config } = useLead();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutionsRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  };

  const navItemClass = (isActive) =>
    `text-sm lg:text-[15px] font-medium transition-all duration-300 ${isActive ? "text-blue-900" : "text-[#585858] hover:text-blue-900"
    }`;

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between lg:h-20.5">
          {/* =========================
              LEFT DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden flex-1 items-center gap-7 lg:flex">
            {/* Home */}
            <button
              onClick={() => handleNavClick("home")}
              className={navItemClass(activePage === "home")}
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick("about")}
              className={navItemClass(activePage === "about")}
            >
              About us
            </button>

            {/* Solar Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`
                  flex items-center gap-1.5
                  ${navItemClass(
                  activePage === "solutions" ||
                  activePage?.includes("solar") ||
                  activePage?.startsWith("res-") ||
                  activePage?.startsWith("com-") ||
                  activePage?.startsWith("ind-"),
                )}
                `}
              >
                Solar Solutions
                <ChevronDown
                  className={`
                    h-3.5 w-3.5
                    transition-transform duration-300
                    ${solutionsOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Dropdown */}
              {solutionsOpen && (
                <div
                  className="
                    absolute left-0 top-full
                    mt-5
                    w-[320px]
                    rounded-2xl
                    border border-[#E6E6E6]
                    bg-white
                    p-2
                    shadow-[0_18px_45px_rgba(16,24,40,0.12)]
                  "
                >
                  {/* Residential */}
                  <button
                    onClick={() => handleNavClick("res-solar")}
                    className="
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-3
                      text-left
                      transition-colors
                      hover:bg-[#FAFAFA]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-indigo-50
                      "
                    >
                      <HomeIcon className="h-5 w-5 text-indigo-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Residential Solar
                      </p>

                      <p className="mt-0.5 text-xs text-[#585858]">
                        Homes & rooftop systems
                      </p>
                    </div>
                  </button>

                  {/* Commercial */}
                  <button
                    onClick={() => handleNavClick("com-solar")}
                    className="
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-3
                      text-left
                      transition-colors
                      hover:bg-[#FAFAFA]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-violet-50
                      "
                    >
                      <Building2 className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Commercial Solar
                      </p>

                      <p className="mt-0.5 text-xs text-[#585858]">
                        Offices, schools & businesses
                      </p>
                    </div>
                  </button>

                  {/* Industrial */}
                  <button
                    onClick={() => handleNavClick("ind-solar")}
                    className="
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-3
                      text-left
                      transition-colors
                      hover:bg-[#FAFAFA]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-emerald-50
                      "
                    >
                      <Factory className="h-5 w-5 text-emerald-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Industrial Solar
                      </p>

                      <p className="mt-0.5 text-xs text-[#585858]">
                        Factories & large installations
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              onClick={() => handleNavClick("projects")}
              className={navItemClass(activePage === "projects")}
            >
              Projects
            </button>
          </nav>

          {/* =========================
                  CENTER LOGO
          ========================== */}
          <button
            onClick={() => handleNavClick("home")}
            className="
              flex items-center gap-2.5
              lg:absolute
              lg:left-1/2
              lg:-translate-x-1/2
            "
          >
            {/* Logo Icon */}
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-linear-to-br
                from-[#DD9300]
                to-[#DDF800]
                shadow-sm
              "
            >
              <Sun className="h-5 w-5 text-white" />
            </div>

            {/* Brand */}
            <div className="text-left">
              <div
                className="
                  text-[18px]
                  font-bold
                  leading-none
                  tracking-tight
                  text-blue-900
                  sm:text-xl
                "
              >
                AJ SOLAR
                <span className="text-indigo-600">.</span>
              </div>

              <div
                className="
                  mt-1
                  hidden
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#585858]
                  sm:block
                "
              >
                Solar EPC India
              </div>
            </div>
          </button>

          {/* =========================
              RIGHT DESKTOP ACTIONS
          ========================== */}
          <div
            className="
              hidden flex-1
              items-center justify-end
              gap-3
              lg:flex
            "
          >
            {/* Calculator */}
            <button
              onClick={() => handleNavClick("calculator")}
              className="
                inline-flex
                items-center gap-2
                rounded-full
                bg-indigo-50
                px-5 py-3
                text-sm
                font-semibold
                text-indigo-600
                transition-all duration-300
                hover:bg-indigo-100
              "
            >
              <Calculator className="h-4 w-4" />
              Solar Calculator
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => openLeadModal()}
              className="
                inline-flex
                items-center justify-center
                rounded-full
                bg-indigo-600
                px-6 py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all duration-300
                hover:bg-indigo-700
                hover:shadow-md
              "
            >
              Get Free Assessment
            </button>
          </div>

          {/* =========================
               MOBILE ACTIONS
          ========================== */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openLeadModal()}
              className="
                hidden
                rounded-full
                bg-indigo-600
                px-4 py-2.5
                text-xs
                font-semibold
                text-white
                sm:inline-flex
              "
            >
              Get Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-[#E6E6E6]
                bg-white/70
                text-blue-900
                transition-colors
                hover:bg-white
              "
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =========================
               MOBILE MENU
      ========================== */}
      {mobileMenuOpen && (
        <div
          className="
            border-t border-[#E6E6E6]
            bg-white
            px-4
            pb-6 pt-3
            shadow-xl
            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              space-y-1
            "
          >
            {/* Home */}
            <button
              onClick={() => handleNavClick("home")}
              className="
                w-full
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-semibold
                text-blue-900
                hover:bg-[#FAFAFA]
              "
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick("about")}
              className="
                w-full
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-semibold
                text-blue-900
                hover:bg-[#FAFAFA]
              "
            >
              About us
            </button>

            {/* Solutions Heading */}
            <div className="px-4 pb-1 pt-3">
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#9C9C9C]
                "
              >
                Solar Solutions
              </p>
            </div>

            <button
              onClick={() => handleNavClick("res-solar")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-medium
                text-[#4E4E4E]
                hover:bg-[#FAFAFA]
              "
            >
              <HomeIcon className="h-4 w-4 text-indigo-600" />
              Residential Solar
            </button>

            <button
              onClick={() => handleNavClick("com-solar")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-medium
                text-[#4E4E4E]
                hover:bg-[#FAFAFA]
              "
            >
              <Building2 className="h-4 w-4 text-violet-600" />
              Commercial Solar
            </button>

            <button
              onClick={() => handleNavClick("ind-solar")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-medium
                text-[#4E4E4E]
                hover:bg-[#FAFAFA]
              "
            >
              <Factory className="h-4 w-4 text-emerald-600" />
              Industrial Solar
            </button>

            {/* Other navigation */}
            <div
              className="
                my-3
                border-t
                border-[#E6E6E6]
              "
            />

            <button
              onClick={() => handleNavClick("projects")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-semibold
                text-blue-900
                hover:bg-[#FAFAFA]
              "
            >
              <BriefcaseBusiness className="h-4 w-4 text-[#585858]" />
              Projects
            </button>

            <button
              onClick={() => handleNavClick("calculator")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-semibold
                text-indigo-600
                hover:bg-indigo-50
              "
            >
              <Calculator className="h-4 w-4" />
              Solar Calculator
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="
                flex w-full
                items-center gap-3
                rounded-xl
                px-4 py-3
                text-left
                text-sm
                font-semibold
                text-blue-900
                hover:bg-[#FAFAFA]
              "
            >
              <Phone className="h-4 w-4 text-[#585858]" />
              Contact Us
            </button>

            {/* Mobile CTA */}
            <div className="pt-4">
              <button
                onClick={() => {
                  openLeadModal();
                  setMobileMenuOpen(false);
                }}
                className="
                  flex w-full
                  items-center justify-center
                  rounded-full
                  bg-indigo-600
                  px-6 py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-colors
                  hover:bg-indigo-700
                "
              >
                Get Free Assessment
              </button>
            </div>

            {/* Phone */}
            {config?.companyInfo?.phone && (
              <a
                href={`tel:${config.companyInfo.phone}`}
                className="
                  flex w-full
                  items-center justify-center
                  gap-2
                  py-3
                  text-xs
                  font-medium
                  text-[#585858]
                "
              >
                <Phone className="h-3.5 w-3.5" />

                {config.companyInfo.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
