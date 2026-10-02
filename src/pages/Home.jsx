import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calculator,
  ChevronDown,
  ChevronRight,
  IndianRupee,
  Landmark,
  Sun,
  Zap,
} from "lucide-react";
import { useState } from "react";
import QuickCalculator from "../components/calculator/QuickCalculator";
import SavingsChart from "../components/common/SavingsChart";
import { useLead } from "../context/LeadContext";
import { FAQS_DATA, PROJECTS_DATA } from "../data/solarData";
import solar_power from  '../assets/solar-power.png'

export default function Home() {
  const { navigateTo, openLeadModal, setSelectedProject, config } = useLead();
  const [openFaq, setOpenFaq] = useState(0);

  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-0 ">
      {/* 1. HERO SECTION (Clean Whitespace Editorial Hero) */}
      <section className="relative overflow-hidden pt-14 sm:pt-20 lg:pt-24 border-b border-[#E6E6E6] bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
        {/* subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className=" absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_68%)] "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-blue-900 p-1 pl-4"
          >
            <Sun className="w-4 h-4 text-[#ff385c]" />

            <span className="text-xs sm:text-sm font-medium text-blue-900">
              Smarter energy for your home & business
            </span>

            <button
              onClick={() => {
                const el = document.getElementById("solar-calculator");

                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigateTo("calculator");
                }
              }}
              className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-950 transition-colors"
              aria-label="Open solar calculator"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-[-0.04em] leading-[1.08] text-blue-900"
          >
            Power Your Future With{" "}
            <span className="text-[#ff385c]">Solar.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5f6368]"
          >
            Reduce electricity bills by up to 90% with professionally engineered
            solar systems designed around your property, energy usage and
            long-term goals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => {
                const el = document.getElementById("solar-calculator");

                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigateTo("calculator");
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-blue-950 transition-all group"
            >
              <Calculator className="w-5 h-5" />
              Calculate Solar Savings
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => openLeadModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#E2E2E2] bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-blue-900 hover:bg-[#FAFAFA] transition-all"
            >
              Get Free Assessment
            </button>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-[#5f6368]"
          >
            <span>✓ Residential</span>
            <span>✓ Commercial</span>
            <span>✓ Industrial</span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative mx-auto mt-12 sm:mt-16 max-w-6xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={solar_power}
                alt="High quality rooftop solar installation"
                className="w-full h-full object-contain"
              />

              {/* Bottom information card */}
              <div className="absolute left-3 right-3 bottom-3 sm:left-6 sm:right-6 sm:bottom-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/95 backdrop-blur-xl p-4 sm:p-5 text-left shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1f3]">
                      <Sun className="w-5 h-5 text-[#ff385c]" />
                    </div>

                    <div>
                      <p className="text-[11px] sm:text-xs uppercase tracking-wide text-[#72767d]">
                        ALMM & DISCOM Approved EPC
                      </p>

                      <p className="mt-0.5 text-sm sm:text-base font-semibold text-blue-900">
                        25-Year Linear Power Output Warranty
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex self-start sm:self-auto items-center rounded-full border border-[#E6E6E6] bg-[#FAFAFA] px-4 py-2">
                    <span className="text-xs sm:text-sm font-semibold text-blue-900">
                      98.6% Efficiency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SIGNATURE BAND: PM SURYA GHAR GOVT SUBSIDY (Placed Directly Below Hero) */}
      <section className="relative bg-white border-b border-[#E6E6E6] py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className=" grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center "
          >
            {/* =========================
          LEFT CONTENT
      ========================== */}
            <div className="lg:col-span-5">
              {/* Small label */}
              <div className=" inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-indigo-600 ">
                <Award className="w-4 h-4" />
                PM Surya Ghar Yojana
              </div>

              {/* Heading */}
              <h2 className=" max-w-125 text-3xl sm:text-4xl lg:text-[40px] leading-[1.22] tracking-[-0.03em] font-semibold text-blue-900 ">
                Claim up to ₹78,000 government solar subsidy.
              </h2>

              {/* Description */}
              <p className=" mt-4 max-w-lg text-sm sm:text-base leading-7 text-[#585858] ">
                Get financial assistance for residential rooftop solar under the
                PM Surya Ghar: Muft Bijli Yojana.
              </p>

              {/* Desktop / tablet CTA */}
              <div className="mt-6 hidden sm:flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo("subsidies")}
                  className=" inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 "
                >
                  View Subsidy Guide
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* =========================
          RIGHT FEATURES
      ========================== */}
            <div className=" lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 ">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className=" flex sm:block items-start gap-4 "
              >
                {/* Icon */}
                <div className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200 text-indigo-600 ">
                  <IndianRupee className="w-5 h-5" />
                </div>

                <div className="sm:mt-4">
                  <h3 className=" text-sm font-semibold text-blue-900 ">
                    ₹30,000–₹60,000
                  </h3>

                  <p className=" mt-1.5 text-xs sm:text-sm leading-5 text-[#585858] ">
                    Subsidy support for eligible 1–2 kW residential solar
                    systems.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className=" flex sm:block items-start gap-4 "
              >
                {/* Icon */}
                <div className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200 text-indigo-600 ">
                  <Zap className="w-5 h-5" />
                </div>

                <div className="sm:mt-4">
                  <h3 className=" text-sm font-semibold text-blue-900 ">
                    ₹78,000 Maximum
                  </h3>

                  <p className=" mt-1.5 text-xs sm:text-sm leading-5 text-[#585858] ">
                    Maximum subsidy available for eligible residential systems
                    of 3 kW or above.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className=" flex sm:block items-start gap-4 "
              >
                {/* Icon */}
                <div className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200 text-indigo-600 ">
                  <Landmark className="w-5 h-5" />
                </div>

                <div className="sm:mt-4">
                  <h3 className=" text-sm font-semibold text-blue-900 ">
                    Direct Bank Transfer
                  </h3>

                  <p className=" mt-1.5 text-xs sm:text-sm leading-5 text-[#585858] ">
                    Eligible subsidy amount is transferred directly to the
                    beneficiary bank account.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =========================
        MOBILE ACTIONS
    ========================== */}
          <div className=" mt-9 flex flex-col gap-3 sm:hidden ">
            <button
              onClick={() => navigateTo("subsidies")}
              className=" inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 "
            >
              View Subsidy Guide
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                openLeadModal({
                  propertyType: "residential",
                })
              }
              className=" w-full rounded-full border border-[#E2E2E2] bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-[#FAFAFA] "
            >
              Check My Eligibility
            </button>
          </div>

          {/* =========================
        DESKTOP SECOND CTA
    ========================== */}
          <div className="mt-8 hidden sm:flex">
            <button
              onClick={() =>
                openLeadModal({
                  propertyType: "residential",
                })
              }
              className=" inline-flex items-center justify-center rounded-full bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-100 "
            >
              Check Subsidy Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* 3. LOGO & TRUST STRIP */}
      <section className="bg-[#fbfcff] border-b border-[#E6E6E6] py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-8 "
          >
            {/* Projects Completed */}
            <div className="text-center lg:text-left">
              <div className="w-full h-0.5 bg-indigo-500 mb-8" />

              <div className=" text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-blue-900 ">
                {config.companyInfo.projectsCompleted}+
              </div>

              <p className="mt-2 text-sm sm:text-base text-[#585858]">
                Projects Completed
              </p>
            </div>

            {/* Solar Capacity */}
            <div className="text-center lg:text-left">
              <div className="w-full h-0.5 bg-rose-500 mb-8" />

              <div className=" text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-blue-900 ">
                {config.companyInfo.mwInstalled} MW+
              </div>

              <p className="mt-2 text-sm sm:text-base text-[#585858]">
                Solar Capacity
              </p>
            </div>

            {/* Electricity Savings */}
            <div className="text-center lg:text-left">
              <div className="w-full h-0.5 bg-emerald-500 mb-8" />

              <div className=" text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-blue-900 ">
                ₹{config.companyInfo.savingsGeneratedCr} Cr+
              </div>

              <p className="mt-2 text-sm sm:text-base text-[#585858]">
                Electricity Savings
              </p>
            </div>

            {/* CO2 Reduced */}
            <div className="text-center lg:text-left">
              <div className="w-full h-0.5 bg-amber-500 mb-8" />

              <div className=" text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-blue-900 ">
                {(config.companyInfo.co2ReducedTonnes / 1000).toFixed(0)}k+
              </div>

              <p className="mt-2 text-sm sm:text-base text-[#585858]">
                Tonnes CO₂ Reduced
              </p>
            </div>

            {/* Trusted Brands */}
            <div className="text-center lg:text-left col-span-2 sm:col-span-1">
              <div className="w-full h-0.5 bg-sky-500 mb-8" />

              <div className=" text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-blue-900 ">
                6+
              </div>

              <p className="mt-2 text-sm sm:text-base text-[#585858]">
                Trusted Solar Brands
              </p>
            </div>
          </motion.div>

          {/* Brand Names */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className=" mt-12 pt-7 border-t border-[#E6E6E6] flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] sm:text-xs font-semibold tracking-[0.08em] text-[#9C9C9C] "
          >
            <span>WAAREE SOLAR</span>
            <span>ADANI SOLAR</span>
            <span>SUNGROW</span>
            <span>GROWATT</span>
            <span>ENPHASE</span>
            <span>TATA POWER</span>
          </motion.div>
        </div>
      </section>

      {/* 4. QUICK SOLAR CALCULATOR */}
      <QuickCalculator />

      {/* 5. SIGNATURE CORAL CARD: PRODUCTION TECHNOLOGY */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-[#DD9900] to-violet-600 px-5 py-12 text-center text-white shadow-[0_20px_60px_rgba(221,147,0,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-16 "
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* Small Label */}
              <span className=" mb-4 inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-indigo-100 ">
                Tier-1 Solar Technology
              </span>

              {/* Heading */}
              <h2 className=" mx-auto max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-[1.2] text-white ">
                High-performance solar modules built for Indian conditions.
              </h2>

              {/* Features */}
              <div className=" mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 text-sm text-indigo-50 ">
                <div className="flex items-center gap-2">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 ">
                    ✓
                  </span>

                  <span>High-efficiency TOPCon technology</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 ">
                    ✓
                  </span>

                  <span>Designed for high-temperature performance</span>
                </div>
              </div>

              {/* Short Description */}
              <p className=" mx-auto mt-5 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base ">
                Half-cut cell technology and optimized temperature coefficients
                help deliver reliable solar generation even during demanding
                Indian summers.
              </p>

              {/* CTA Buttons */}
              <div className=" mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ">
                {/* Primary */}
                <button
                  onClick={() => navigateTo("products")}
                  className=" inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm transition-all hover:bg-indigo-50 sm:w-auto "
                >
                  Explore Technology
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary */}
                <button
                  onClick={() => openLeadModal()}
                  className=" inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto "
                >
                  Get Solar Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. PROMINENT 25-YEAR SAVINGS GRAPH */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-[#f7f8ff] border-t border-[#E6E6E6]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-56 -top-64 h-150 w-150 rounded-full bg-indigo-500/6 blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
              Financial Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-blue-900 mt-1">
              25-Year Compounding Cash Savings
            </h2>
            <p className="text-xs sm:text-sm text-[#41454d] mt-1">
              Compare compounding DISCOM grid electricity inflation against
              fixed clean solar power generation.
            </p>
          </div>

          <SavingsChart />
        </div>
      </section>

      {/* 7. DEMO GRID CARDS WITH WARM PASTELS */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
              Solutions Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal text-blue-900 mt-1">
              Solar Solutions Built Around You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Peach Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#aa2d00] uppercase font-mono">
                  Residential
                </span>
                <h3 className="text-xl font-bold text-blue-900">
                  Home Rooftop Solar
                </h3>
                <p className="text-xs text-[#333840] leading-relaxed">
                  3 kW to 25 kW setups with DISCOM net metering and optional
                  battery backup.
                </p>
              </div>
              <button
                onClick={() => navigateTo("res-solar")}
                className="bg-blue-900 text-white hover:bg-blue-950 font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Explore Residential Solar →
              </button>
            </motion.div>

            {/* Mint Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-emerald-800 uppercase font-mono">
                  Commercial
                </span>
                <h3 className="text-xl font-bold text-blue-900">
                  Commercial Solar
                </h3>
                <p className="text-xs text-[#333840] leading-relaxed">
                  25 kW to 250 kW setups with 40% Accelerated Depreciation tax
                  benefits.
                </p>
              </div>
              <button
                onClick={() => navigateTo("com-solar")}
                className="bg-blue-900 text-white hover:bg-blue-950 font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Explore Commercial Solar →
              </button>
            </motion.div>

            {/* Yellow Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-amber-900 uppercase font-mono">
                  Industrial
                </span>
                <h3 className="text-xl font-bold text-blue-900">
                  Industrial MW Plants
                </h3>
                <p className="text-xs text-[#333840] leading-relaxed">
                  250 kW to 5 MW+ shed and ground-mounted plants for heavy
                  daytime load offset.
                </p>
              </div>
              <button
                onClick={() => navigateTo("ind-solar")}
                className="bg-blue-900 text-white hover:bg-blue-950 font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Explore Industrial Solar →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SIGNATURE FOREST CARD: INDUSTRIAL TAX SHIELD */}
      <section className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0a2e0e] text-white rounded-3xl p-8 sm:p-14 space-y-6 shadow-xl"
          >
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              Section 32 Tax Advantage
            </span>

            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight">
              Claim 40% Accelerated Depreciation in Year 1.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Indian businesses can write off 40% of their solar equipment
              investment in the first financial year, accelerating capital
              recovery down to 3.0 years.
            </p>

            <div className="pt-4">
              <button
                onClick={() => openLeadModal({ propertyType: "commercial" })}
                className="bg-white text-[#0a2e0e] hover:bg-[#FAFAFA] font-bold text-xs px-8 py-4 rounded-xl transition-all shadow-md"
              >
                Get Commercial Tax Proposal →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FEATURED PROJECTS SHOWCASE */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                Execution Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mt-1">
                Solar In Action
              </h2>
            </div>
            <button
              onClick={() => navigateTo("projects")}
              className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              View All Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-[#E6E6E6] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white text-blue-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {proj.capacity} • {proj.systemType}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-bold text-[#41454d] uppercase block">
                      {proj.city}
                    </span>
                    <h3 className="text-base font-bold text-blue-900 leading-snug">
                      {proj.title}
                    </h3>
                    <div className="text-xs text-emerald-700 font-semibold pt-1">
                      Annual Savings: {proj.annualSavings}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full border border-[#E6E6E6] hover:border-blue-900 text-blue-900 font-semibold py-2 rounded-xl text-xs transition-colors"
                  >
                    View Case Study Breakdown
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDIONS */}
      <section className="y-20 sm:py-24 bg-[#FAFAFA] border-t border-[#E6E6E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mt-1">
              Solar Questions, Answered
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.slice(0, 6).map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E6E6E6] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between font-semibold text-blue-900 text-sm sm:text-base gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#41454d] shrink-0 transition-transform ${isOpen ? "rotate-180 text-blue-900" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#41454d] leading-relaxed border-t border-[#E6E6E6] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. SIGNATURE DARK NAVY CTA BAND */}
      <section className="bg-blue-900 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Turn Your Roof Into an Energy Asset.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get a site-specific solar proposal with recommended capacity, PM
            Surya Ghar subsidy claim details, and net metering roadmap.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openLeadModal()}
              className="bg-white hover:bg-[#FAFAFA] text-blue-900 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Get Free Solar Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
