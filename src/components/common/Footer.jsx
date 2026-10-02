import React from "react";
import { useLead } from "../../context/LeadContext";

export default function Footer() {
  const { navigateTo, config } = useLead();

  return (
    <footer className="bg-white text-blue-900 border-t border-[#E6E6E6] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Airbnb-Style Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#E6E6E6]">
          {/* Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-blue-900">
              Solar Solutions
            </h4>
            <ul className="space-y-2 text-sm text-[#585858]">
              <li>
                <button
                  onClick={() => navigateTo("res-solar")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Residential Solar (3 - 25 kW)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("com-solar")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Commercial Solar (25 - 250 kW)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("ind-solar")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Industrial Solar (250 kW - 5 MW+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("solutions")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  On-Grid Net-Metered Solar
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("solutions")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Hybrid Solar + Battery Backup
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Engineering */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-blue-900">
              Company & Engineering
            </h4>
            <ul className="space-y-2 text-sm text-[#585858]">
              <li>
                <button
                  onClick={() => navigateTo("about")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  About Us & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("services")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  10-Stage EPC Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("products")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Products & Tier-1 Panels
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("projects")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Featured Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("calculator")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Solar Savings Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("partner")}
                  className="hover:underline hover:text-blue-900 transition-colors"
                >
                  Become a B2B Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Service Hubs */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-blue-900">
              Solar HQ & Service Hubs
            </h4>
            <div className="space-y-2 text-sm text-[#585858]">
              <p className="text-blue-900 font-semibold">
                {config.companyInfo.address}
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${config.companyInfo.phone}`}
                  className="text-blue-900 underline"
                >
                  {config.companyInfo.phoneDisplay}
                </a>
              </p>
              {config.companyInfo.email && (
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${config.companyInfo.email}`}
                    className="text-blue-900 underline"
                  >
                    {config.companyInfo.email}
                  </a>
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => navigateTo("city-gurugram")}
                className="px-2.5 py-1 rounded-full bg-[#FAFAFA] border border-[#E6E6E6] text-blue-900 hover:bg-[#EDEDED]"
              >
                Gurugram
              </button>
              <button
                onClick={() => navigateTo("city-delhi")}
                className="px-2.5 py-1 rounded-full bg-[#FAFAFA] border border-[#E6E6E6] text-blue-900 hover:bg-[#EDEDED]"
              >
                Delhi NCR
              </button>
              <button
                onClick={() => navigateTo("city-rewari")}
                className="px-2.5 py-1 rounded-full bg-[#FAFAFA] border border-[#E6E6E6] text-blue-900 hover:bg-[#EDEDED]"
              >
                Rewari & Bawal
              </button>
            </div>
          </div>
        </div>

        {/* Legal Band */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-[#585858] gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 {config.companyInfo.name}, Inc.</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
